import { PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from '@/lib/constants';

export function MobileContactBar() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 md:hidden">
      <div className="grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-black/85 p-2 shadow-glow backdrop-blur">
        <a href={PHONE_LINK} className="rounded-xl bg-white px-3 py-3 text-center text-sm font-semibold text-black transition hover:bg-mist">
          Позвонить
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-xl bg-accent px-3 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#1d4738]">
          WhatsApp
        </a>
        <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 px-3 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10">
          Telegram
        </a>
      </div>
    </div>
  );
}
