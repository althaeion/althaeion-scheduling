import { z } from 'zod';

export const AIPhoneCallConfigurationScalarFieldEnumSchema = z.enum(['id','eventTypeId','templateType','schedulerName','generalPrompt','yourPhoneNumber','numberToCall','guestName','guestEmail','guestCompany','enabled','beginMessage','llmId']);

export default AIPhoneCallConfigurationScalarFieldEnumSchema;
