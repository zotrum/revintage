import { z } from 'zod';

export const leadSchema = z.object({
  name: z.string().trim().min(2, 'Укажите имя'),
  phone: z.string().trim().min(6, 'Укажите телефон'),
  contact: z.string().trim().min(3, 'Укажите WhatsApp или Telegram'),
  productType: z.string().trim().min(2, 'Укажите тип изделия'),
  quantity: z.string().trim().min(1, 'Укажите объем партии'),
  comment: z.string().trim().max(1000, 'Комментарий слишком длинный').optional().default(''),
  company: z.string().max(0).optional().default(''),
  formStartedAt: z.number().int(),
  website: z.string().optional().default('')
});

export type LeadFormValues = z.infer<typeof leadSchema>;
