import type { Middleware } from "koa";
/** A class for creating Koa middlewares that catch downstream errors. */
export declare class ErrorHandlerMiddleware {
    /** The middleware function. */
    execute: Middleware;
    /**
     * Constructs a new ErrorHandlerMiddleware.
     *
     * @author Loren Goodwin
     */
    constructor();
}
