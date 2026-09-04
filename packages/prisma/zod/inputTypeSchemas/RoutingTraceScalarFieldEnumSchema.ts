import { z } from 'zod';

export const RoutingTraceScalarFieldEnumSchema = z.enum(['id','createdAt','trace','formResponseId','queuedFormResponseId','bookingUid','assignmentReasonId']);

export default RoutingTraceScalarFieldEnumSchema;
