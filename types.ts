export interface CarbResult {
  total_carbs: number;
  icon: string;
  summary: string;
}

export enum Status {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}