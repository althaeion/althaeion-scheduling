import { z } from 'zod';

export const RoutingFormResponseScalarFieldEnumSchema = z.enum(['id','response','responseLowercase','formId','formName','formTeamId','formUserId','bookingUid','bookingStatus','bookingStatusOrder','bookingCreatedAt','bookingAttendees','bookingUserId','bookingUserName','bookingUserEmail','bookingUserAvatarUrl','bookingAssignmentReason','bookingAssignmentReasonLowercase','bookingStartTime','bookingEndTime','createdAt','utm_source','utm_medium','utm_campaign','utm_term','utm_content']);

export default RoutingFormResponseScalarFieldEnumSchema;
