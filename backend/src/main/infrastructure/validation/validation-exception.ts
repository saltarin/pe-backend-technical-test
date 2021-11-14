export class ValidationException extends Error {
  public extra?: Record<string, any>;
  constructor(message: string, extra?: Record<string, any>) {
    super(message);
    this.extra = extra;
  }
}
