// PRISMA
import { prisma } from '../../../../utils/prismaClient';
import { IErrorLog } from '../type';

// TYPES

export class LogsServices {
  async create({ projectName, environment, errorStack, side }: IErrorLog) {
    return prisma.errorLogs.create({
      data: {
        projectName,
        environment,
        side,
        errorStack,
      },
    });
  }
}
