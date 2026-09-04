import { z } from 'zod';

/////////////////////////////////////////
// IMPERSONATIONS SCHEMA
/////////////////////////////////////////

export const ImpersonationsSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  impersonatedUserId: z.number().int(),
  impersonatedById: z.number().int(),
})

export type Impersonations = z.infer<typeof ImpersonationsSchema>

export default ImpersonationsSchema;
