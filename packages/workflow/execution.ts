import { ExecutionStatus } from "./state";

export interface WorkflowRun {
    id: string,
    workflowName: string,
    workflowVersion: number,
    status: ExecutionStatus,
    startAt?: Date,
    completeAt?: Date
}

export interface TaskExecution {
  id: string;
  workflowRunId: string;
  taskReferenceName: string;
  taskType: string;
  status: ExecutionStatus;
  input: Record<string, unknown>;
  output: Record<string, unknown>;
  startAt?: Date;
  completedAt?: Date;
  attempt: TaskAttempt;
}

export interface TaskAttempt {
  id: string;
  taskExectionId: string;
  attempt: number;
  status: ExecutionStatus;
  startedAt: Date;
  completedAt?: Date;
  error?: {
    code?: string;
    message: string;
  };
}