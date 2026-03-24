import type { Metadata } from 'next';
import Image from 'next/image';

import { KosynkaOptForm } from '@/components/kosynka-opt-form';
import { MobileContactBar } from '@/components/mobile-contact-bar';
import { BRAND_NAME, PHONE_DISPLAY, PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Вязаная косынка оптом | Для Wildberries, Ozon и магазинов | Revintage',
  description:
    'Вязаная косынка оптом от Revintage — товар для Wildberries, Ozon, магазинов и шоурумов. Подтвержденный спрос, оптовая цена до 290 руб за единицу, выбор узора, широкая палитра цветов, возможность тестовых и регулярных закупок.',
  keywords: [
    'вязаная косынка',
    'трикотажная косынка',
    'женская вязаная косынка',
    'косынка оптом',
    'вязаная косынка оптом',
    'трикотажная косынка оптом',
    'вязаная косынка для Wildberries',
    'вязаная косынка для Ozon'
  ]
};

const heroBadgeCards = [
  ['Для Wildberries / Ozon', 'Подходит под маркетплейсы'],
  ['Большая палитра цветов', 'Тест под сегменты'],
  ['Низкий процент отказа на WB / Ozon', 'Стабильнее по возвратам']
] as const;

const proofBadges = [
  'Оптовая цена до 290 руб',
  'Подходит для Wildberries и Ozon',
  'Подтвержденный повторный спрос',
  'Возможность выбора узора',
  'Большая палитра цветов',
  'Прямой контакт с производством'
] as const;

const demandCards = [
  'Повторные заказы',
  'Понятная категория для рынка',
  'Подходит для сезонных и повторных продаж',
  'Вариативность по узору и цвету'
] as const;

const audienceCards = [
  ['Селлерам Wildberries', 'Для теста карточки, сезонного запуска и расширения полки в категории аксессуаров.'],
  ['Селлерам Ozon', 'Для входа в понятную категорию с товаром, который можно адаптировать под свою аудиторию.'],
  ['Магазинам аксессуаров', 'Для компактной позиции, которую удобно добавлять в сезонный и базовый ассортимент.'],
  ['Шоурумам', 'Для акцентного аксессуара с понятной визуальной подачей и возможностью собрать палитру.'],
  ['Оптовым клиентам', 'Для закупки партии под регулярные продажи, дозаказ и повторяемый спрос.'],
  ['Тем, кто хочет протестировать новый аксессуар в продаже', 'Для осторожного входа в категорию через тестовую закупку и проверку спроса.']
] as const;

const logisticsStats = [
  ['Длина', '160 см'],
  ['Ширина', '60 см'],
  ['В упаковке', '25 × 25 см']
] as const;

const specsItems = [
  'Длина: 160 см',
  'Ширина: 60 см',
  'Размер в упаковке: 25 × 25 см',
  'Мягкая и пушистая фактура',
  'Эффект ангоровой пряжи',
  'Теплая и дышащая',
  'Сезон: весна / осень / зима',
  'Возможность выбора цвета',
  'Возможность адаптации узора'
] as const;

const materialCards = [
  'Мягкая фактура',
  'Пушистый визуальный эффект',
  'Дышащий материал',
  'Теплая и комфортная',
  'Подходит на весну / осень / зиму'
] as const;

const sellerPrepCards = [
  ['Цена входа в товар', 'Позиция удобна для предварительного расчета и теста через небольшую партию.'],
  ['Визуальная подача карточки', 'Важно сразу продумать фото, стиль подачи и позиционирование для вашей аудитории.'],
  ['Упаковка', 'Упаковка влияет на восприятие товара и итоговую экономику продажи.'],
  ['Тест цветов', 'Есть смысл проверять, какие оттенки лучше зайдут под ваш сегмент и сезон.'],
  ['Тест узора', 'Вариативность по узору дает возможность точнее попасть в спрос аудитории.'],
  ['Повторная закупка', 'Если модель подтверждает спрос, позицию удобно масштабировать повторными поставками.']
] as const;

