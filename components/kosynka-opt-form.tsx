'use client';

import { useMemo, useState } from 'react';

const initialState = {
  name: '',
  phone: '',
  comment: '',
  company: '',
  website: ''
};

export function KosynkaOptForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error' | 'loading'; message: string }>({ type: 'idle', message: '' });
  const formStartedAt = useMemo(() => Date.now(), []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Отправляем запрос…' });

    const payload = {
      name: values.name,
      phone: values.phone,
      contact: values.phone,
      productType: 'Запрос образца: вязаная косынка',
      quantity: 'Запрос образца',
      comment: values.comment || '—',
      company: values.company,
      website: values.website,
      formStartedAt
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || 'Ошибка отправки');
      }
      setStatus({
        type: 'success',
        message: 'Готово! Запрос на образец отправлен. Мы свяжемся с вами в ближайшее время и согласуем детали.'
      });
      setValues(initialState);
    } catch (error) {
      setStatus({ type: 'error', message: error instanceof Error ? error.message : 'Не удалось отправить запрос.' });
    }
  }

  const updateField = (field: keyof typeof initialState) => (value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-6 p-6 sm:p-8 lg:p-9">
      <div className="rounded-[22px] border border-[#16352a]/10 bg-[#16352a]/[0.06] px-5 py-4 text-sm font-semibold text-[#16352a]">
        Оптовая цена — до 290 руб за единицу
      </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#16352a]">Запрос образца</p>
        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#17181c]">Получить образец</h3>
        <p className="text-sm leading-7 text-[#5b5e65]">Оставьте контакт — обсудим и отправим образец вязаной косынки.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-[#50545a]">
          <span>Имя</span>
          <input
            required
            value={values.name}
            onChange={(event) => updateField('name')(event.target.value)}
            className="w-full rounded-2xl border border-black/10 bg-[#fcfbf8] px-4 py-3.5 text-base text-[#17181c] outline-none transition focus:border-[#16352a] focus:bg-white"
            placeholder="Имя"
          />
        </label>

        <label className="space-y-2 text-sm text-[#50545a]">
          <span>Телефон / WhatsApp</span>
          <input
            required
            value={values.phone}
            onChange={(event) => updateField('phone')(event.target.value)}
            className="w-full rounded-2xl border border-black/10 bg-[#fcfbf8] px-4 py-3.5 text-base text-[#17181c] outline-none transition focus:border-[#16352a] focus:bg-white"
            placeholder="Телефон / WhatsApp"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm text-[#50545a]">
        <span>Комментарий</span>
        <textarea
          rows={5}
          value={values.comment}
          onChange={(event) => updateField('comment')(event.target.value)}
          className="w-full rounded-2xl border border-black/10 bg-[#fcfbf8] px-4 py-3.5 text-base text-[#17181c] outline-none transition focus:border-[#16352a] focus:bg-white"
          placeholder="Например: нужен образец, интересует срок отправки."
        />
      </label>

      <input className="hidden" tabIndex={-1} autoComplete="off" value={values.company} onChange={(event) => updateField('company')(event.target.value)} />
      <input className="hidden" tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => updateField('website')(event.target.value)} />

      <div className="flex flex-col gap-4 border-t border-black/[0.06] pt-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <button type="submit" disabled={status.type === 'loading'} className="inline-flex items-center justify-center rounded-full bg-[#17181c] px-6 py-3.5 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-black disabled:cursor-not-allowed disabled:opacity-70">
            {status.type === 'loading' ? 'Отправка…' : 'Получить образец'}
          </button>
          <p className="text-sm leading-6 text-[#5b5e65]">Оставьте минимум контактов — менеджер свяжется и согласует отправку образца.</p>
        </div>
        <p className={`max-w-md text-sm leading-6 ${status.type === 'error' ? 'text-red-600' : 'text-[#5b5e65]'}`}>{status.message}</p>
      </div>
    </form>
  );
}
