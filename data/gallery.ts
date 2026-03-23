export type GalleryItem = {
  title: string;
  category: string;
  description: string;
  image: string;
};

// Replace image paths below with real production photos when available.
export const galleryItems: GalleryItem[] = [
  {
    title: 'Кардиганы под private label',
    category: 'Кардиганы',
    description: 'Категория для брендов и ритейла, где важны повторяемость модели, посадка и стабильный производственный результат.',
    image: '/images/products/cardigans/placeholder-cardigan.svg'
  },
  {
    title: 'Джемперы для ритейла',
    category: 'Джемперы',
    description: 'Практичные модели для магазинов, маркетплейсов и сезонных ассортиментных линеек.',
    image: '/images/products/jumpers/placeholder-jumper.svg'
  },
  {
    title: 'Свитеры для сезонных коллекций',
    category: 'Свитеры',
    description: 'Изделия для осенне-зимнего ассортимента с акцентом на фактуру, плотность и коммерческую применимость.',
    image: '/images/products/sweaters/placeholder-sweater.svg'
  },
  {
    title: 'Школьные жилеты и джемперы',
    category: 'Schoolwear',
    description: 'Формат для школьных и корпоративных проектов, где особенно важны повторяемость и дисциплина по срокам.',
    image: '/images/products/schoolwear/placeholder-schoolwear.svg'
  },
  {
    title: 'Шапки',
    category: 'Шапки',
    description: 'Для сезонных аксессуаров и дополнительных категорий, которые можно запускать серийно под спрос.',
    image: '/images/products/hats/20260322_1632_Image Generation_simple_compose_01kmavxs3rehx8an6wtgz4rtem.svg'
  },
  {
    title: 'Образцы перед запуском партии',
    category: 'Образцы',
    description: 'Тестовые изделия для согласования конструкции, фактуры, посадки и финального вида перед серией.',
    image: '/images/samples/placeholder-sample.svg'
  },
  {
    title: 'Крупные планы вязки',
    category: 'Фактура',
    description: 'Показывают плотность, переплетение и качество исполнения, которые важны для оценки модели до запуска.',
    image: '/images/samples/placeholder-knit-closeup.svg'
  },
  {
    title: 'Шарфы',
    category: 'Шарфы',
    description: 'Для комплектных решений, gift-направлений и расширения ассортимента под розницу и опт.',
    image: '/images/samples/placeholder-scarf.svg'
  },
  {
    title: 'Производственный цех',
    category: 'Цех',
    description: 'Подтверждение того, что за проектом стоит реальное производство, а не перепродажа чужих мощностей.',
    image: '/images/factory/placeholder-factory.svg'
  },
  {
    title: 'Оборудование и рабочий процесс',
    category: 'Оборудование',
    description: 'Процессная часть производства, которая влияет на повторяемость, сроки и управляемость партии.',
    image: '/images/factory/placeholder-equipment.svg'
  },
  {
    title: 'Ассортимент для WB и Ozon',
    category: 'Marketplace',
    description: 'Категории изделий для селлеров, которым нужен понятный запуск под сезонный спрос и повторяемые продажи.',
    image: '/images/products/vests/placeholder-vest.svg'
  },
  {
    title: 'Подготовка партии к отгрузке',
    category: 'Партии',
    description: 'Финальный этап перед выдачей или отправкой изделий заказчику.',
    image: '/images/samples/placeholder-batch.svg'
  }
];
