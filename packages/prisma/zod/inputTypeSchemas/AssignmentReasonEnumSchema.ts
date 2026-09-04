import { z } from 'zod';

export const AssignmentReasonEnumSchema = z.enum(['ROUTING_FORM_ROUTING','ROUTING_FORM_ROUTING_FALLBACK','REASSIGNED','RR_REASSIGNED','REROUTED','SALESFORCE_ASSIGNMENT']);

export type AssignmentReasonEnumType = `${z.infer<typeof AssignmentReasonEnumSchema>}`

export default AssignmentReasonEnumSchema;
