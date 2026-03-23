import Image from 'next/image';

import { LeadForm } from '@/components/lead-form';
import { MobileContactBar } from '@/components/mobile-contact-bar';
import { galleryItems } from '@/data/gallery';
import { BRAND_NAME, CITY, PHONE_DISPLAY, PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from '@/lib/constants';

const navigation = [
  ['О производстве', 'about'],
  ['Ассортимент', 'production'],
  ['Преимущества', 'advantages'],
  ['Галерея', 'gallery'],
  ['Процесс', 'process'],
  ['FAQ', 'faq'],
  ['Заявка', 'lead'],
  ['Контакты', 'contacts']
] as const;

const heroPoints = [
  'Образец перед партией',
  'Прямой контакт с производством',
  'Private label',
  'Минимальный заказ от 49 000 руб',
  'Малые и средние партии',
  'Работаем с селлерами WB и Ozon'
];

const productCategories = [
  {
    title: 'Кардиганы',
    description: 'Для брендов, ритейла и сезонных запусков, где важны посадка, повторяемость и аккуратная сборка модели.'
  },
  {
    title: 'Джемперы',
    description: 'Для базового и коммерческого ассортимента, который должен стабильно работать в повторных продажах.'
  },
  {
    title: 'Свитеры',
    description: 'Для осенне-зимних коллекций, где критичны фактура, плотность и технологичность запуска.'
  },
  {
    title: 'Жилеты',
    description: 'Для школьных, корпоративных и fashion-проектов, где важна удобная адаптация под задачу клиента.'
  },
  {
    title: 'Шапки',
    description: 'Для сезонных аксессуаров и дополнительных категорий, которые можно запускать серийно под спрос.'
  },
  {
    title: 'Шарфы',
    description: 'Для комплектных решений, gift-направлений и расширения ассортимента под розницу и опт.'
  },
  {
    title: 'Школьный трикотаж',
    description: 'Для жилетов, джемперов и другой форменной продукции, где особенно важны повторяемость и дисциплина по срокам.'
  },
  {
    title: 'Изделия под private label',
    description: 'Для брендов и продавцов, которым нужен собственный трикотажный продукт под своей маркой.'
  }
];

const capabilities = [
  'Разработка по фото, образцу или описанию',
  'Оценка технологичности модели',
  'Подбор конструкции и типа вязки',
  'Изготовление тестового образца',
  'Подготовка к запуску партии',
  'Производство под брендом заказчика',
  'Подготовка изделий к отгрузке'
];

const advantages = [
  {
    title: 'Реальное производство, а не посредничество',
    text: 'Вы общаетесь напрямую с цехом и получаете предметную обратную связь по модели, срокам, образцу и запуску партии.'
  },
  {
    title: 'Понимание технологичности',
    text: 'Смотрим на изделие не только с точки зрения внешнего вида, но и с точки зрения повторяемости, сборки и коммерческого потенциала.'
  },
  {
    title: 'Образец перед запуском',
    text: 'Перед партией делаем образец, чтобы согласовать конструкцию, посадку, фактуру и избежать ошибок на серийном этапе.'
  },
  {
    title: 'Подходит для малых и средних партий',
    text: 'Минимальный заказ — от 49 000 руб. Формат партии зависит от модели, задачи и сценария продаж.'
  },
  {
    title: 'Работа под вашим брендом',
    text: 'Поддерживаем формат private label для брендов, магазинов, ритейла и поставщиков, которым нужен свой продукт под своей маркой.'
  },
  {
    title: 'Понятный маршрут работы',
    text: 'Запрос, предварительный расчет, образец, согласование и запуск — без хаоса и лишней неопределенности в процессе.'
  }
];

const audiences = [
  {
    title: 'Бренды одежды',
    text: 'Для запуска новых моделей и капсул под собственным брендом.'
  },
  {
    title: 'Магазины и ритейл',
    text: 'Для собственного трикотажного ассортимента и повторяемых партий.'
  },
  {
    title: 'Селлеры Wildberries и Ozon',
    text: 'Для запуска и расширения трикотажного ассортимента под сезон, спрос и повторяемые продажи.'
  },
  {
    title: 'Оптовые клиенты',
    text: 'Для стабильного производства под нужный объем и формат заказа.'
  },
  {
    title: 'Школьные и корпоративные проекты',
    text: 'Для жилетов, кардиганов, джемперов и другой форменной продукции.'
  }
];

const starterFacts = [
  'Минимальный заказ — от 49 000 руб',
  'Можно начать с фото, образца или описания',
  'Перед партией делаем образец',
  'Работаем напрямую с производством',
  'Формат партии зависит от модели и задачи',
  'Запрос можно отправить через сайт, WhatsApp или Telegram',
  'Работаем с селлерами Wildberries и Ozon'
];

const processSteps = [
  {
    title: 'Вы отправляете запрос',
    text: 'Присылаете фото, образец, описание модели или просто формулируете задачу в удобном формате.'
  },
  {
    title: 'Мы уточняем задачу',
    text: 'Уточняем тип изделия, объем, сроки, канал продаж, особенности конструкции и брендовые требования.'
  },
  {
    title: 'Делаем предварительный расчет',
    text: 'Оцениваем реалистичность запуска, примерный бюджет, сложность модели и дальнейший маршрут.'
  },
  {
    title: 'Изготавливаем образец',
    text: 'Перед партией делаем тестовый образец, чтобы сверить посадку, фактуру, плотность и исполнение.'
  },
  {
    title: 'Согласовываем',
    text: 'Фиксируем итоговый вариант модели и подтверждаем параметры перед запуском серии.'
  },
  {
    title: 'Запускаем партию',
    text: 'Организуем производство согласованного объема под ваш бренд и задачу.'
  },
  {
    title: 'Подготавливаем к отгрузке',
    text: 'Готовим изделия к выдаче или отправке, чтобы вы получили понятный и управляемый результат.'
  }
];

const faqs = [
  {
    question: 'Можно ли обратиться без готовой техкарты?',
    answer: 'Да. Для старта достаточно фото, образца или описания модели. Если техкарты нет, мы поможем структурировать задачу и оценить, как ее запустить в производство.'
  },
  {
    question: 'Вы делаете образец перед партией?',
    answer: 'Да. Перед запуском партии делаем образец, чтобы согласовать изделие и снизить риск ошибок на серийном этапе.'
  },
  {
    question: 'С каким объемом можно начать?',
    answer: 'Минимальный заказ — от 49 000 руб. Конкретный формат партии зависит от модели, сложности изделия и вашей задачи.'
  },
  {
    question: 'Вы работаете под брендом заказчика?',
    answer: 'Да, возможен формат private label. Работаем с брендами, магазинами, ритейлом и другими B2B-заказчиками под их маркой.'
  },
  {
    question: 'Вы работаете с селлерами Wildberries и Ozon?',
    answer: 'Да, работаем с селлерами Wildberries и Ozon, которым нужен ассортимент под сезон, спрос и повторяемые продажи.'
  },
  {
    question: 'Как отправить запрос?',
    answer: 'Запрос можно отправить через сайт, WhatsApp, Telegram или по телефону — выбирайте канал, который вам удобнее.'
  },
  {
    question: 'Что нужно для расчета?',
    answer: 'Для расчета желательно прислать фото или референс, тип изделия, желаемый объем и сроки. Этого уже достаточно, чтобы начать диалог.'
  }
];

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
            Отправить модель
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
                  Revintage — контрактное производство трикотажа под ваш бренд
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-[#565a61] sm:text-xl">
                  Запускаем кардиганы, джемперы, свитеры, жилеты, шапки, шарфы и школьный трикотаж: от образца до партии. Работаем с брендами, магазинами, селлерами Wildberries и Ozon и оптовыми клиентами.
                </p>
                <p className="max-w-3xl text-base leading-8 text-[#5e6168] sm:text-lg">
                  Можно прийти с фото, образцом или описанием модели. Помогаем перевести идею в реальный производственный продукт. Минимальный заказ — от 49 000 руб.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <a href="#lead" className="inline-flex items-center justify-center rounded-full bg-[#17181c] px-6 py-4 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-black">
                  Отправить модель на просчет
                </a>
                <a href={PHONE_LINK} className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-4 text-sm font-semibold text-[#17181c] transition hover:border-black/20 hover:bg-[#f4f1eb]">
                  Позвонить
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#16352a] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#1d4738]">
                  WhatsApp
                </a>
              </div>

              <div className="grid gap-3 pt-2 sm:grid-cols-2 xl:grid-cols-3">
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
                  <div className="text-4xl font-semibold tracking-[-0.05em] text-[#17181c]">от фото модели до готовой партии</div>
                  <p className="mt-2 text-sm leading-7 text-[#5b5f65]">Мы помогаем пройти путь от идеи к производственному результату без лишней неопределенности, особенно если у вас нет готовой техкарты и нужен понятный запуск под продажи.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {['Можно стартовать без техкарты', 'Предварительный расчет до запуска', 'Образец перед партией', 'Подходит для брендов, WB и Ozon'].map((item) => (
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
                <p className="text-2xl font-semibold tracking-[-0.03em]">Если удобнее, отправьте фото изделия или задачу напрямую — вернемся с предметным ответом.</p>
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
            <span className="eyebrow">О производстве</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Производство, где важны не обещания, а сроки, повторяемость и технологичность</h2>
          </div>
          <div className="card-surface p-8 text-base leading-8 text-[#565a61] sm:text-lg">
            <p>
              Revintage — вязальный цех, ориентированный на контрактное производство трикотажа под заказ. Мы работаем напрямую с клиентами без посредников и выстраиваем понятный маршрут: получаем запрос, оцениваем задачу, разрабатываем образец, согласовываем и запускаем партию.
            </p>
            <p className="mt-5">
              Работаем с брендами, ритейлом, селлерами Wildberries и Ozon и оптовыми клиентами, которым нужен понятный производственный результат.
            </p>
            <p className="mt-5">
              Наша задача — не просто связать изделие, а помочь заказчику получить модель, которую можно стабильно повторять, продавать и масштабировать.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell section-gap pt-10 fade-in">
        <div className="card-surface p-8 sm:p-10">
          <div className="mb-8 max-w-3xl">
            <span className="eyebrow">Для кого мы работаем</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">С кем мы обычно работаем и какие задачи помогаем решать</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {audiences.map((item) => (
              <article key={item.title} className="rounded-[24px] border border-black/[0.06] bg-[#faf8f2] p-5">
                <h3 className="text-lg font-semibold text-[#17181c]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5b5e65]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="production" className="section-shell section-gap fade-in">
        <div className="mb-10 max-w-3xl">
          <span className="eyebrow">Ассортимент</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Какие изделия можно запустить через Revintage</h2>
          <p className="mt-4 text-base leading-8 text-[#5d6168]">Работаем с ассортиментом, который можно адаптировать под ваш бренд, канал продаж и объем партии.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {productCategories.map((item) => (
            <article key={item.title} className="card-surface group p-6 transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(19,25,22,0.1)]">
              <div className="text-sm uppercase tracking-[0.18em] text-[#16352a]">Категория</div>
              <h3 className="mt-5 text-xl font-medium text-[#17181c]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#5b5e65]">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4 rounded-[28px] border border-black/[0.06] bg-white/70 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-base leading-8 text-[#565a61]">Есть модель или референс? Отправьте фото — скажем, как ее запустить в производство.</p>
          <a href="#lead" className="inline-flex items-center justify-center rounded-full bg-[#17181c] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-black">
            Отправить фото изделия
          </a>
        </div>
      </section>

      <section id="advantages" className="section-shell section-gap pt-0 fade-in">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="soft-panel p-8 sm:p-10">
            <span className="eyebrow">Что мы берем на себя</span>
            <div className="mt-6 grid gap-4">
              {capabilities.map((item, index) => (
                <div key={item} className="flex items-start gap-4 rounded-[22px] border border-black/[0.06] bg-white/80 px-5 py-4 text-[#4c5057]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#16352a] text-sm font-semibold text-white">{index + 1}</span>
                  <span className="pt-1 text-sm leading-7">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-[#5b5e65]">Если у вас нет готовой техкарты — это не проблема. Для старта достаточно фото, референса, образца или описания задачи.</p>
          </div>

          <div className="card-surface p-8 sm:p-10">
            <span className="eyebrow">Почему с нами работают</span>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {advantages.map((item) => (
                <article key={item.title} className="rounded-[24px] border border-black/[0.06] bg-[#faf8f2] p-6 transition hover:bg-white">
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#17181c]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5b5f65]">{item.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-8">
              <a href="#lead" className="inline-flex items-center justify-center rounded-full bg-[#17181c] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-black">
                Запросить расчет партии
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-gap pt-0 fade-in">
        <div className="soft-panel p-8 sm:p-10">
          <div className="mb-8 max-w-3xl">
            <span className="eyebrow">Что важно знать до старта</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Коротко о том, что обычно интересует клиента еще до первой заявки</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {starterFacts.map((fact) => (
              <div key={fact} className="rounded-[22px] border border-black/[0.06] bg-white px-5 py-4 text-sm leading-7 text-[#4f5459] shadow-[0_12px_30px_rgba(19,25,22,0.04)]">
                {fact}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="section-shell section-gap fade-in">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">Доказательства</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Примеры изделий, образцов и производственного процесса</h2>
            <p className="mt-4 text-base leading-8 text-[#5d6168]">Показываем не абстрактные обещания, а реальные категории изделий, фактуры, образцы и производственный контент.</p>
          </div>
          <a href="#lead" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#17181c] transition hover:bg-[#f4f1eb]">
            Обсудить запуск образца
          </a>
        </div>

        <div className="columns-1 gap-5 md:columns-2 xl:columns-3 [&>article]:mb-5">
          {galleryItems.map((item, index) => {
            const aspectClasses = [
              'aspect-[16/10]',
              'aspect-[4/5]',
              'aspect-[4/3]',
              'aspect-[4/5]',
              'aspect-[16/10]',
              'aspect-[4/3]',
              'aspect-[5/6]',
              'aspect-[4/3]',
              'aspect-[4/5]',
              'aspect-[16/10]',
              'aspect-[4/3]'
            ][index] ?? 'aspect-[4/3]';

            return (
              <article
                key={item.title}
                className="group relative break-inside-avoid overflow-hidden rounded-[30px] border border-black/[0.06] bg-white shadow-[0_20px_55px_rgba(19,25,22,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_65px_rgba(19,25,22,0.12)]"
              >
                <div className={`relative min-h-[260px] ${aspectClasses}`}>
                  <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131518]/85 via-[#131518]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
                      {item.category}
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-white/75">{item.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-[28px] border border-black/[0.06] bg-white/70 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-base leading-8 text-[#565a61]">Запускаете ассортимент для Wildberries или Ozon? Обсудим модель, объем и формат партии.</p>
          <a href="#lead" className="inline-flex items-center justify-center rounded-full bg-[#17181c] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-black">
            Обсудить запуск для WB / Ozon
          </a>
        </div>
      </section>

      <section id="process" className="section-shell section-gap pt-0 fade-in">
        <div className="soft-panel p-8 sm:p-10">
          <div className="mb-8 max-w-2xl">
            <span className="eyebrow">Процесс</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Понятный путь от запроса до готовой отгрузки</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-[24px] border border-black/[0.06] bg-white px-6 py-6 shadow-[0_12px_30px_rgba(19,25,22,0.04)]">
                <div className="text-sm font-semibold text-[#16352a]">0{index + 1}</div>
                <div className="mt-3 text-lg font-medium text-[#17181c]">{step.title}</div>
                <p className="mt-3 text-sm leading-7 text-[#5b5e65]">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a href="#lead" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold text-[#17181c] transition hover:bg-[#f4f1eb]">
              Узнать, подойдет ли модель для производства
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="section-shell section-gap pt-0 fade-in">
        <div className="card-surface p-8 sm:p-10">
          <div className="mb-8 max-w-3xl">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Ответы на вопросы, которые чаще всего мешают отправить заявку</h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((item) => (
              <details key={item.question} className="rounded-[24px] border border-black/[0.06] bg-[#faf8f2] p-6 group">
                <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-[#17181c] marker:hidden">{item.question}</summary>
                <p className="mt-4 text-sm leading-7 text-[#5b5e65]">{item.answer}</p>
              </details>
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
              Оставьте контакты и кратко опишите задачу. Можно прислать фото, образец или описание модели — мы свяжемся с вами для оценки объема, сроков и формата запуска.
            </p>

            <div className="mt-8 rounded-[22px] border border-[#16352a]/10 bg-[#16352a]/[0.06] px-5 py-4 text-sm font-semibold text-[#16352a]">
              Минимальный заказ — от 49 000 руб
            </div>

            <div className="mt-6 grid gap-3">
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
              Удобнее отправить задачу частями? Можно сначала прислать фото изделия, описание или референс, а детали объема и сроков уточнить уже в диалоге.
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
              <h2 className="text-3xl font-semibold tracking-[-0.03em]">Свяжитесь с производством напрямую</h2>
              <p className="text-lg font-semibold text-white">Revintage</p>
              <p className="text-white/65">{CITY}</p>
              <p className="text-xl text-white">{PHONE_DISPLAY}</p>
              <p className="max-w-lg text-sm leading-7 text-white/65">Если удобнее, отправьте запрос через форму — мы вернемся с ответом после уточнения задачи.</p>
            </div>
            <div className="grid gap-3 self-start sm:justify-self-end sm:min-w-[280px]">
              <a href={PHONE_LINK} className="rounded-2xl bg-white px-5 py-4 text-center text-sm font-semibold text-[#17181c] transition hover:bg-[#f0ede5]">
                Позвонить
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
