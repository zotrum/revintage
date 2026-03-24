'use client';

import { useMemo, useState } from 'react';

const initialState = {
  name: '',
  phone: '',
  salesChannel: 'Wildberries',
  quantity: '',
  colors: '',
  patternNeed: 'Обсудить варианты',
  comment: '',
  contact: '',
  company: '',
  website: ''
};

const salesChannels = ['Wildberries', 'Ozon', 'Магазин', 'Шоурум', 'Опт', 'Несколько каналов'] as const;
const patternOptions = ['Да', 'Нет', 'Обсудить варианты'] as const;

export function KosynkaOptForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error' | 'loading'; message: string }>({ type: 'idle', message: '' });
  const formStartedAt = useMemo(() => Date.now(), []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Отправляем запрос…' });

    const payload = {
      name: values.name,
      phone: values.phone,
      contact: values.contact || values.phone,
      productType: 'Вязаная косынка оптом',
      quantity: values.quantity,
      comment: [
        `Где планируют продавать: ${values.salesChannel || '—'}`,
        `Интересуют цвета: ${values.colors || '—'}`,
        `Нужен индивидуальный узор: ${values.patternNeed || '—'}`,
        `Комментарий: ${values.comment || '—'}`
      ].join('\n'),
      company: values.company,
      website: values.website,
      formStartedAt
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || 'Ошибка отправки');
      }
      setStatus({ type: 'success', message: result.message });
      setValues(initialState);
    } catch (error) {
      setStatus({ type: 'error', message: error instanceof Error ? error.message : 'Не удалось отправить запрос.' });
    }
  }

  const updateField = (field: keyof typeof initialState) => (value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-6 p-6 sm:p-8 lg:p-9">
      <div className="rounded-[22px] border border-[#16352a]/10 bg-[#16352a]/[0.06] px-5 py-4 text-sm font-semibold text-[#16352a]">
        Оптовая цена — до 290 руб за единицу
      </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#16352a]">Оптовый запрос</p>
        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#17181c]">Получить оптовые условия</h3>
        <p className="text-sm leading-7 text-[#5b5e65]">Свяжемся с вами для обсуждения партии, цены, цветов, узора и условий поставки.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-[#50545a]">
          <span>Имя</span>
          <input
            required
            value={values.name}
            onChange={(event) => updateField('name')(event.target.value)}
            className="w-full rounded-2xl border border-black/10 bg-[#fcfbf8] px-4 py-3.5 text-base text-[#17181c] outline-none transition focus:border-[#16352a] focus:bg-white"
            placeholder="Имя"
          />
        </label>

        <label className="space-y-2 text-sm text-[#50545a]">
          <span>Телефон / WhatsApp</span>
          <input
            required
            value={values.phone}
            onChange={(event) => updateField('phone')(event.target.value)}
            className="w-full rounded-2xl border border-black/10 bg-[#fcfbf8] px-4 py-3.5 text-base text-[#17181c] outline-none transition focus:border-[#16352a] focus:bg-white"
            placeholder="Телефон / WhatsApp"
          />
        </label>

        <label className="space-y-2 text-sm text-[#50545a]">
          <span>Доп. контакт</span>
          <input
            value={values.contact}
            onChange={(event) => updateField('contact')(event.target.value)}
            className="w-full rounded-2xl border border-black/10 bg-[#fcfbf8] px-4 py-3.5 text-base text-[#17181c] outline-none transition focus:border-[#16352a] focus:bg-white"
            placeholder="Telegram, email или другой контакт"
          />
        </label>

        <label className="space-y-2 text-sm text-[#50545a]">
          <span>Где планируете продавать</span>
          <select
            required
            value={values.salesChannel}
            onChange={(event) => updateField('salesChannel')(event.target.value)}
            className="w-full rounded-2xl border border-black/10 bg-[#fcfbf8] px-4 py-3.5 text-base text-[#17181c] outline-none transition focus:border-[#16352a] focus:bg-white"
          >
            {salesChannels.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 text-sm text-[#50545a]">
          <span>Нужный объем</span>
          <input
            required
            value={values.quantity}
            onChange={(event) => updateField('quantity')(event.target.value)}
            className="w-full rounded-2xl border border-black/10 bg-[#fcfbf8] px-4 py-3.5 text-base text-[#17181c] outline-none transition focus:border-[#16352a] focus:bg-white"
            placeholder="Например: тестовая партия / 50 шт / регулярные поставки"
          />
        </label>

        <label className="space-y-2 text-sm text-[#50545a]">
          <span>Интересуют ли конкретные цвета</span>
          <input
            value={values.colors}
            onChange={(event) => updateField('colors')(event.target.value)}
            className="w-full rounded-2xl border border-black/10 bg-[#fcfbf8] px-4 py-3.5 text-base text-[#17181c] outline-none transition focus:border-[#16352a] focus:bg-white"
            placeholder="Например: молочный, графит, бежевый"
          />
        </label>
      </div>

      <fieldset className="space-y-3">
        <legend className="text-sm text-[#50545a]">Нужен ли индивидуальный узор</legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {patternOptions.map((option) => (
            <label key={option} className={`rounded-[22px] border px-4 py-3 text-sm font-medium transition ${values.patternNeed === option ? 'border-[#16352a] bg-[#16352a]/[0.06] text-[#17181c]' : 'border-black/10 bg-[#fcfbf8] text-[#50545a]'}`}>
              <input
                type="radio"
                name="patternNeed"
                value={option}
                checked={values.patternNeed === option}
                onChange={(event) => updateField('patternNeed')(event.target.value)}
                className="sr-only"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="space-y-2 text-sm text-[#50545a]">
        <span>Комментарий</span>
        <textarea
          rows={5}
          value={values.comment}
          onChange={(event) => updateField('comment')(event.target.value)}
          className="w-full rounded-2xl border border-black/10 bg-[#fcfbf8] px-4 py-3.5 text-base text-[#17181c] outline-none transition focus:border-[#16352a] focus:bg-white"
          placeholder="Например: нужен тест под Wildberries, интересуют 3 цвета и 2 варианта узора."
        />
      </label>

      <input className="hidden" tabIndex={-1} autoComplete="off" value={values.company} onChange={(event) => updateField('company')(event.target.value)} />
      <input className="hidden" tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => updateField('website')(event.target.value)} />

      <div className="rounded-2xl border border-[#16352a]/10 bg-[#16352a]/[0.04] px-4 py-4 text-sm leading-7 text-[#4f544f]">
        Форма собрана именно под оптовый запрос: можно сразу указать канал продаж, ориентир по партии, интерес по цветам и необходимость адаптации узора.
      </div>

      <div className="flex flex-col gap-4 border-t border-black/[0.06] pt-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <button type="submit" disabled={status.type === 'loading'} className="inline-flex items-center justify-center rounded-full bg-[#17181c] px-6 py-3.5 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-black disabled:cursor-not-allowed disabled:opacity-70">
            {status.type === 'loading' ? 'Отправка…' : 'Получить оптовые условия'}
          </button>
          <p className="text-sm leading-6 text-[#5b5e65]">Свяжемся с вами для обсуждения партии, цены, цветов, узора и условий поставки.</p>
        </div>
        <p className={`max-w-md text-sm leading-6 ${status.type === 'error' ? 'text-red-600' : 'text-[#5b5e65]'}`}>{status.message}</p>
      </div>
    </form>
  );
}
