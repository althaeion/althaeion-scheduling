import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// APP ROUTING FORMS QUEUED FORM RESPONSE SCHEMA
/////////////////////////////////////////

export const App_RoutingForms_QueuedFormResponseSchema = z.object({
  id: z.string().cuid(),
  formId: z.string(),
  response: JsonValueSchema,
  chosenRouteId: z.string().nullable(),
  fallbackAction: JsonValueSchema.nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date().nullable(),
  actualResponseId: z.number().int().nullable(),
})

export type App_RoutingForms_QueuedFormResponse = z.infer<typeof App_RoutingForms_QueuedFormResponseSchema>

export default App_RoutingForms_QueuedFormResponseSchema;
