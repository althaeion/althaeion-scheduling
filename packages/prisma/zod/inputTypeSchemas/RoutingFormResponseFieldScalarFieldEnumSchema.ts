import { z } from 'zod';

export const RoutingFormResponseFieldScalarFieldEnumSchema = z.enum(['id','responseId','fieldId','valueString','valueNumber','valueStringArray']);

export default RoutingFormResponseFieldScalarFieldEnumSchema;
