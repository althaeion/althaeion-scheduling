import { z } from 'zod';

export const ImpersonationsScalarFieldEnumSchema = z.enum(['id','createdAt','impersonatedUserId','impersonatedById']);

export default ImpersonationsScalarFieldEnumSchema;
