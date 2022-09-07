import { Client, GatewayIntentBits } from 'discord.js';
import { IErrorLog } from '../../logs/error/type';

export class DiscordServices {
  async sendMessage({ log }: { log: IErrorLog }) {
    const client = new Client({
      intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
    });

    client.on(`ready`, () => {
      // CHANGE HERE
      const channel = client.channels.cache.get(
        log.environment === 'Production'
          ? 'DISCORD CHANNEL ID'
          : 'DISCORD CHANNEL ID',
      )!;

      // @ts-ignore-next-line
      channel.send(
        '```' +
          `➖➖➖➖➖➖ [ INFO ] ➖➖➖➖➖➖\n\n` +
          `📋 Project Name: ${log.projectName} \n` +
          `🌍 Environment: ${log.environment} \n` +
          `💻 Side: ${log.side} \n` +
          `🗓️ Date: ${new Date(String(log.createdAt)).toLocaleString(
            'pt-br',
          )} \n\n` +
          `➖➖➖➖➖➖ [ STACK ] ➖➖➖➖➖➖\n` +
          `❌ ${log.errorStack}  \n\n` +
          `➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖` +
          '```',
      );
    });

    client.login(process.env.DISCORD_TOKEN);
  }
}
