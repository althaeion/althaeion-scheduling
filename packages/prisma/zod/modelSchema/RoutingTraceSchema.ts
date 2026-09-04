import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// ROUTING TRACE SCHEMA
/////////////////////////////////////////

export const RoutingTraceSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  trace: JsonValueSchema,
  formResponseId: z.number().int().nullable(),
  queuedFormResponseId: z.string().nullable(),
  bookingUid: z.string().nullable(),
  assignmentReasonId: z.number().int().nullable(),
})

export type RoutingTrace = z.infer<typeof RoutingTraceSchema>

export default RoutingTraceSchema;
