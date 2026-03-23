export const BRAND_NAME = 'Revintage';

// Replace these defaults in .env.local when the project moves to production.
const rawPhone = process.env.NEXT_PUBLIC_PHONE ?? '+79380323717';
const digits = rawPhone.replace(/\D/g, '');

export const PHONE_DISPLAY = '+7 938 032-37-17';
export const PHONE_LINK = `tel:+${digits}`;
export const WHATSAPP_URL = process.env.NEXT_PUBLIC_WHATSAPP_URL ?? `https://wa.me/${digits}`;
// Replace NEXT_PUBLIC_TELEGRAM_URL with the real public username/link for the contact button.
export const TELEGRAM_URL = process.env.NEXT_PUBLIC_TELEGRAM_URL ?? 'https://t.me/your_username';
export const CITY = process.env.NEXT_PUBLIC_CITY ?? 'Ваш город';
