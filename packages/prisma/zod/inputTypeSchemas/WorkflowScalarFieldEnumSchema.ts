import { z } from 'zod';

export const WorkflowScalarFieldEnumSchema = z.enum(['id','position','name','userId','teamId','isActiveOnAll','trigger','time','timeUnit','type']);

export default WorkflowScalarFieldEnumSchema;
