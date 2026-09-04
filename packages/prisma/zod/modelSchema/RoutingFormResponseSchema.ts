import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { BookingStatusSchema } from '../inputTypeSchemas/BookingStatusSchema'

/////////////////////////////////////////
// ROUTING FORM RESPONSE SCHEMA
/////////////////////////////////////////

export const RoutingFormResponseSchema = z.object({
  bookingStatus: BookingStatusSchema.nullable(),
  id: z.number().int(),
  response: JsonValueSchema,
  responseLowercase: JsonValueSchema,
  formId: z.string(),
  formName: z.string(),
  formTeamId: z.number().int().nullable(),
  formUserId: z.number().int().nullable(),
  bookingUid: z.string().nullable(),
  bookingStatusOrder: z.number().int().nullable(),
  bookingCreatedAt: z.coerce.date().nullable(),
  bookingAttendees: JsonValueSchema.nullable(),
  bookingUserId: z.number().int().nullable(),
  bookingUserName: z.string().nullable(),
  bookingUserEmail: z.string().nullable(),
  bookingUserAvatarUrl: z.string().nullable(),
  bookingAssignmentReason: z.string().nullable(),
  bookingAssignmentReasonLowercase: z.string().nullable(),
  bookingStartTime: z.coerce.date().nullable(),
  bookingEndTime: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  utm_source: z.string().nullable(),
  utm_medium: z.string().nullable(),
  utm_campaign: z.string().nullable(),
  utm_term: z.string().nullable(),
  utm_content: z.string().nullable(),
})

export type RoutingFormResponse = z.infer<typeof RoutingFormResponseSchema>

export default RoutingFormResponseSchema;
