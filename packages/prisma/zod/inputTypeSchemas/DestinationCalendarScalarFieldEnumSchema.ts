import { z } from 'zod';

export const DestinationCalendarScalarFieldEnumSchema = z.enum(['id','integration','externalId','primaryEmail','userId','eventTypeId','credentialId','createdAt','updatedAt','delegationCredentialId','domainWideDelegationCredentialId','customCalendarReminder']);

export default DestinationCalendarScalarFieldEnumSchema;
