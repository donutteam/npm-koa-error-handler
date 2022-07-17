//
// Error Handler Middleware
//

/**
 * A class for creating Koa middlewares that catch downstream errors.
 */
export class ErrorHandlerMiddleware
{
	/**
	 * The middleware function.
	 * 
	 * @type {import("koa").Middleware}
	 */
	execute;

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

				context.response.type = "text";
				context.response.body = "An error occured but was caught by the server's internal error handler.";
			}
		};
	}
}