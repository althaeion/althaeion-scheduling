import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { RoutingFormSettings } from '../../zod-utils'

/////////////////////////////////////////
// APP ROUTING FORMS FORM SCHEMA
/////////////////////////////////////////

export const App_RoutingForms_FormSchema = z.object({
  id: z.string().cuid(),
  description: z.string().nullable(),
  position: z.number().int(),
  routes: JsonValueSchema.nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  name: z.string(),
  fields: JsonValueSchema.nullable(),
  updatedById: z.number().int().nullable(),
  userId: z.number().int(),
  teamId: z.number().int().nullable(),
  disabled: z.boolean(),
  settings: RoutingFormSettings.nullable(),
})

export type App_RoutingForms_Form = z.infer<typeof App_RoutingForms_FormSchema>

export default App_RoutingForms_FormSchema;
