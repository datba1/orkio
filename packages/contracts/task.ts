export interface ExectuionTaskMessage {
  jobId: string;
  workflowRunId: string;
  taskExecutionId: string;
  taskReferenceName: string;
  taskType: string;
  input: Record<string, unknown>;
}