const sellerBenefitCards = [
  'Понятный товар для покупателя',
  'Компактная упаковка',
  'Подходит под маркетплейсы',
  'Можно тестировать цветами',
  'Можно выделяться узором',
  'Подходит для повторных партий',
  'Оптовая цена до 290 руб'
] as const;

const wbOzonBenefits = [
  'Понятная товарная категория',
  'Компактность в упаковке',
  'Удобно хранить и отправлять',
  'Можно тестировать цветовые варианты',
  'Можно отличаться узором',
  'Подходит для тестовой партии и масштабирования'
] as const;

const sellerValueFlow = [
  ['01', 'Выбираете формат запуска', 'Тестовая партия, запуск под маркетплейс или регулярные поставки.'],
  ['02', 'Собираете ассортимент', 'Подбираете цвета, узор и подачу под свою аудиторию.'],
  ['03', 'Получаете компактный товар', 'Удобно для хранения, логистики и быстрой отгрузки.'],
  ['04', 'Масштабируете поставки', 'Если спрос подтверждается, позицию легко дозаказывать и расширять.']
] as const;

const productBenefits = [
  'Понятный товар без сложного объяснения покупателю',
  'Подходит под маркетплейсы и офлайн-магазины',
  'Компактная товарная позиция',
  'Может работать как сезонный и повторяемый аксессуар',
  'Подходит для тестовых и регулярных закупок',
  'Оптовая цена до 290 руб за единицу',
  'Возможность редактировать узор под вкус покупателя',
  'Возможность выбора из широкой палитры цветов'
] as const;

const flexibilityCards = ['Адаптация узора', 'Большая палитра цветов', 'Возможность тестировать несколько вариантов', 'Гибкость под разную аудиторию'] as const;

const requestItems = ['Оптовые условия', 'Цвета', 'Варианты узора', 'Размеры / параметры', 'Тестовую партию', 'Регулярные поставки', 'Условия запуска под маркетплейсы', 'Условия для магазинов и шоурумов'] as const;

const faqItems = [
  ['Подходит ли товар для Wildberries и Ozon?', 'Да, товар подходит для селлеров маркетплейсов, магазинов и шоурумов.'],
  ['Можно ли начать с тестовой партии?', 'Возможность тестовой партии обсуждается отдельно.'],
  ['Какая оптовая цена?', 'Ориентир по оптовой цене — до 290 руб за единицу.'],
  ['Можно ли выбрать цвет?', 'Да, можно обсудить выбор из широкой палитры цветов.'],
  ['Можно ли изменить узор?', 'Да, возможна адаптация узора под вкус покупателя и задачу клиента.'],
  ['Можно ли обсудить регулярные закупки?', 'Да, можно обсудить повторяемые поставки.'],
  ['Подходит ли товар для магазинов?', 'Да, товар подходит и для офлайн-продажи.'],
  ['Как получить условия по опту?', 'Оставьте заявку через форму или свяжитесь через WhatsApp.']
] as const;

const galleryCards = [
  ['Вязаная косынка для WB / Ozon', 'Подача товара на модели для маркетплейса и рекламы.', '/images/products/hats/placeholder-hat.svg'],
  ['Несколько цветовых вариантов', 'Линейка оттенков для тестов, сезонов и сегментов аудитории.', '/images/products/scarves/placeholder-scarf.svg'],
  ['Варианты узора', 'Разные визуальные решения под позиционирование магазина или селлера.', '/images/samples/placeholder-knit-closeup.svg'],
  ['Фактура и посадка', 'Крупный план вязки и силуэта для карточки товара.', '/images/samples/placeholder-sample.svg'],
  ['Оптовая партия', 'Партия изделий для дозаказа, тестовой закупки или регулярной поставки.', '/images/samples/placeholder-batch.svg'],
  ['Упаковка и подача', 'То, что влияет на восприятие товара и экономику на выходе.', '/images/factory/placeholder-equipment.svg'],
  ['Контент для карточек товара', 'Визуалы, которые можно использовать для маркетплейсов и B2B-презентации.', '/images/factory/placeholder-factory.svg'],
  ['Крупный план материала', 'Фактура, которая помогает продавать изделие через контент.', '/images/products/jumpers/placeholder-jumper.svg']
] as const;

