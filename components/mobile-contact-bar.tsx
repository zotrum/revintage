import { PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from '@/lib/constants';

export function MobileContactBar() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 md:hidden">
      <div className="grid grid-cols-3 gap-2 rounded-[22px] border border-black/10 bg-white/95 p-2 shadow-[0_18px_45px_rgba(19,25,22,0.18)] backdrop-blur">
        <a href={PHONE_LINK} className="rounded-2xl bg-[#17181c] px-3 py-3 text-center text-sm font-semibold text-white transition hover:bg-black">
          Позвонить
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-2xl bg-[#16352a] px-3 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#1d4738]">
          WhatsApp
        </a>
        <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="rounded-2xl border border-black/10 px-3 py-3 text-center text-sm font-semibold text-[#17181c] transition hover:bg-black/[0.03]">
          Telegram
        </a>
      </div>
    </div>
  );
}
