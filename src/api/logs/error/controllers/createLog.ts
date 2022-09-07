// TYPES
import { Request, Response } from 'express';

// CLASS
import { DiscordServices } from '../../../discordMonitor/services/discordServices';
import { Validator } from '../../../../utils/validator/validator';
import { LogsServices } from '../services/logsServices';

const logServices = new LogsServices();
const discordServices = new DiscordServices();
const validator = new Validator();

export async function createLog(req: Request, res: Response) {
  const { projectName, environment, errorStack, side } = req.body;

  validator.notNull([
    { label: 'Project Name', variable: projectName },
    { label: 'Environment', variable: environment },
    { label: 'Error Stack', variable: errorStack },
    { label: 'Side', variable: side },
  ]);

  const log = await logServices.create({
    projectName,
    environment,
    side,
    errorStack,
  });

  discordServices.sendMessage({ log });

  return res.sendStatus(200);
}
