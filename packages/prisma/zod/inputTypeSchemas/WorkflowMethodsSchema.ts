import { z } from 'zod';

export const WorkflowMethodsSchema = z.enum(['EMAIL','SMS','WHATSAPP','AI_PHONE_CALL']);

export type WorkflowMethodsType = `${z.infer<typeof WorkflowMethodsSchema>}`

export default WorkflowMethodsSchema;
