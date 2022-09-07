// LIBS
import { Router } from 'express';

// CHIELD ROUTES

import { logRouter } from './logs/logs.routes';

// ROUTES
export const routes: Router = Router();

routes.use('/logs', logRouter);
