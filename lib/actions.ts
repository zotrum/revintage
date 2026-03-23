import nodemailer from 'nodemailer';

export type LeadPayload = {
  name: string;
  phone: string;
  contact: string;
  productType: string;
  quantity: string;
  comment: string;
  submittedAt: string;
};

const formatMessage = (payload: LeadPayload) => [
  'Новая заявка с сайта Revintage',
  `Имя: ${payload.name}`,
  `Телефон: ${payload.phone}`,
  `Контакт: ${payload.contact}`,
  `Тип изделия: ${payload.productType}`,
  `Объем партии: ${payload.quantity}`,
  `Комментарий: ${payload.comment || '—'}`,
  `Дата и время: ${payload.submittedAt}`
].join('\n');

// Main delivery channel. Configure TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env.local.
export async function sendToTelegram(payload: LeadPayload) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    throw new Error('Telegram integration is not configured');
  }

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: formatMessage(payload)
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Telegram API error: ${response.status} ${errorText}`);
  }
}

// Fallback delivery channel. Configure SMTP_* and MAIL_TO in .env.local.
export async function sendToEmail(payload: LeadPayload) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.MAIL_TO;
  const from = process.env.MAIL_FROM || user;

  if (!host || !user || !pass || !to) {
    throw new Error('Email fallback is not configured');
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  });

  await transporter.sendMail({
    from,
    to,
    subject: 'Новая заявка с сайта Revintage',
    text: formatMessage(payload)
  });
}
