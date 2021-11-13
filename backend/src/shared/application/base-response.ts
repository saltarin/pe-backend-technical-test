export abstract class BaseResponse<T> {
  code: number;
  error: boolean;
  message: string;
  data: T;
}
