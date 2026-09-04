import { z } from 'zod';

export const WorkflowTypeSchema = z.enum(['EVENT_TYPE','ROUTING_FORM']);

export type WorkflowTypeType = `${z.infer<typeof WorkflowTypeSchema>}`

export default WorkflowTypeSchema;
