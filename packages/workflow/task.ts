import { ExecutionStatus } from "./state";

export interface WorkflowTask {
  name: string;
  taskReferenceName: string;
  type: string;
  inputParameters: Record<string, unknown>;
}