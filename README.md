# Revintage

Одностраничный B2B-лендинг для вязального цеха Revintage на **Next.js 14 + React + TypeScript + Tailwind CSS**.

## Что внутри

- конверсионная one-page структура под входящие заявки;
- адаптивный интерфейс для мобильных, планшетов и десктопа;
- форма заявки с клиентской и серверной валидацией;
- основной канал отправки в **Telegram Bot API**;
- резервный канал отправки на email через **SMTP**;
- базовая антиспам-защита: honeypot, задержка перед отправкой, проверка пустых полей;
- mock data для галереи и структура папок под реальные фото;
- SEO metadata и favicon.

## Быстрый старт

```bash
npm install
npm run dev
```

Откройте `http://localhost:3000`.

## Настройка окружения

Скопируйте пример файла окружения:

```bash
cp .env.example .env.local
```

Заполните переменные:

### Telegram Bot API — основной канал

- `TELEGRAM_BOT_TOKEN` — токен вашего Telegram-бота.
- `TELEGRAM_CHAT_ID` — чат / группа, куда будут приходить заявки.
- `NEXT_PUBLIC_TELEGRAM_URL` — публичная ссылка для кнопки Telegram в интерфейсе. Сейчас в коде стоит заглушка, замените на свой username или URL.

### Email / SMTP — резервный канал

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `MAIL_TO`
- `MAIL_FROM` — адрес отправителя, опционально.

### Публичные контакты

- `NEXT_PUBLIC_PHONE`
- `NEXT_PUBLIC_WHATSAPP_URL`
- `NEXT_PUBLIC_CITY`

> Контактные данные и ссылки уже предзаполнены значениями Revintage. При необходимости замените их в `.env.local` или в `lib/constants.ts`.

## Как работает прием заявок

1. Клиент отправляет форму на `/api/contact`.
2. Сервер валидирует обязательные поля через `zod`.
3. Антиспам-проверка отсекает слишком быструю отправку и honeypot-поля.
4. Сначала выполняется попытка отправки в Telegram.
5. Если Telegram недоступен или не настроен, маршрут автоматически пробует отправить письмо через SMTP.
6. Если оба канала не настроены или произошла ошибка, клиент увидит понятное сообщение об ошибке, а сервер запишет ошибку в лог.

Формат заявки:

```text
Новая заявка с сайта Revintage
Имя:
Телефон:
Контакт:
Тип изделия:
Объем партии:
Комментарий:
Дата и время:
```

## Где менять контент

- Основные секции лендинга: `app/page.tsx`
- Серверная отправка формы: `app/api/contact/route.ts`
- Telegram / SMTP логика: `lib/actions.ts`
- Валидация формы: `lib/validation.ts`
- Контакты и ссылки: `lib/constants.ts`
- Галерея и mock data: `data/gallery.ts`
- Изображения-заглушки:
  - `public/images/factory/`
  - `public/images/products/cardigans/`
  - `public/images/products/jumpers/`
  - `public/images/products/sweaters/`
  - `public/images/products/hats/`
  - `public/images/products/scarves/`
  - `public/images/products/vests/`
  - `public/images/products/schoolwear/`
  - `public/images/samples/`

## Production notes

- Перед деплоем обязательно настройте реальные Telegram и SMTP переменные.
- Если Telegram-кнопка еще не готова, замените `NEXT_PUBLIC_TELEGRAM_URL` на реальный username или ссылку.
- Если меняете номер телефона, обновите также `tel:` и `wa.me` ссылки.
- Для реального SEO добавьте production-домен в `metadataBase` в `app/layout.tsx`.

## Проверка

```bash
npm run typecheck
npm run lint
npm run build
```
