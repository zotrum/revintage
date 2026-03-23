import { NextResponse } from 'next/server';

import { sendToEmail, sendToTelegram } from '@/lib/actions';
import { leadSchema } from '@/lib/validation';

const MIN_SUBMIT_DELAY_MS = 4000;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ success: false, message: 'Проверьте заполнение полей.', errors: parsed.error.flatten() }, { status: 400 });
    }

    const { company, website, formStartedAt, ...payload } = parsed.data;

    if (company || website) {
      return NextResponse.json({ success: true, message: 'Заявка принята.' });
    }

    if (Date.now() - formStartedAt < MIN_SUBMIT_DELAY_MS) {
      return NextResponse.json({ success: false, message: 'Форма отправлена слишком быстро. Попробуйте еще раз.' }, { status: 429 });
    }

    const submission = {
      ...payload,
      submittedAt: new Date().toLocaleString('ru-RU', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'Europe/Moscow'
      })
    };

    try {
      await sendToTelegram(submission);
      return NextResponse.json({ success: true, message: 'Заявка отправлена. Мы свяжемся с вами в ближайшее время.' });
    } catch (telegramError) {
      console.error('Telegram delivery failed:', telegramError);
      await sendToEmail(submission);
      return NextResponse.json({ success: true, message: 'Заявка отправлена. Мы свяжемся с вами в ближайшее время.' });
    }
  } catch (error) {
    console.error('Lead API error:', error);
    return NextResponse.json({ success: false, message: 'Не удалось отправить заявку. Попробуйте позвонить или написать в WhatsApp.' }, { status: 500 });
  }
}
