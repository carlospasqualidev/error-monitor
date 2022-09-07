// TYPES
import { IValidator } from './types';

// SERVICES
import { ServerMessage } from '../messages/serverMessage';

export class Validator {
  notNull(Vars: IValidator[]) {
    for (const variable of Vars) {
      if (!variable.variable) {
        throw new ServerMessage({
          statusCode: 400,
          message: `Verifique a informação: ${variable.label} e tente novamente.`,
        });
      }
    }
  }

  cannotExists(Vars: IValidator[]) {
    for (const variable of Vars) {
      if (variable.variable) {
        throw new ServerMessage({
          statusCode: 400,
          message: `A informação: ${variable.label} já existe na base de dados.`,
        });
      }
    }
  }
}
