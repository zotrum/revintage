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
    <form onSubmit={handleSubmit} className="card-surface space-y-5 p-6 sm:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        {[
          ['name', 'Имя'],
          ['phone', 'Телефон'],
          ['contact', 'WhatsApp или Telegram'],
          ['productType', 'Тип изделия'],
          ['quantity', 'Объем партии']
        ].map(([name, label]) => (
          <label key={name} className="space-y-2 text-sm text-white/80">
            <span>{label}</span>
            <input
              required
              name={name}
              value={values[name as keyof typeof initialState]}
              onChange={(event) => setValues((current) => ({ ...current, [name]: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-base text-white outline-none transition focus:border-accent"
              placeholder={label}
            />
          </label>
        ))}
      </div>

      <label className="space-y-2 text-sm text-white/80">
        <span>Комментарий</span>
        <textarea
          name="comment"
          rows={5}
          value={values.comment}
          onChange={(event) => setValues((current) => ({ ...current, comment: event.target.value }))}
          className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-base text-white outline-none transition focus:border-accent"
          placeholder="Опишите изделие, материалы, сроки, целевой канал продаж или другие важные детали."
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

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status.type === 'loading'}
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-[#1d4738] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status.type === 'loading' ? 'Отправка…' : 'Отправить заявку'}
        </button>
        <p className={`max-w-md text-sm ${status.type === 'error' ? 'text-red-300' : 'text-white/70'}`}>{status.message}</p>
      </div>
    </form>
  );
}
