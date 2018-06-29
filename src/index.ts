import { createLogger } from 'bunyan';
import { Client } from 'discord.js';

import { config } from './config';

const log = createLogger({
  level: config.logLevel,
  name: 'reflex',
});
const client = new Client();

log.info({ config }, 'application start');

client.login(config.discordBotToken);

// Ensure discord.js websocket is ready
client.on('ready', () => {
  log.info({ user: client.user.tag }, 'connected to discord');

  // setInterval takes time in miliseconds
  const reconciliationInterval: number = config.checkIntervalSeconds * 1000;
  client.setInterval(() => {
    log.info('starting member reconciliation');
  }, reconciliationInterval);
});
