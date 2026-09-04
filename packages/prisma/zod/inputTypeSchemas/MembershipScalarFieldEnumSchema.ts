import { z } from 'zod';

export const MembershipScalarFieldEnumSchema = z.enum(['id','teamId','userId','accepted','role','customRoleId','disableImpersonation','createdAt','updatedAt']);

export default MembershipScalarFieldEnumSchema;
