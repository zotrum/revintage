import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://revintage.local'),
  title: 'Revintage — контрактное производство трикотажа под заказ',
  description:
    'Revintage — производство трикотажа под заказ для брендов, магазинов, селлеров Wildberries и Ozon и оптовых клиентов. Кардиганы, джемперы, свитеры, жилеты, шапки, шарфы и школьный трикотаж. Минимальный заказ — от 49 000 руб.',
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
