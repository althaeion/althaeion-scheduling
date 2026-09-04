import { z } from 'zod';

export const IncompleteBookingActionTypeSchema = z.enum(['SALESFORCE']);

export type IncompleteBookingActionTypeType = `${z.infer<typeof IncompleteBookingActionTypeSchema>}`

export default IncompleteBookingActionTypeSchema;
