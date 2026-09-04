import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { IncompleteBookingActionTypeSchema } from '../inputTypeSchemas/IncompleteBookingActionTypeSchema'

/////////////////////////////////////////
// APP ROUTING FORMS INCOMPLETE BOOKING ACTIONS SCHEMA
/////////////////////////////////////////

export const App_RoutingForms_IncompleteBookingActionsSchema = z.object({
  actionType: IncompleteBookingActionTypeSchema,
  id: z.number().int(),
  formId: z.string(),
  data: JsonValueSchema,
  enabled: z.boolean(),
  credentialId: z.number().int().nullable(),
})

export type App_RoutingForms_IncompleteBookingActions = z.infer<typeof App_RoutingForms_IncompleteBookingActionsSchema>

export default App_RoutingForms_IncompleteBookingActionsSchema;
