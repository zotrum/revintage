import Image from 'next/image';

import { LeadForm } from '@/components/lead-form';
import { MobileContactBar } from '@/components/mobile-contact-bar';
import { galleryItems } from '@/data/gallery';
import { BRAND_NAME, CITY, PHONE_DISPLAY, PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from '@/lib/constants';

const navigation = [
  ['О цехе', 'about'],
  ['Что производим', 'production'],
  ['Возможности', 'capabilities'],
  ['Примеры', 'gallery'],
  ['Как работаем', 'process'],
  ['Заявка', 'lead'],
  ['Контакты', 'contacts']
] as const;

const heroPoints = ['Производство под заказ', 'Разработка образцов', 'Малые и средние партии', 'Работаем на профессиональном оборудовании'];
const productCategories = ['Кардиганы', 'Джемперы', 'Свитеры', 'Шапки', 'Шарфы', 'Жилеты', 'Школьный трикотаж', 'Изделия под private label'];
const capabilities = ['Разработка по фото, эскизу или образцу', 'Подбор конструкции и типа вязки', 'Изготовление тестового образца', 'Производство партий', 'Подготовка изделий к отгрузке', 'Работа под брендом заказчика'];
const advantages = ['Реальное производство, а не посредничество', 'Понимание технологичности модели', 'Гибкость по партиям', 'Фокус на коммерчески жизнеспособных изделиях', 'Прямой контакт с производством', 'Быстрая коммуникация'];
const processSteps = ['Получаем запрос', 'Уточняем задачу', 'Оцениваем стоимость', 'Делаем образец', 'Согласовываем', 'Запускаем партию', 'Отгружаем'];
const audiences = ['бренды одежды', 'магазины и шоурумы', 'маркетплейс-продавцы', 'оптовые клиенты', 'корпоративные заказчики', 'школьные проекты'];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-grid bg-[size:44px_44px] opacity-[0.06]" />
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur">
        <div className="section-shell flex h-16 items-center justify-between gap-6">
          <a href="#top" className="text-lg font-semibold tracking-[0.18em] text-white">{BRAND_NAME.toUpperCase()}</a>
          <nav className="hidden items-center gap-5 text-sm text-white/70 lg:flex">
            {navigation.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="transition hover:text-white">{label}</a>
            ))}
          </nav>
          <a href="#lead" className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10">Оставить заявку</a>
        </div>
      </header>

      <section id="top" className="section-shell section-gap relative">
        <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="fade-in space-y-8">
            <div className="inline-flex items-center rounded-full border border-accent/40 bg-accent/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-mist">Контрактное производство трикотажа</div>
            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">Revintage — вязальный цех под заказ</h1>
              <p className="max-w-2xl text-lg text-white/75 sm:text-xl">Производство трикотажа для брендов, магазинов, маркетплейсов и оптовых клиентов</p>
              <p className="max-w-3xl text-base leading-8 text-white/70 sm:text-lg">Кардиганы, джемперы, свитеры, шапки, шарфы и другие трикотажные изделия. Разрабатываем образцы и запускаем партии под ваш бренд.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#lead" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:translate-y-[-1px] hover:bg-mist">Оставить заявку</a>
              <a href={PHONE_LINK} className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Позвонить</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1d4738]">WhatsApp</a>
            </div>
            <div className="grid gap-3 pt-4 sm:grid-cols-2 xl:grid-cols-4">
              {heroPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/80">{point}</div>
              ))}
            </div>
          </div>

          <div className="fade-in card-surface relative overflow-hidden p-6 lg:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(22,53,42,0.55),_transparent_55%)]" />
            <div className="relative space-y-5">
              <p className="text-sm uppercase tracking-[0.22em] text-white/50">B2B-фокус</p>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">Производство, в котором важны сроки, повторяемость и понятная коммуникация.</h2>
              <p className="text-base leading-8 text-white/70">Сайт и форма заявок собраны так, чтобы клиенту было просто перейти к диалогу: отправить запрос, сразу позвонить или написать в WhatsApp / Telegram.</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {['Быстрый первичный ответ', 'Понятная подача заявки', 'Прямой доступ к производству', 'Архитектура готова к Telegram и email'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 px-4 py-4 text-sm text-white/75">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-shell section-gap fade-in">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-white/45">О цехе</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Производство с коммерческой логикой, а не только с визуальной подачей.</h2>
          </div>
          <p className="card-surface p-8 text-base leading-8 text-white/75 sm:text-lg">Revintage — вязальный цех, ориентированный на контрактное производство трикотажа под заказ. Мы работаем с брендами, магазинами и предпринимателями, которым нужен понятный и управляемый производственный результат: от образца до готовой партии. Для нас важно не просто связать изделие, а сделать продукт, который можно стабильно повторять и продавать.</p>
        </div>
      </section>

      <section id="production" className="section-shell section-gap fade-in">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-white/45">Что мы производим</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Ассортимент, который можно адаптировать под вашу модель продаж.</h2>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {productCategories.map((item) => (
            <article key={item} className="card-surface group p-6 transition hover:-translate-y-1 hover:border-accent/50">
              <h3 className="text-xl font-medium text-white">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">Прорабатываем модель, плотность, фактуру, размерный ряд и подачу под нужный канал реализации.</p>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="section-shell section-gap fade-in">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card-surface p-8">
            <p className="text-sm uppercase tracking-[0.22em] text-white/45">Наши возможности</p>
            <div className="mt-6 grid gap-4">
              {capabilities.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 px-4 py-4 text-white/80">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card-surface p-8">
            <p className="text-sm uppercase tracking-[0.22em] text-white/45">Почему Revintage</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {advantages.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-white/80">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section-shell section-gap fade-in">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.22em] text-white/45">Примеры изделий</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Галерея-заготовка для реальных производственных кейсов и ассортимента.</h2>
          <p className="mt-4 text-base leading-8 text-white/70">Карточки подтягиваются из массива данных. Достаточно заменить изображения и тексты в mock data, не меняя структуру секции.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item) => (
            <article key={item.title} className="card-surface group overflow-hidden transition hover:-translate-y-1 hover:border-accent/50">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70">{item.category}</span>
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
                <p className="text-sm leading-7 text-white/65">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="section-shell section-gap fade-in">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.22em] text-white/45">Как мы работаем</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Понятный маршрут от первого запроса до готовой партии.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step} className="card-surface p-6">
              <div className="text-sm text-accent">0{index + 1}</div>
              <div className="mt-3 text-lg font-medium text-white">{step}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell section-gap fade-in">
        <div className="card-surface p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.22em] text-white/45">Для кого мы работаем</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {audiences.map((item) => (
              <span key={item} className="rounded-full border border-white/10 px-4 py-3 text-sm text-white/75">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="lead" className="section-shell section-gap fade-in">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.22em] text-white/45">Заявка</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Отправьте запрос на производство</h2>
            <p className="max-w-xl text-base leading-8 text-white/70">Оставьте контакты и кратко опишите задачу — мы свяжемся с вами. Основной сценарий отправки идет в Telegram Bot API, резервный — на email через API route.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <a href={PHONE_LINK} className="rounded-2xl border border-white/10 px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/10">Позвонить: {PHONE_DISPLAY}</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-2xl bg-accent px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#1d4738]">Написать в WhatsApp</a>
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/10">Написать в Telegram</a>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>

      <section id="contacts" className="section-shell section-gap fade-in">
        <div className="card-surface grid gap-8 p-8 sm:grid-cols-2 sm:p-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.22em] text-white/45">Контакты</p>
            <h2 className="text-3xl font-semibold text-white">Revintage</h2>
            <p className="text-white/70">{CITY}</p>
            <p className="text-lg text-white">{PHONE_DISPLAY}</p>
          </div>
          <div className="grid gap-3 self-start sm:justify-self-end">
            <a href={PHONE_LINK} className="rounded-2xl bg-white px-5 py-4 text-center text-sm font-semibold text-black transition hover:bg-mist">Кнопка звонка</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-2xl bg-accent px-5 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#1d4738]">WhatsApp</a>
            <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 px-5 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10">Telegram</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-4 py-8 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>Revintage — производство трикотажа под заказ</p>
          <a href="#top" className="transition hover:text-white">Наверх</a>
        </div>
      </footer>

      <MobileContactBar />
    </main>
  );
}
