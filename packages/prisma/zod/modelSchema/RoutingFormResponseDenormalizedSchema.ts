import { z } from 'zod';
import { BookingStatusSchema } from '../inputTypeSchemas/BookingStatusSchema'

/////////////////////////////////////////
// ROUTING FORM RESPONSE DENORMALIZED SCHEMA
/////////////////////////////////////////

export const RoutingFormResponseDenormalizedSchema = z.object({
  bookingStatus: BookingStatusSchema.nullable(),
  id: z.number().int(),
  uuid: z.string().nullable(),
  formId: z.string(),
  formName: z.string(),
  formTeamId: z.number().int().nullable(),
  formUserId: z.number().int(),
  bookingUid: z.string().nullable(),
  bookingId: z.number().int().nullable(),
  bookingStatusOrder: z.number().int().nullable(),
  bookingCreatedAt: z.coerce.date().nullable(),
  bookingStartTime: z.coerce.date().nullable(),
  bookingEndTime: z.coerce.date().nullable(),
  bookingUserId: z.number().int().nullable(),
  bookingUserName: z.string().nullable(),
  bookingUserEmail: z.string().nullable(),
  bookingUserAvatarUrl: z.string().nullable(),
  bookingAssignmentReason: z.string().nullable(),
  eventTypeId: z.number().int().nullable(),
  eventTypeParentId: z.number().int().nullable(),
  eventTypeSchedulingType: z.string().nullable(),
  createdAt: z.coerce.date(),
  utm_source: z.string().nullable(),
  utm_medium: z.string().nullable(),
  utm_campaign: z.string().nullable(),
  utm_term: z.string().nullable(),
  utm_content: z.string().nullable(),
})

export type RoutingFormResponseDenormalized = z.infer<typeof RoutingFormResponseDenormalizedSchema>

export default RoutingFormResponseDenormalizedSchema;
