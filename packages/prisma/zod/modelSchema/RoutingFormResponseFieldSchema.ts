import { z } from 'zod';
import { Prisma } from '../../generated/prisma/client'

/////////////////////////////////////////
// ROUTING FORM RESPONSE FIELD SCHEMA
/////////////////////////////////////////

export const RoutingFormResponseFieldSchema = z.object({
  id: z.number().int(),
  responseId: z.number().int(),
  fieldId: z.string(),
  valueString: z.string().nullable(),
  valueNumber: z.instanceof(Prisma.Decimal, { message: "Field 'valueNumber' must be a Decimal. Location: ['Models', 'RoutingFormResponseField']"}).nullable(),
  valueStringArray: z.string().array(),
})

export type RoutingFormResponseField = z.infer<typeof RoutingFormResponseFieldSchema>

export default RoutingFormResponseFieldSchema;
