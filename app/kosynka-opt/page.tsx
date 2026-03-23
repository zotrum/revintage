import type { Metadata } from 'next';
import Image from 'next/image';

import { KosynkaOptForm } from '@/components/kosynka-opt-form';
import { MobileContactBar } from '@/components/mobile-contact-bar';
import { BRAND_NAME, PHONE_DISPLAY, PHONE_LINK, TELEGRAM_URL, WHATSAPP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Вязаная косынка оптом | Для Wildberries, Ozon и магазинов | Revintage',
  description:
    'Вязаная косынка оптом от Revintage — товар для Wildberries, Ozon, магазинов и шоурумов. Подтвержденный спрос, оптовая цена до 250 руб за единицу, выбор узора, широкая палитра цветов, возможность тестовых и регулярных закупок.',
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

const proofBadges = [
  'Оптовая цена до 250 руб',
  'Подходит для Wildberries и Ozon',
  'Подтвержденный повторный спрос',
  'Возможность выбора узора',
  'Большая палитра цветов',
  'Прямой контакт с производством'
] as const;

const demandCards = ['Повторные заказы', 'Понятная категория для рынка', 'Подходит для сезонных и повторных продаж', 'Вариативность по узору и цвету'] as const;

const audienceCards = [
  ['Селлерам Wildberries', 'Для теста карточки, сезонного запуска и расширения полки в категории аксессуаров.'],
  ['Селлерам Ozon', 'Для входа в понятную категорию с товаром, который можно адаптировать под свою аудиторию.'],
  ['Магазинам аксессуаров', 'Для компактной позиции, которую удобно добавлять в сезонный и базовый ассортимент.'],
  ['Шоурумам', 'Для акцентного аксессуара с понятной визуальной подачей и возможностью собрать палитру.'],
  ['Оптовым клиентам', 'Для закупки партии под регулярные продажи, дозаказ и повторяемый спрос.'],
  ['Тем, кто хочет протестировать новый аксессуар в продаже', 'Для осторожного входа в категорию через тестовую закупку и проверку спроса.']
] as const;

const sellerPrepCards = [
  ['Цена входа в товар', 'Позиция удобна для предварительного расчета и теста через небольшую партию.'],
  ['Визуальная подача карточки', 'Важно сразу продумать фото, стиль подачи и позиционирование для вашей аудитории.'],
  ['Упаковка', 'Упаковка влияет на восприятие товара и итоговую экономику продажи.'],
  ['Тест цветов', 'Есть смысл проверять, какие оттенки лучше зайдут под ваш сегмент и сезон.'],
  ['Тест узора', 'Вариативность по узору дает возможность точнее попасть в спрос аудитории.'],
  ['Повторная закупка', 'Если модель подтверждает спрос, позицию удобно масштабировать повторными поставками.']
] as const;

const productBenefits = [
  'Понятный товар без сложного объяснения покупателю',
  'Подходит под маркетплейсы и офлайн-магазины',
  'Компактная товарная позиция',
  'Может работать как сезонный и повторяемый аксессуар',
  'Подходит для тестовых и регулярных закупок',
  'Оптовая цена до 250 руб за единицу',
  'Возможность редактировать узор под вкус покупателя',
  'Возможность выбора из широкой палитры цветов'
] as const;

const flexibilityCards = ['Адаптация узора', 'Большая палитра цветов', 'Возможность тестировать несколько вариантов', 'Гибкость под разную аудиторию'] as const;

const requestItems = ['Оптовые условия', 'Цвета', 'Варианты узора', 'Размеры / параметры', 'Тестовую партию', 'Регулярные поставки', 'Условия запуска под маркетплейсы', 'Условия для магазинов и шоурумов'] as const;

const faqItems = [
  ['Подходит ли товар для Wildberries и Ozon?', 'Да, товар подходит для селлеров маркетплейсов, магазинов и шоурумов.'],
  ['Можно ли начать с тестовой партии?', 'Возможность тестовой партии обсуждается отдельно.'],
  ['Какая оптовая цена?', 'Ориентир по оптовой цене — до 250 руб за единицу.'],
  ['Можно ли выбрать цвет?', 'Да, можно обсудить выбор из широкой палитры цветов.'],
  ['Можно ли изменить узор?', 'Да, возможна адаптация узора под вкус покупателя и задачу клиента.'],
  ['Можно ли обсудить регулярные закупки?', 'Да, можно обсудить повторяемые поставки.'],
  ['Подходит ли товар для магазинов?', 'Да, товар подходит и для офлайн-продажи.'],
  ['Как получить условия по опту?', 'Оставьте заявку через форму или свяжитесь через WhatsApp.']
] as const;

const marketplaceCards = [
  ['Wildberries', 'Подходит для селлеров, которым нужен товар с понятной категорией, вариативностью по цветам и возможностью теста через небольшую партию.'],
  ['Ozon', 'Подходит для продавцов, которым важно быстро собрать аккуратное предложение и проверить спрос на аксессуар в своей модели продаж.']
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
            <a href="#economy">Экономика</a>
            <a href="#faq">FAQ</a>
            <a href="#lead">Заявка</a>
          </nav>
          <a href="#lead" className="rounded-full bg-[#17181c] px-4 py-2 text-sm font-medium text-white transition hover:bg-black">
            Запросить опт
          </a>
        </div>
      </header>

      <section className="section-shell section-gap pb-14 pt-10 sm:pt-16 lg:pb-20">
        <a href="/" className="mb-6 inline-flex text-sm font-medium text-[#5b5e65] transition hover:text-[#17181c]">
          ← Вернуться на сайт Revintage
        </a>
        <div className="grid gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-stretch">
          <div className="soft-panel relative overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#16352a]/10 blur-3xl" />
            <div className="relative space-y-8">
              <div className="flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#16352a]">
                <span className="rounded-full border border-[#16352a]/10 bg-white/70 px-3 py-2">B2B only</span>
                <span className="rounded-full border border-[#16352a]/10 bg-white/70 px-3 py-2">Wildberries / Ozon / Retail</span>
              </div>
              <div className="space-y-5">
                <span className="eyebrow">Оптовое предложение Revintage</span>
                <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#17181c] sm:text-5xl lg:text-7xl">
                  Вязаная косынка оптом — товар для Wildberries, Ozon и магазинов
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-[#565a61] sm:text-xl">
                  Проверенная товарная позиция с подтвержденным спросом. Подходит для селлеров маркетплейсов, магазинов и оптовых закупок.
                </p>
                <p className="max-w-3xl text-base leading-8 text-[#5e6168] sm:text-lg">
                  Это не случайный экспериментальный товар, а модель, которую стабильно заказывают повторно. Категория уже существует и продается, но в ней еще можно занять сильную позицию за счет нормального продукта, цены, вариативности и скорости запуска.
                </p>
                <div className="space-y-2">
                  <div className="text-xl font-semibold text-[#17181c]">Оптовая цена — до 250 руб за единицу</div>
                  <div className="text-base font-medium text-[#16352a]">
                    Возможна адаптация узора под вкус покупателя и выбор из широкой палитры цветов
                  </div>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <a href="#lead" className="inline-flex items-center justify-center rounded-full bg-[#17181c] px-6 py-4 text-sm font-semibold text-white transition hover:bg-black">
                  Запросить оптовые условия
                </a>
                <a href="#economy" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-4 text-sm font-semibold text-[#17181c] transition hover:bg-[#f4f1eb]">
                  Получить расчет партии
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#16352a] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#1d4738]">
                  WhatsApp
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

          <div className="flex flex-col gap-6">
            <div className="card-surface p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#16352a]">Для кого страница</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c]">Оптовая страница под закупку, а не под розницу.</h2>
              <p className="mt-4 text-sm leading-7 text-[#5b5f65]">
                Здесь собрана логика для B2B-покупателя: селлеров Wildberries и Ozon, магазинов, шоурумов, оптовиков и закупщиков аксессуаров.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {marketplaceCards.map(([title, text]) => (
                <article key={title} className="rounded-[28px] border border-black/[0.06] bg-white p-6 shadow-[0_20px_50px_rgba(19,25,22,0.06)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#16352a]">Сегмент</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#17181c]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5b5e65]">{text}</p>
                </article>
              ))}
            </div>
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
          </div>
        </div>
      </section>

      <section className="section-shell pt-0 pb-6 sm:pb-8">
        <div className="card-surface p-8 sm:p-10">
          <span className="eyebrow">Тест позиции</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Почему этот товар может быть удобен для теста</h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-[#565a61]">
            Вязаная косынка — компактная и понятная товарная позиция. Ее можно тестировать как отдельный аксессуар, добавлять в сезонный ассортимент или использовать как позицию для расширения линейки. Для B2B-покупателя это удобный формат входа в товарную категорию без необходимости сразу заходить в сложный ассортимент.
          </p>
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
          <a href="#lead" className="inline-flex items-center justify-center rounded-full bg-[#17181c] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-black">
            Получить условия по опту
          </a>
        </div>
      </section>

      <section className="section-shell section-gap pt-10">
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

      <section className="section-shell section-gap">
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
          <div className="card-surface p-8 sm:p-10">
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
            <div className="mt-8">
              <a href="#lead" className="inline-flex items-center justify-center rounded-full bg-[#17181c] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-black">
                Обсудить узор и цвета
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
              <p>Оптовая цена: до 250 руб / шт.</p>
              <p>Далее селлер закладывает свою цену продажи, упаковку, логистику, комиссию и рекламу.</p>
              <p>Позиция может быть интересна для теста через небольшую партию.</p>
              <p>Маржинальность зависит от вашей модели продаж, упаковки, карточки товара и рекламных расходов.</p>
            </div>
          </div>
          <div className="soft-panel p-8 sm:p-10">
            <span className="eyebrow">Пример расчета для селлера</span>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {['Закупка: 250 руб', 'Цена продажи: редактируемо', 'Комиссия: редактируемо', 'Логистика: редактируемо', 'Реклама: редактируемо', 'Итоговая маржа: редактируемо'].map((item) => (
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
          <a href="#lead" className="inline-flex items-center justify-center rounded-full bg-[#17181c] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-black">
            Запросить расчет под свою модель
          </a>
        </div>
      </section>

      <section className="section-shell section-gap pt-0">
        <div className="card-surface p-8 sm:p-10">
          <span className="eyebrow">Окно возможностей</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-4xl">Почему выгоднее заходить раньше, чем позже</h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-[#565a61]">
            Когда категория уже подтверждена спросом, но еще не перегрета сильными однотипными предложениями, у селлера или магазина больше шансов занять место за счет скорости, качества карточки, понятного товара и вариативности по узору и цветам. Чем позже рынок уплотняется, тем дороже становится вход и сложнее выделиться.
          </p>
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
            <span className="eyebrow">Финальный CTA</span>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#17181c] sm:text-5xl">Получите оптовые условия по вязаной косынке</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#5b5f65]">
              Оставьте запрос — обсудим цену, партию, цвета, варианты узора и условия для Wildberries, Ozon, магазина или шоурума.
            </p>
            <div className="mt-8 grid gap-3">
              <a href="#lead-form" className="rounded-[22px] bg-[#17181c] px-5 py-4 text-sm font-semibold text-white transition hover:bg-black">
                Запросить оптовые условия
              </a>
              <a href="#economy" className="rounded-[22px] border border-black/10 bg-white px-5 py-4 text-sm font-semibold text-[#17181c] transition hover:bg-[#f4f1eb]">
                Получить расчет партии
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-[22px] bg-[#16352a] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#1d4738]">
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
