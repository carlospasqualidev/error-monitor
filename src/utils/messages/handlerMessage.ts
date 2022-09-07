// TYPES
import { NextFunction, Request, Response } from 'express';

// CLASS
import { ServerMessage } from './serverMessage';

// Functions
import { createLocalLog } from '../../api/logs/error/controllers/createLocalLog';

export const handlerMessage = (
  err: Error,
  _req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars
  _next: NextFunction,
) => {
  if (err instanceof ServerMessage) {
    return res.status(err.statusCode).json({
      ServerMessage: { message: err.message },
    });
  }

  createLocalLog({
    projectName: 'AdaLogs',
    environment: 'Production',
    side: 'Server',
    errorStack: err.stack!,
  });

  // eslint-disable-next-line no-console
  console.log('\n\n\n ❌ Error ❌ \n\n\n', err.stack, '\n\n\n');

  return res.status(500).json({
    ServerMessage: {
      message: `Ops, estamos tendo problemas, tente novamente. `,
    },
  });
};
