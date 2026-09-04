import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { serviceAccountKeySchema } from '../../zod-utils'

/////////////////////////////////////////
// DOMAIN WIDE DELEGATION SCHEMA
/////////////////////////////////////////

export const DomainWideDelegationSchema = z.object({
  id: z.string().uuid(),
  workspacePlatformId: z.number().int(),
  serviceAccountKey: serviceAccountKeySchema,
  enabled: z.boolean(),
  organizationId: z.number().int(),
  domain: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type DomainWideDelegation = z.infer<typeof DomainWideDelegationSchema>

export default DomainWideDelegationSchema;
