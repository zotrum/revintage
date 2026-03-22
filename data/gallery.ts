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
    description: 'Коммерческие модели с акцентом на стабильную повторяемость и посадку партии.',
    image: '/images/products/cardigans/placeholder-cardigan.svg'
  },
  {
    title: 'Джемперы для капсульных коллекций',
    category: 'Джемперы',
    description: 'Базовые и fashion-решения для брендов, магазинов и маркетплейс-линеек.',
    image: '/images/products/jumpers/placeholder-jumper.svg'
  },
  {
    title: 'Свитеры сезонного ассортимента',
    category: 'Свитеры',
    description: 'Теплые модели под продажи в сезон с учетом плотности и конструкции вязки.',
    image: '/images/products/sweaters/placeholder-sweater.svg'
  },
  {
    title: 'Шапки для розничного ассортимента',
    category: 'Шапки',
    description: 'Серийное производство аксессуаров с контролем размера, плотности и фурнитуры.',
    image: '/images/products/hats/placeholder-hat.svg'
  },
  {
    title: 'Шарфы и комплектные решения',
    category: 'Шарфы',
    description: 'Подготовка изделий для наборов и gift-ассортимента.',
    image: '/images/products/scarves/placeholder-scarf.svg'
  },
  {
    title: 'Жилеты для layered-ассортимента',
    category: 'Жилеты',
    description: 'Практичные модели для школьных, корпоративных и fashion-проектов.',
    image: '/images/products/vests/placeholder-vest.svg'
  },
  {
    title: 'Школьный трикотаж',
    category: 'Schoolwear',
    description: 'Управляемое производство для учебных заведений и поставщиков формы.',
    image: '/images/products/schoolwear/placeholder-schoolwear.svg'
  },
  {
    title: 'Крупный план вязки',
    category: 'Фактура',
    description: 'Демонстрация плотности, переплетения и качества исполнения полотна.',
    image: '/images/samples/placeholder-knit-closeup.svg'
  },
  {
    title: 'Производственный цех',
    category: 'Цех',
    description: 'Фото пространства, которое подтверждает реальное производство без посредников.',
    image: '/images/factory/placeholder-factory.svg'
  },
  {
    title: 'Оборудование',
    category: 'Оборудование',
    description: 'Визуальный акцент на технологичность, контроль и стабильность результата.',
    image: '/images/factory/placeholder-equipment.svg'
  },
  {
    title: 'Тестовые образцы',
    category: 'Образцы',
    description: 'Проработка изделия до запуска серии и согласования с заказчиком.',
    image: '/images/samples/placeholder-sample.svg'
  },
  {
    title: 'Готовые партии',
    category: 'Партии',
    description: 'Подготовка изделий к отгрузке для опта, магазинов и marketplace-каналов.',
    image: '/images/samples/placeholder-batch.svg'
  }
];
