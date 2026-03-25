import { z } from 'zod';

export const leadSchema = z.object({
  name: z.string().trim().min(1, 'Укажите имя'),
  phone: z.string().trim().min(1, 'Укажите телефон'),
  contact: z.string().trim().min(1, 'Укажите контакт'),
  productType: z.string().trim().min(1, 'Укажите тип изделия'),
  quantity: z.string().trim().min(1, 'Укажите объем партии'),
  comment: z.string().trim().max(1000, 'Комментарий слишком длинный').optional().default(''),
  company: z.string().max(0).optional().default(''),
  formStartedAt: z.number().int(),
  website: z.string().optional().default('')
});

export type LeadFormValues = z.infer<typeof leadSchema>;
