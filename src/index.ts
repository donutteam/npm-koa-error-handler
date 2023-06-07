//
// Imports
//

import type { Middleware } from "koa";

//
// Error Handler Middleware
//

/** A class for creating Koa middlewares that catch downstream errors. */
export class ErrorHandlerMiddleware
{
	/** The middleware function. */
	execute : Middleware;

	/**
	 * Constructs a new ErrorHandlerMiddleware.
	 * 
	 * @author Loren Goodwin
	 */
	constructor()
	{
		this.execute = async (context, next) =>
		{
			try
			{
				await next();
			}
			catch(error)
			{
				console.error("[ErrorHandlerMiddleware] An error occured:", error);

				context.response.status = 500;
				context.response.type = "text";
				context.response.body = "An error occured but was caught by the server's internal error handler.";
			}
		};
	}
}