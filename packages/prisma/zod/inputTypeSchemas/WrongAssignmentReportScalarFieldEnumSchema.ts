import { z } from 'zod';

export const WrongAssignmentReportScalarFieldEnumSchema = z.enum(['id','bookingUid','reportedById','correctAssignee','additionalNotes','teamId','routingFormId','status','reviewedById','reviewedAt','createdAt','updatedAt']);

export default WrongAssignmentReportScalarFieldEnumSchema;
