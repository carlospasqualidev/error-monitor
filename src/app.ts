// LIBS
import express from 'express';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import 'express-async-errors';
import cors from 'cors';
import swaggerFile from './docs/swagger.json';

// ROUTES
import { routes } from './api/index';

// CLASS
import { handlerMessage } from './utils/messages/handlerMessage';
import { corsOptions } from './middlewares/corsOptions';

export class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.router();
    this.secure();
    this.docs();
    this.appError();
  }

  middleware() {
    this.server.use(express.json());
  }

  router() {
    this.server.use(cors(corsOptions));
    this.server.use('/api', routes);
  }

  secure() {
    this.server.use(helmet());
  }

  docs() {
    this.server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
  }

  appError() {
    this.server.use(handlerMessage);
  }
}
