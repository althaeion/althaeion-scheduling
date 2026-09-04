import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// APP ROUTING FORMS FORM RESPONSE SCHEMA
/////////////////////////////////////////

export const App_RoutingForms_FormResponseSchema = z.object({
  id: z.number().int(),
  uuid: z.string().uuid().nullable(),
  formFillerId: z.string().cuid(),
  formId: z.string(),
  response: JsonValueSchema,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date().nullable(),
  routedToBookingUid: z.string().nullable(),
  chosenRouteId: z.string().nullable(),
})

export type App_RoutingForms_FormResponse = z.infer<typeof App_RoutingForms_FormResponseSchema>

export default App_RoutingForms_FormResponseSchema;
