# Koa Error Handler
A class for creating Koa middlewares that catch downstream errors.

## Installation
Install the package with NPM:

```
npm install @donutteam/koa-error-handler
```

## Usage
To use this class, simply instantiate an instance and add it to your Koa stack:

```js
import Koa from "koa";

import { ErrorHandlerMiddleware } from "@donutteam/koa-error-handler";

const app = new Koa();

const errorHandlerMiddleware = new ErrorHandlerMiddleware();

// Be sure to add the execute function on the instance
// and NOT the instance itself
app.use(errorHandlerMiddleware.execute);
```

## License
[MIT](https://github.com/donutteam/koa-error-handler/blob/main/LICENSE.md)