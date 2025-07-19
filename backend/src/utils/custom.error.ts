export default class CustomError extends Error {
	public statusCode: number;
	public code: string;

	constructor(statusCode: number, code: string, message: string) {
		super(message);
		this.statusCode = statusCode;
		this.code = code;
		this.message = message;

		// Maintains proper stack trace for where our error was thrown (only available on V8)
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, this.constructor);
		}
	}

	static badRequest(msg: string) {
		return new CustomError(400,"BAD_REQUEST", msg);
	}

	static unauthorized(msg: string) {
		return new CustomError(401,"UNAUTHORIZED", msg);
	}

	static notFound(msg: string) {
		return new CustomError(404, "NOT_FOUND",msg);
	}

	static conflict(msg: string) {
		return new CustomError(409,"CONFLICT", msg);
	}

	static internalServerError(msg: string = 'Internal Server Error') {
		return new CustomError(500,"INTERNAL_SERVER_ERROR	", msg);
	}
}