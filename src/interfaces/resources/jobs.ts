export enum JobStatus {
  NA = 'NA',
  UP = 'UP',
  DOWN = 'DOWN'
}

export interface Job {
  id: number;
  jobName: string;
  jobUrl: string;
  frequency: number;
  userID: number;
  active: boolean;
  createdAt: Date;
  modifiedAt: Date;
  status: JobStatus;
}
