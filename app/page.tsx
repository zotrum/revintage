import Image from 'next/image';

import { LeadForm } from '@/components/lead-form';
import { MobileContactBar } from '@/components/mobile-contact-bar';
import { galleryItems } from '@/data/gallery';
import { BRAND_NAME, CITY, PHONE_DISPLAY, PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from '@/lib/constants';

const navigation = [
  ['О цехе', 'about'],
  ['Продукция', 'production'],
  ['Преимущества', 'advantages'],
  ['Галерея', 'gallery'],
  ['Процесс', 'process'],
  ['Заявка', 'lead'],
  ['Контакты', 'contacts']
] as const;

const heroPoints = [
  'Производство под заказ для брендов и опта',
  'Образцы перед запуском партии',
  'Малые и средние партии без лишней бюрократии',
  'Прямая коммуникация с производством'
];

const productCategories = ['Кардиганы', 'Джемперы', 'Свитеры', 'Шапки', 'Шарфы', 'Жилеты', 'Школьный трикотаж', 'Private label'];
const capabilities = ['Разработка по фото, эскизу или образцу', 'Подбор конструкции и типа вязки', 'Изготовление тестового образца', 'Производство партий', 'Подготовка изделий к отгрузке', 'Работа под брендом заказчика'];
const advantages = [
  {
    title: 'Не посредник, а реальный цех',
    text: 'Заказчик общается с производством напрямую и получает понятную обратную связь по срокам, образцам и запуску.'
  },
  {
    title: 'Коммерческий взгляд на модель',
    text: 'Смотрим не только на картинку, но и на то, насколько изделие технологично, повторяемо и жизнеспособно в продаже.'
  },
  {
    title: 'Гибкость для малого и среднего объема',
    text: 'Удобно работать как с брендами на старте, так и с действующими продавцами, которым нужен стабильный производственный партнер.'
  },
  {
    title: 'Быстрая коммуникация',
    text: 'Сайт, форма и контакты собраны так, чтобы клиент мог сразу перейти к диалогу: заявка, звонок, WhatsApp или Telegram.'
  }
];
const processSteps = ['Получаем запрос', 'Уточняем задачу', 'Оцениваем стоимость', 'Делаем образец', 'Согласовываем', 'Запускаем партию', 'Отгружаем'];
const audiences = ['бренды одежды', 'магазины и шоурумы', 'маркетплейс-продавцы', 'оптовые клиенты', 'корпоративные заказчики', 'школьные проекты'];

export default function HomePage() {
  return (
    <main className="overflow-hidden text-[#17181c]">
      <header className="sticky top-0 z-40 border-b border-black/[0.05] bg-[#fbfaf7]/90 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between gap-6">
          <a href="#top" className="text-lg font-semibold tracking-[0.16em] text-[#17181c]">
            {BRAND_NAME.toUpperCase()}
          </a>
          <nav className="hidden items-center gap-6 text-sm text-[#5d6168] lg:flex">
            {navigation.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="transition hover:text-[#17181c]">
                {label}
              </a>
            ))}
          </nav>
          <a href="#lead" className="rounded-full bg-[#17181c] px-4 py-2 text-sm font-medium text-white transition hover:bg-black">
            Оставить заявку
          </a>
        </div>
      </header>

      <section id="top" className="section-shell section-gap pb-14 pt-10 sm:pt-16 lg:pb-20">
        <div className="grid gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-stretch">
          <div className="soft-panel fade-in relative overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#16352a]/10 blur-3xl" />
            <div className="relative space-y-8">
              <span className="eyebrow">Контрактное производство трикотажа</span>
              <div className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#17181c] sm:text-5xl lg:text-7xl">
                  Revintage — вязальный цех под заказ для брендов, ритейла и оптовых клиентов
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[#565a61] sm:text-xl">
                  Производство трикотажа для брендов, магазинов, маркетплейсов и оптовых клиентов.
                </p>
                <p className="max-w-3xl text-base leading-8 text-[#5e6168] sm:text-lg">
                  Кардиганы, джемперы, свитеры, шапки, шарфы и другие изделия. Разрабатываем образцы, согласовываем конструкцию и запускаем партии под ваш бренд без лишней сложности в коммуникации.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <a href="#lead" className="inline-flex items-center justify-center rounded-full bg-[#17181c] px-6 py-4 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-black">
                  Оставить заявку
                </a>
                <a href={PHONE_LINK} className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-4 text-sm font-semibold text-[#17181c] transition hover:border-black/20 hover:bg-[#f4f1eb]">
                  Позвонить
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#16352a] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#1d4738]">
                  WhatsApp
                </a>
              </div>

              <div className="grid gap-3 pt-2 sm:grid-cols-2 xl:grid-cols-4">
                {heroPoints.map((point) => (
                  <div key={point} className="rounded-[22px] border border-black/[0.06] bg-white/80 px-4 py-4 text-sm leading-6 text-[#4b5056] shadow-[0_10px_30px_rgba(19,25,22,0.04)]">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="fade-in flex flex-col gap-6">
            <div className="card-surface p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#16352a]">Почему это удобно B2B-клиенту</p>
              <div className="mt-6 space-y-5">
                <div>
                  <div className="text-4xl font-semibold tracking-[-0.05em] text-[#17181c]">от образца до партии</div>
                  <p className="mt-2 text-sm leading-7 text-[#5b5f65]">Один понятный контур работы: вы даете задачу, мы переводим ее в производственный процесс.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {['Прозрачная коммуникация по задаче', 'Удобный вход через заявку или мессенджер', 'Фокус на повторяемость изделий', 'Структура сайта заточена под конверсию'].map((item) => (
                    <div key={item} className="rounded-[22px] border border-black/[0.06] bg-[#faf8f3] px-4 py-4 text-sm leading-6 text-[#4f5459]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[30px] bg-[#17181c] p-7 text-white shadow-[0_24px_60px_rgba(19,25,22,0.2)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">Быстрый контакт</p>
              <div className="mt-5 space-y-4">
                <p className="text-2xl font-semibold tracking-[-0.03em]">Если проще обсудить задачу сразу — позвоните или напишите напрямую.</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <a href={PHONE_LINK} className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#17181c] transition hover:bg-[#f0ede5]">
                    {PHONE_DISPLAY}
                  </a>
                  <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10">
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-shell pb-6 pt-6 sm:pb-8 sm:pt-10">
        <div className="fade-in grid gap-8 lg:grid-cols-[0.84fr_1.16fr]">
          <div>
            <span className="eyebrow">О цехе</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Производство, которое разговаривает с клиентом на языке сроков, качества и повторяемости.</h2>
          </div>
          <div className="card-surface p-8 text-base leading-8 text-[#565a61] sm:text-lg">
            Revintage — вязальный цех, ориентированный на контрактное производство трикотажа под заказ. Мы работаем с брендами, магазинами и предпринимателями, которым нужен понятный и управляемый производственный результат: от образца до готовой партии. Для нас важно не просто связать изделие, а сделать продукт, который можно стабильно повторять и продавать.
          </div>
        </div>
      </section>

      <section id="production" className="section-shell section-gap fade-in">
        <div className="mb-10 max-w-3xl">
          <span className="eyebrow">Что мы производим</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Ассортимент, который можно адаптировать под канал продаж, позиционирование бренда и объем партии.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {productCategories.map((item) => (
            <article key={item} className="card-surface group p-6 transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(19,25,22,0.1)]">
              <div className="text-sm uppercase tracking-[0.18em] text-[#16352a]">Категория</div>
              <h3 className="mt-5 text-xl font-medium text-[#17181c]">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5b5e65]">Подбираем конструкцию, плотность, состав и визуальную подачу так, чтобы изделие было не просто красивым, а коммерчески рабочим.</p>
            </article>
          ))}
        </div>
      </section>

      <section id="advantages" className="section-shell section-gap pt-0 fade-in">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="soft-panel p-8 sm:p-10">
            <span className="eyebrow">Наши возможности</span>
            <div className="mt-6 grid gap-4">
              {capabilities.map((item, index) => (
                <div key={item} className="flex items-start gap-4 rounded-[22px] border border-black/[0.06] bg-white/80 px-5 py-4 text-[#4c5057]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#16352a] text-sm font-semibold text-white">{index + 1}</span>
                  <span className="pt-1 text-sm leading-7">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface p-8 sm:p-10">
            <span className="eyebrow">Почему Revintage</span>
            <div className="mt-6 space-y-4">
              {advantages.map((item) => (
                <article key={item.title} className="rounded-[24px] border border-black/[0.06] bg-[#faf8f2] p-6 transition hover:bg-white">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#17181c]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5b5f65]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section-shell section-gap fade-in">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">Примеры изделий</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Галерея с архитектурой под реальные кейсы, образцы, фактуры и производственные фото.</h2>
            <p className="mt-4 text-base leading-8 text-[#5d6168]">Секция сделана так, чтобы реальные фото выглядели дорого и убедительно. Сейчас используются структурированные placeholder-изображения, которые можно заменить без переработки кода.</p>
          </div>
          <a href="#lead" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#17181c] transition hover:bg-[#f4f1eb]">
            Обсудить производство
          </a>
        </div>

        <div className="grid auto-rows-[260px] gap-5 md:grid-cols-2 xl:grid-cols-4">
          {galleryItems.map((item, index) => {
            const featured = index === 0 || index === 7 || index === 8;
            return (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-[30px] border border-black/[0.06] bg-white shadow-[0_20px_55px_rgba(19,25,22,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_65px_rgba(19,25,22,0.12)] ${featured ? 'xl:col-span-2 xl:row-span-2' : ''}`}
              >
                <div className="absolute inset-0">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#131518]/85 via-[#131518]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
                    {item.category}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-white/75">{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="process" className="section-shell section-gap pt-0 fade-in">
        <div className="soft-panel p-8 sm:p-10">
          <div className="mb-8 max-w-2xl">
            <span className="eyebrow">Как мы работаем</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Понятный путь от первого обращения до готовой отгрузки.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step} className="rounded-[24px] border border-black/[0.06] bg-white px-6 py-6 shadow-[0_12px_30px_rgba(19,25,22,0.04)]">
                <div className="text-sm font-semibold text-[#16352a]">0{index + 1}</div>
                <div className="mt-3 text-lg font-medium text-[#17181c]">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-gap pt-0 fade-in">
        <div className="card-surface p-8 sm:p-10">
          <span className="eyebrow">Для кого мы работаем</span>
          <div className="mt-6 flex flex-wrap gap-3">
            {audiences.map((item) => (
              <span key={item} className="rounded-full border border-black/[0.08] bg-[#faf8f2] px-4 py-3 text-sm text-[#50545a]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="lead" className="section-shell section-gap fade-in">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="soft-panel p-8 sm:p-10">
            <span className="eyebrow">Заявка</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-5xl">Отправьте запрос на производство</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#5b5f65]">
              Оставьте контакты и кратко опишите задачу — мы свяжемся с вами. Основной сценарий отправки идет в Telegram Bot API, резервный — на email через API route.
            </p>

            <div className="mt-8 grid gap-3">
              <a href={PHONE_LINK} className="rounded-[22px] bg-[#17181c] px-5 py-4 text-sm font-semibold text-white transition hover:bg-black">
                Позвонить: {PHONE_DISPLAY}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-[22px] bg-[#16352a] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#1d4738]">
                Написать в WhatsApp
              </a>
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="rounded-[22px] border border-black/10 bg-white px-5 py-4 text-sm font-semibold text-[#17181c] transition hover:bg-[#f4f1eb]">
                Написать в Telegram
              </a>
            </div>

            <div className="mt-8 rounded-[24px] border border-black/[0.06] bg-white/80 p-5 text-sm leading-7 text-[#555961]">
              Хорошая первая заявка — это фото или описание модели, примерный объем, желаемые сроки и ваш удобный канал связи. Этого уже достаточно, чтобы быстро начать диалог.
            </div>
          </div>

          <LeadForm />
        </div>
      </section>

      <section id="contacts" className="section-shell section-gap pt-0 fade-in">
        <div className="rounded-[34px] bg-[#17181c] px-8 py-10 text-white shadow-[0_24px_60px_rgba(19,25,22,0.18)] sm:px-10 sm:py-12">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.22em] text-white/45">Контакты</p>
              <h2 className="text-3xl font-semibold tracking-[-0.03em]">Revintage</h2>
              <p className="text-white/65">{CITY}</p>
              <p className="text-xl text-white">{PHONE_DISPLAY}</p>
              <p className="max-w-lg text-sm leading-7 text-white/65">Производство трикотажа под заказ для брендов, магазинов, маркетплейсов и оптовых клиентов.</p>
            </div>
            <div className="grid gap-3 self-start sm:justify-self-end sm:min-w-[280px]">
              <a href={PHONE_LINK} className="rounded-2xl bg-white px-5 py-4 text-center text-sm font-semibold text-[#17181c] transition hover:bg-[#f0ede5]">
                Кнопка звонка
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-2xl bg-[#16352a] px-5 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#1d4738]">
                WhatsApp
              </a>
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/15 px-5 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/[0.06]">
        <div className="section-shell flex flex-col gap-4 py-8 text-sm text-[#6a6d73] sm:flex-row sm:items-center sm:justify-between">
          <p>Revintage — производство трикотажа под заказ</p>
          <a href="#top" className="transition hover:text-[#17181c]">
            Наверх
          </a>
        </div>
      </footer>

      <MobileContactBar />
    </main>
  );
}
