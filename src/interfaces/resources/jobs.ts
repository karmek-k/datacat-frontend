export interface Job {
  id: number;
  jobName: string;
  jobUrl: string;
  frequency: number;
  userID: number;
  active: boolean;
  createdAt: Date;
  modifiedAt: Date;
}
