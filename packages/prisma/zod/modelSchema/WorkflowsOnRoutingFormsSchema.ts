import { z } from 'zod';

/////////////////////////////////////////
// WORKFLOWS ON ROUTING FORMS SCHEMA
/////////////////////////////////////////

export const WorkflowsOnRoutingFormsSchema = z.object({
  id: z.number().int(),
  workflowId: z.number().int(),
  routingFormId: z.string(),
})

export type WorkflowsOnRoutingForms = z.infer<typeof WorkflowsOnRoutingFormsSchema>

export default WorkflowsOnRoutingFormsSchema;
