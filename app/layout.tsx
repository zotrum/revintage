import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://revintage.local'),
  title: 'Revintage — вязальный цех под заказ | Производство трикотажа',
  description:
    'Revintage — вязальный цех под заказ. Кардиганы, джемперы, свитеры, шапки, шарфы, жилеты и школьный трикотаж. Разработка образцов и производство партий.',
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
