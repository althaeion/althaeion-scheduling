import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// PENDING ROUTING TRACE SCHEMA
/////////////////////////////////////////

export const PendingRoutingTraceSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  trace: JsonValueSchema,
  formResponseId: z.number().int().nullable(),
  queuedFormResponseId: z.string().nullable(),
})

export type PendingRoutingTrace = z.infer<typeof PendingRoutingTraceSchema>

export default PendingRoutingTraceSchema;
