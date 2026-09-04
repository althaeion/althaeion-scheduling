import { z } from 'zod';

/////////////////////////////////////////
// AI PHONE CALL CONFIGURATION SCHEMA
/////////////////////////////////////////

export const AIPhoneCallConfigurationSchema = z.object({
  id: z.number().int(),
  eventTypeId: z.number().int(),
  templateType: z.string(),
  schedulerName: z.string().nullable(),
  generalPrompt: z.string().nullable(),
  yourPhoneNumber: z.string(),
  numberToCall: z.string(),
  guestName: z.string().nullable(),
  guestEmail: z.string().nullable(),
  guestCompany: z.string().nullable(),
  enabled: z.boolean(),
  beginMessage: z.string().nullable(),
  llmId: z.string().nullable(),
})

export type AIPhoneCallConfiguration = z.infer<typeof AIPhoneCallConfigurationSchema>

export default AIPhoneCallConfigurationSchema;
