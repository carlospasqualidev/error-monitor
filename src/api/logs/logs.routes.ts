// LIBS
import { Router } from 'express';

// FUNCTIONS
import { createLog } from './error/controllers/createLog';

// ROUTES
export const logRouter = Router();

logRouter.post('/create', createLog);
