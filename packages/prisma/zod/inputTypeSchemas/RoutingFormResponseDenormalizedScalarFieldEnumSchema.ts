import { z } from 'zod';

export const RoutingFormResponseDenormalizedScalarFieldEnumSchema = z.enum(['id','uuid','formId','formName','formTeamId','formUserId','bookingUid','bookingId','bookingStatus','bookingStatusOrder','bookingCreatedAt','bookingStartTime','bookingEndTime','bookingUserId','bookingUserName','bookingUserEmail','bookingUserAvatarUrl','bookingAssignmentReason','eventTypeId','eventTypeParentId','eventTypeSchedulingType','createdAt','utm_source','utm_medium','utm_campaign','utm_term','utm_content']);

export default RoutingFormResponseDenormalizedScalarFieldEnumSchema;