export default function KosynkaOptPage() {
  return (
    <main className="overflow-hidden text-[#17181c]">
      <header className="sticky top-0 z-40 border-b border-black/[0.05] bg-[#fbfaf7]/90 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between gap-6">
          <a href="/" className="text-lg font-semibold tracking-[0.16em] text-[#17181c]">
            {BRAND_NAME.toUpperCase()}
          </a>
          <nav className="hidden items-center gap-6 text-sm text-[#5d6168] lg:flex">
            <a href="/">Главная</a>
            <a href="#offer">О товаре</a>
            <a href="#logistics">Логистика</a>
            <a href="#wb-ozon">WB / Ozon</a>
            <a href="#lead">Заявка</a>
          </nav>
          <a href="#lead" className="rounded-full bg-[#17181c] px-4 py-2 text-sm font-medium text-white transition hover:bg-black">
            Получить опт
          </a>
        </div>
      </header>

      <section className="section-shell section-gap pb-12 pt-10 sm:pt-16 lg:pb-16">
        <a href="/" className="mb-6 inline-flex text-sm font-medium text-[#5b5e65] transition hover:text-[#17181c]">
          ← Вернуться на сайт Revintage
        </a>
        <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-stretch">
          <div className="grid gap-6">
            <article className="group relative min-h-[640px] overflow-hidden rounded-[34px] border border-black/[0.06] bg-[#ddd6cf] shadow-[0_24px_70px_rgba(19,25,22,0.14)]">
              <Image
                src="/images/products/hats/placeholder-hat.svg"
                alt="Вязаная косынка оптом для Wildberries, Ozon и магазинов"
                fill
                priority
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131518]/92 via-[#131518]/25 to-transparent" />
              <div className="absolute left-5 right-5 top-5 rounded-[24px] border border-white/15 bg-black/30 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm sm:left-6 sm:right-auto">
                Вязаная косынка оптом
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="max-w-md rounded-[28px] border border-white/12 bg-white/10 p-5 text-white backdrop-blur-md">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Вязаная косынка оптом</div>
                  <p className="mt-3 text-2xl font-semibold tracking-[-0.04em]">Товар для маркетплейсов и магазинов: компактный, визуально выразительный и удобный для запуска.</p>
                  <p className="mt-3 text-sm leading-7 text-white/75">Подходит для тестовой партии и масштабирования: цена, вариативность по цветам и узору, понятная логистика.</p>
                </div>
              </div>
            </article>

            <div className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[30px] bg-[#17181c] p-7 text-white shadow-[0_24px_60px_rgba(19,25,22,0.2)] sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">Быстрый контакт</p>
                <div className="mt-5 space-y-4">
                  <p className="text-2xl font-semibold tracking-[-0.03em]">Если нужно быстро обсудить цену, партию, узор и цвета — выходите напрямую на производство.</p>
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
              <div className="card-surface p-7 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#16352a]">Для кого страница</p>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c]">Оптовая страница под закупку, а не под розницу.</h2>
                <p className="mt-4 text-sm leading-7 text-[#5b5f65]">
                  Здесь собрана логика для B2B-покупателя: селлеров Wildberries и Ozon, магазинов, шоурумов, оптовиков и закупщиков аксессуаров.
                </p>
              </div>
            </div>
          </div>

          <div className="soft-panel relative overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <div className="absolute -left-10 top-10 h-44 w-44 rounded-full bg-[#e7d5c1] blur-3xl" />
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#16352a]/12 blur-3xl" />
            <div className="relative space-y-8">
              <div className="flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#16352a]">
                <span className="rounded-full border border-[#16352a]/10 bg-white/80 px-3 py-2">B2B only</span>
                <span className="rounded-full border border-[#16352a]/10 bg-white/80 px-3 py-2">Wildberries / Ozon / Retail</span>
              </div>
              <div className="space-y-5">
                <span className="eyebrow">Оптовое предложение Revintage</span>
                <h1 className="max-w-4xl text-4xl font-semibold leading-[0.97] tracking-[-0.06em] text-[#17181c] sm:text-5xl lg:text-7xl">
                  Вязаная косынка оптом — товар для Wildberries, Ozon и магазинов
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-[#565a61] sm:text-xl">
                  Проверенная товарная позиция с подтвержденным спросом. Подходит для селлеров маркетплейсов, магазинов и оптовых закупок.
                </p>
                <p className="max-w-3xl text-base leading-8 text-[#5e6168] sm:text-lg">
                  Это не случайный экспериментальный товар, а модель, которую стабильно заказывают повторно. Категория уже существует и продается, но в ней еще можно занять сильную позицию за счет нормального продукта, цены, вариативности и скорости запуска.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[26px] border border-black/[0.06] bg-[#17181c] px-5 py-5 text-white shadow-[0_22px_50px_rgba(19,25,22,0.22)]">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">Цена входа</div>
                  <div className="mt-3 text-2xl font-semibold tracking-[-0.04em]">До 290 руб / шт</div>
                </div>
                <div className="rounded-[26px] border border-[#16352a]/10 bg-[#16352a] px-5 py-5 text-white shadow-[0_22px_50px_rgba(22,53,42,0.22)]">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">Логистика</div>
                  <div className="mt-3 text-2xl font-semibold tracking-[-0.04em]">25 × 25 см в упаковке</div>
                </div>
                <div className="rounded-[26px] border border-black/[0.06] bg-white px-5 py-5 shadow-[0_22px_50px_rgba(19,25,22,0.08)]">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#16352a]">Гибкость</div>
                  <div className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[#17181c]">Цвета, узор и подача под ваш сегмент</div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {heroBadgeCards.map(([title, caption]) => (
                  <div key={title} className="rounded-[22px] border border-black/[0.06] bg-white/85 px-4 py-4 shadow-[0_10px_30px_rgba(19,25,22,0.04)]">
                    <div className="text-sm font-semibold text-[#17181c]">{title}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[#6a6d74]">{caption}</div>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                <a href="#lead" className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#17181c] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black">
                  Получить оптовые условия
                </a>
                <a href="#economy" className="inline-flex min-h-14 items-center justify-center rounded-full border border-black/10 bg-white px-6 py-4 text-sm font-semibold text-[#17181c] transition hover:-translate-y-0.5 hover:bg-[#f4f1eb]">
                  Запросить расчет партии
                </a>
                <a href="#flexibility" className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#16352a]/15 bg-[#16352a]/[0.07] px-6 py-4 text-sm font-semibold text-[#16352a] transition hover:-translate-y-0.5 hover:bg-[#16352a]/[0.11]">
                  Обсудить цвета и узор
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#25d366] px-6 py-4 text-sm font-semibold text-[#07130c] transition hover:-translate-y-0.5 hover:bg-[#33dd73]">
                  Написать в WhatsApp
                </a>
              </div>

              <div className="grid gap-3 pt-2 sm:grid-cols-2 xl:grid-cols-3">
                {proofBadges.map((item) => (
                  <div key={item} className="rounded-[22px] border border-black/[0.06] bg-white/80 px-4 py-4 text-sm leading-6 text-[#4b5056] shadow-[0_10px_30px_rgba(19,25,22,0.04)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-shell pt-0 pb-6 sm:pb-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card-surface p-8 sm:p-10">
            <span className="eyebrow">Тест позиции</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Почему этот товар может быть удобен для теста</h2>
            <p className="mt-5 text-base leading-8 text-[#565a61]">
              Вязаная косынка — компактная и понятная товарная позиция. Ее можно тестировать как отдельный аксессуар, добавлять в сезонный ассортимент или использовать как позицию для расширения линейки. Для B2B-покупателя это удобный формат входа в товарную категорию без необходимости сразу заходить в сложный ассортимент.
            </p>
          </div>
          <div className="soft-panel p-8 sm:p-10">
            <span className="eyebrow">О товаре</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Коротко о товаре</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {specsItems.map((item) => (
                <div key={item} className="rounded-[22px] border border-black/[0.06] bg-white px-4 py-4 text-sm font-medium text-[#17181c] shadow-[0_10px_30px_rgba(19,25,22,0.04)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="offer" className="section-shell pb-6 pt-6 sm:pb-8 sm:pt-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card-surface p-8 sm:p-10">
            <span className="eyebrow">Почему на этот товар стоит смотреть сейчас</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Почему эта позиция интересна для закупки</h2>
            <p className="mt-5 text-base leading-8 text-[#565a61]">
              Вязаная косынка — понятный аксессуар с подтвержденным спросом. Категория уже представлена на маркетплейсах, но ассортимент в ней разрозненный: разные модели, разный уровень упаковки, позиционирования, качества и визуальной подачи. Для селлера или магазина это означает возможность зайти в категорию с более собранным, понятным и конкурентоспособным предложением.
            </p>
            <div className="mt-6 grid gap-3">
              {['Товар не нужно объяснять рынку', 'Категория понятна покупателю', 'Подходит для маркетплейсов, магазинов и сезонного ассортимента', 'Можно заходить тестовой партией', 'Можно масштабировать повторными закупками', 'Можно дифференцироваться за счет узора и цвета'].map((item) => (
                <div key={item} className="rounded-[22px] border border-black/[0.06] bg-[#faf8f2] px-5 py-4 text-sm leading-7 text-[#4f5459]">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="soft-panel p-8 sm:p-10">
            <span className="eyebrow">Почему спрос подтвержден</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Спрос на товар уже есть</h2>
            <p className="mt-5 text-base leading-8 text-[#565a61]">
              Мы делаем ставку не на фантазию, а на повторяемый спрос. Эта модель уже заказывается повторно на протяжении нескольких лет. Это важный сигнал для оптового покупателя: позиция не случайная, а коммерчески жизнеспособная.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {demandCards.map((item) => (
                <div key={item} className="rounded-[24px] border border-black/[0.06] bg-white p-5 text-sm font-medium text-[#17181c] shadow-[0_12px_30px_rgba(19,25,22,0.04)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 rounded-[28px] border border-black/[0.06] bg-white/70 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-base leading-8 text-[#565a61]">Хотите понять, подойдет ли эта позиция под ваш формат продаж?</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#lead" className="inline-flex items-center justify-center rounded-full bg-[#17181c] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-black">
              Получить условия по опту
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#25d366] px-6 py-3.5 text-sm font-semibold text-[#07130c] transition hover:bg-[#33dd73]">
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="logistics" className="section-shell section-gap pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="soft-panel p-8 sm:p-10">
            <span className="eyebrow">Размеры и удобство для логистики</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Размеры и удобство для логистики</h2>
            <p className="mt-5 text-base leading-8 text-[#565a61]">
              В разложенном виде косынка дает полноценный визуальный объем и комфортную посадку. В упаковке занимает всего 25 × 25 см, что делает товар удобным для хранения, отгрузки и логистики. Это особенно важно для селлеров Wildberries и Ozon, которым нужна компактная, понятная и удобная товарная позиция.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {logisticsStats.map(([label, value]) => (
                <div key={label} className="rounded-[24px] border border-black/[0.06] bg-white p-5 shadow-[0_12px_30px_rgba(19,25,22,0.04)]">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6d7076]">{label}</div>
                  <div className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#17181c]">{value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="card-surface p-8 sm:p-10">
            <span className="eyebrow">Сравнение</span>
            <div className="grid gap-5 lg:grid-rows-2">
              <div className="rounded-[28px] border border-black/[0.06] bg-[#faf8f2] p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6d7076]">В разложенном виде</div>
                    <div className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#17181c]">160 × 60 см</div>
                  </div>
                  <div className="flex h-20 w-28 items-end justify-center rounded-[22px] border border-dashed border-[#16352a]/25 bg-white">
                    <div className="h-12 w-20 rounded-[18px] bg-[#16352a]/12" />
                  </div>
                </div>
              </div>
              <div className="rounded-[28px] border border-[#16352a]/10 bg-[#16352a] p-6 text-white shadow-[0_22px_55px_rgba(22,53,42,0.22)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">В упаковке</div>
                    <div className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">25 × 25 см</div>
                    <p className="mt-3 text-sm leading-7 text-white/75">Компактный формат для хранения, отгрузки, склада и маркетплейс-логистики.</p>
                  </div>
                  <div className="flex h-20 w-20 items-center justify-center rounded-[24px] border border-white/15 bg-white/10">
                    <div className="h-10 w-10 rounded-[12px] bg-white/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-gap pt-0">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="card-surface p-8 sm:p-10">
            <span className="eyebrow">Почему этот товар приятен покупателю</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Почему этот товар приятен покупателю</h2>
            <p className="mt-5 text-base leading-8 text-[#565a61]">
              Косынка дает мягкую и пушистую фактуру с эффектом, визуально близким к ангоровой пряже. При этом изделие остается комфортным в носке: оно теплое, но дышащее. За счет этого модель подходит не только на холодный сезон, но и на весну, осень и мягкую зимнюю носку.
            </p>
          </div>
          <div className="soft-panel p-8 sm:p-10">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {materialCards.map((item) => (
                <div key={item} className="rounded-[24px] border border-black/[0.06] bg-white p-5 text-sm font-medium text-[#17181c] shadow-[0_12px_30px_rgba(19,25,22,0.04)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-gap pt-0">
        <div className="card-surface p-8 sm:p-10">
          <div className="mb-8 max-w-3xl">
            <span className="eyebrow">Для кого подходит</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Кому подходит эта позиция</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {audienceCards.map(([title, text]) => (
              <article key={title} className="rounded-[24px] border border-black/[0.06] bg-[#faf8f2] p-5">
                <h3 className="text-lg font-semibold text-[#17181c]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5b5e65]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-gap pt-0">
        <div className="grid gap-6 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="soft-panel p-8 sm:p-10">
            <span className="eyebrow">Почему это удобно продавать</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Почему это удобно продавать</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {sellerBenefitCards.map((item) => (
                <div key={item} className="rounded-[24px] border border-black/[0.06] bg-white p-5 text-sm font-medium text-[#17181c] shadow-[0_12px_30px_rgba(19,25,22,0.04)]">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="card-surface p-8 sm:p-10">
            <span className="eyebrow">Что получает селлер</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Сценарий запуска в 4 шага</h2>
            <div className="mt-6 grid gap-4">
              {sellerValueFlow.map(([step, title, text]) => (
                <article key={step} className="flex gap-4 rounded-[24px] border border-black/[0.06] bg-[#faf8f2] p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#17181c] text-sm font-semibold text-white">{step}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#17181c]">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#5b5e65]">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="wb-ozon" className="section-shell section-gap pt-0">
        <div className="rounded-[34px] border border-[#16352a]/10 bg-[#16352a] p-8 text-white shadow-[0_28px_70px_rgba(22,53,42,0.24)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <span className="inline-flex rounded-full border border-white/14 bg-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85">Сильный блок</span>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Почему товар особенно удобен для Wildberries и Ozon</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/78">
                Для селлеров маркетплейсов здесь сходятся сразу несколько факторов: понятная категория, компактность в упаковке, удобство логистики, возможность тестировать цвета, отличаться узором и масштабировать закупку, если спрос подтверждается.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#lead" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-[#17181c] transition hover:bg-[#f0ede5]">
                  Запросить условия для WB / Ozon
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
                  Написать в WhatsApp
                </a>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {wbOzonBenefits.map((item) => (
                <div key={item} className="rounded-[24px] border border-white/12 bg-white/10 p-5 text-sm font-medium text-white backdrop-blur-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-gap pt-0">
        <div className="soft-panel p-8 sm:p-10">
          <div className="mb-8 max-w-3xl">
            <span className="eyebrow">Что важно для селлера перед запуском</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Какие вещи стоит продумать до первой закупки</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sellerPrepCards.map(([title, text]) => (
              <article key={title} className="rounded-[24px] border border-black/[0.06] bg-white p-5 shadow-[0_12px_30px_rgba(19,25,22,0.04)]">
                <h3 className="text-lg font-semibold text-[#17181c]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5b5e65]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-gap pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="soft-panel p-8 sm:p-10">
            <span className="eyebrow">Преимущества товара</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Почему эту косынку удобно продавать</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {productBenefits.map((item) => (
                <div key={item} className="rounded-[24px] border border-black/[0.06] bg-white p-5 text-sm leading-7 text-[#4f5459]">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-[#5b5e65]">Блок остается редактируемым: сюда можно позже подставить состав, размеры, сезонность, цвета и варианты узоров.</p>
          </div>
          <div id="flexibility" className="card-surface p-8 sm:p-10">
            <span className="eyebrow">Гибкость по узору и цветам</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Товар можно адаптировать под вашу аудиторию</h2>
            <p className="mt-5 text-base leading-8 text-[#565a61]">
              Эта позиция интересна не только как готовый товар, но и как гибкая модель для ассортимента. Можно обсуждать изменение узора под вкус вашей аудитории, тестировать разные визуальные решения и собирать линейку в широкой палитре цветов. Это дает селлеру или магазину больше пространства для позиционирования, тестов и выделения среди однотипных предложений.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {flexibilityCards.map((item) => (
                <div key={item} className="rounded-[24px] border border-black/[0.06] bg-[#faf8f2] p-5 text-sm font-medium text-[#17181c]">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#lead" className="inline-flex items-center justify-center rounded-full bg-[#17181c] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-black">
                Обсудить цвета и узор
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#25d366] px-6 py-3.5 text-sm font-semibold text-[#07130c] transition hover:bg-[#33dd73]">
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="economy" className="section-shell section-gap pt-0">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="card-surface p-8 sm:p-10">
            <span className="eyebrow">Экономика для селлера</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Что важно по экономике</h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-[#565a61]">
              <p>Оптовая цена: до 290 руб / шт.</p>
              <p>Далее селлер закладывает свою цену продажи, упаковку, логистику, комиссию и рекламу.</p>
              <p>Позиция может быть интересна для теста через небольшую партию.</p>
              <p>Маржинальность зависит от вашей модели продаж, упаковки, карточки товара и рекламных расходов.</p>
            </div>
          </div>
          <div className="soft-panel p-8 sm:p-10">
            <span className="eyebrow">Пример расчета для селлера</span>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {['Закупка: 290 руб', 'Цена продажи: 1190 руб', 'Комиссия: 350 руб', 'Логистика: 50 руб', 'Реклама: 50 руб', 'Итоговая маржа: 740 руб'].map((item) => (
                <div key={item} className="rounded-[24px] border border-black/[0.06] bg-white p-5 text-sm font-medium text-[#17181c]">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-[#5b5e65]">Расчет примерный и зависит от вашей модели продаж.</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 rounded-[28px] border border-black/[0.06] bg-white px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-base leading-8 text-[#565a61]">Нужен ориентир под вашу математику — с учетом канала продаж, объема и варианта запуска?</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#lead" className="inline-flex items-center justify-center rounded-full bg-[#17181c] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-black">
              Запросить расчет под свою модель
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#25d366] px-6 py-3.5 text-sm font-semibold text-[#07130c] transition hover:bg-[#33dd73]">
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section-shell section-gap pt-0">
        <div className="rounded-[34px] border border-black/[0.06] bg-[#17181c] p-8 text-white shadow-[0_28px_70px_rgba(19,25,22,0.26)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-white/14 bg-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85">Окно возможностей</span>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Почему выгоднее заходить раньше, чем позже</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/78">
                Когда категория уже подтверждена спросом, но еще не перегрета сильными однотипными предложениями, у селлера или магазина больше шансов занять место за счет скорости, качества карточки, понятного товара и вариативности по узору и цветам. Чем позже рынок уплотняется, тем дороже становится вход и сложнее выделиться.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['Спрос уже есть', 'Не нужно объяснять категорию рынку'],
                ['Есть пространство для позиции', 'Можно зайти с более собранным предложением'],
                ['Сильнее сейчас, чем потом', 'Позже вход становится дороже и шумнее']
              ].map(([title, text]) => (
                <div key={title} className="rounded-[24px] border border-white/12 bg-white/10 p-5 backdrop-blur-sm">
                  <div className="text-lg font-semibold text-white">{title}</div>
                  <p className="mt-3 text-sm leading-7 text-white/72">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-gap pt-0">
        <div className="mb-10 max-w-3xl">
          <span className="eyebrow">Галерея</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Как можно подать товар в опте и под маркетплейсы</h2>
          <p className="mt-4 text-base leading-8 text-[#5b5e65]">В блок удобно подставлять реальные фото разных цветов, вариантов узора, упаковки и контента для карточек товара.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {galleryCards.map(([title, description, image]) => (
            <article key={title} className="group overflow-hidden rounded-[30px] border border-black/[0.06] bg-white shadow-[0_20px_55px_rgba(19,25,22,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_65px_rgba(19,25,22,0.12)]">
              <div className="relative aspect-[4/3] min-h-[260px]">
                <Image src={image} alt={title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131518]/85 via-[#131518]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/75">{description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell section-gap pt-0">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="soft-panel p-8 sm:p-10">
            <span className="eyebrow">Что можно обсудить по опту</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Что можно запросить</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {requestItems.map((item) => (
                <div key={item} className="rounded-[24px] border border-black/[0.06] bg-white p-5 text-sm font-medium text-[#17181c]">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div id="faq" className="card-surface p-8 sm:p-10">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Частые вопросы по опту</h2>
            <div className="mt-6 grid gap-4">
              {faqItems.map(([question, answer]) => (
                <details key={question} className="rounded-[24px] border border-black/[0.06] bg-[#faf8f2] p-6">
                  <summary className="cursor-pointer list-none text-lg font-semibold text-[#17181c]">{question}</summary>
                  <p className="mt-4 text-sm leading-7 text-[#5b5e65]">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell section-gap pt-0">
        <div className="card-surface p-8 sm:p-10">
          <span className="eyebrow">Прямой контакт</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Работаете напрямую с производством</h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-[#565a61]">
            Вы не оставляете заявку в абстрактную форму. Запрос попадает напрямую в Revintage, где можно обсудить оптовые условия, повторные закупки, цвета, узоры и формат поставки.
          </p>
        </div>
      </section>

      <section id="lead" className="section-shell section-gap">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="soft-panel p-8 sm:p-10">
            <span className="eyebrow">Запрос</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-5xl">Получите оптовые условия по вязаной косынке</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#5b5f65]">
              Оставьте запрос — обсудим цену, партию, цвета, варианты узора и условия для Wildberries, Ozon, магазина или шоурума.
            </p>
            <div className="mt-8 grid gap-3">
              <a href="#lead-form" className="rounded-[22px] bg-[#17181c] px-5 py-4 text-sm font-semibold text-white transition hover:bg-black">
                Получить оптовые условия
              </a>
              <a href="#economy" className="rounded-[22px] border border-black/10 bg-white px-5 py-4 text-sm font-semibold text-[#17181c] transition hover:bg-[#f4f1eb]">
                Запросить расчет партии
              </a>
              <a href="#flexibility" className="rounded-[22px] border border-[#16352a]/15 bg-[#16352a]/[0.07] px-5 py-4 text-sm font-semibold text-[#16352a] transition hover:bg-[#16352a]/[0.11]">
                Обсудить цвета и узор
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-[22px] bg-[#25d366] px-5 py-4 text-sm font-semibold text-[#07130c] transition hover:bg-[#33dd73]">
                Написать в WhatsApp
              </a>
            </div>
          </div>
          <div id="lead-form">
            <KosynkaOptForm />
          </div>
        </div>
      </section>

      <MobileContactBar />
    </main>
  );
}
