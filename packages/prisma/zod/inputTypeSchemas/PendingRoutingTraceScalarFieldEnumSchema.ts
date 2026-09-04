import { z } from 'zod';

export const PendingRoutingTraceScalarFieldEnumSchema = z.enum(['id','createdAt','trace','formResponseId','queuedFormResponseId']);

export default PendingRoutingTraceScalarFieldEnumSchema;
