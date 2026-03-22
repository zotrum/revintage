'use client';

import { useMemo, useState } from 'react';

const initialState = {
  name: '',
  phone: '',
  contact: '',
  productType: '',
  quantity: '',
  comment: '',
  company: '',
  website: ''
};

export function LeadForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error' | 'loading'; message: string }>({ type: 'idle', message: '' });
  const formStartedAt = useMemo(() => Date.now(), []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Отправляем заявку…' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, formStartedAt })
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Ошибка отправки');
      }

      setStatus({ type: 'success', message: result.message });
      setValues(initialState);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Не удалось отправить заявку.'
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface space-y-6 p-6 sm:p-8 lg:p-9">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#16352a]">Быстрый бриф</p>
        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#17181c]">Оставьте заявку, чтобы обсудить модель, образец и запуск партии.</h3>
        <p className="text-sm leading-7 text-[#5b5e65]">Форма рассчитана на B2B-запрос: нам достаточно контактов и базового описания задачи, чтобы быстро вернуться с уточнениями.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {[
          ['name', 'Имя'],
          ['phone', 'Телефон'],
          ['contact', 'WhatsApp или Telegram'],
          ['productType', 'Тип изделия'],
          ['quantity', 'Объем партии']
        ].map(([name, label]) => (
          <label key={name} className="space-y-2 text-sm text-[#50545a]">
            <span>{label}</span>
            <input
              required
              name={name}
              value={values[name as keyof typeof initialState]}
              onChange={(event) => setValues((current) => ({ ...current, [name]: event.target.value }))}
              className="w-full rounded-2xl border border-black/10 bg-[#fcfbf8] px-4 py-3.5 text-base text-[#17181c] outline-none transition focus:border-[#16352a] focus:bg-white"
              placeholder={label}
            />
          </label>
        ))}
      </div>

      <label className="space-y-2 text-sm text-[#50545a]">
        <span>Комментарий</span>
        <textarea
          name="comment"
          rows={5}
          value={values.comment}
          onChange={(event) => setValues((current) => ({ ...current, comment: event.target.value }))}
          className="w-full rounded-2xl border border-black/10 bg-[#fcfbf8] px-4 py-3.5 text-base text-[#17181c] outline-none transition focus:border-[#16352a] focus:bg-white"
          placeholder="Например: мужские джемперы, партия 300 шт, нужен образец и срок запуска до начала сезона."
        />
      </label>

      <input
        tabIndex={-1}
        autoComplete="off"
        name="company"
        value={values.company}
        onChange={(event) => setValues((current) => ({ ...current, company: event.target.value }))}
        className="hidden"
      />
      <input
        tabIndex={-1}
        autoComplete="off"
        name="website"
        value={values.website}
        onChange={(event) => setValues((current) => ({ ...current, website: event.target.value }))}
        className="hidden"
      />

      <div className="rounded-2xl border border-[#16352a]/10 bg-[#16352a]/[0.04] px-4 py-4 text-sm leading-7 text-[#4f544f]">
        Обычно для старта достаточно прислать фото, референс, описание модели или примерный объем — дальше мы поможем структурировать задачу.
      </div>

      <div className="flex flex-col gap-4 border-t border-black/[0.06] pt-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status.type === 'loading'}
          className="inline-flex items-center justify-center rounded-full bg-[#17181c] px-6 py-3.5 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-black disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status.type === 'loading' ? 'Отправка…' : 'Отправить заявку'}
        </button>
        <p className={`max-w-md text-sm leading-6 ${status.type === 'error' ? 'text-red-600' : 'text-[#5b5e65]'}`}>{status.message}</p>
      </div>
    </form>
  );
}
