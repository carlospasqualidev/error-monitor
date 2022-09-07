// TYPES
import { IServerMessage } from './types';

export class ServerMessage {
  public readonly statusCode: number;

  public readonly message: string;

  constructor({ statusCode, message }: IServerMessage) {
    this.statusCode = statusCode;

    this.message = message;
  }
}
