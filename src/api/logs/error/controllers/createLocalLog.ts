// TYPES
import { IErrorLog } from '../type';

// CLASS
import { LogsServices } from '../services/logsServices';
import { DiscordServices } from '../../../discordMonitor/services/discordServices';

const logServices = new LogsServices();
const discordServices = new DiscordServices();

export async function createLocalLog({
  projectName,
  environment,
  side,
  errorStack,
}: IErrorLog) {
  const log = await logServices.create({
    projectName,
    environment,
    side,
    errorStack,
  });

  discordServices.sendMessage({ log });
}
