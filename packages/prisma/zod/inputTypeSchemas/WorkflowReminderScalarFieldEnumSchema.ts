import { z } from 'zod';

export const WorkflowReminderScalarFieldEnumSchema = z.enum(['id','uuid','bookingUid','method','scheduledDate','referenceId','scheduled','workflowStepId','cancelled','seatReferenceId','isMandatoryReminder','retryCount']);

export default WorkflowReminderScalarFieldEnumSchema;
