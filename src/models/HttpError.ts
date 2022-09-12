class HttpError extends Error {
  code: number;
  constructor(message: string, errorCode: number) {
    super(message); // add a messagw property
    this.code = errorCode; // Add a "code" property
  }
}

export { HttpError };
