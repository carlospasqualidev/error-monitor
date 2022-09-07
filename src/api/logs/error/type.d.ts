export interface IErrorLog {
  id?: string;
  projectName: string;
  environment: string;
  side: string;
  errorStack: string;
  createdAt?: Date;
}
