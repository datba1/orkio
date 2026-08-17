import { WorkflowTask } from "./task";

export interface WorkflowDefinition {
  name: string;
  version: number;
  tasks: WorkflowTask[];
}