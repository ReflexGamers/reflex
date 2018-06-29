import { createLogger } from 'bunyan';
import { Client } from 'discord.js';

import { config } from './config';

const log = createLogger({
  level: config.logLevel,
  name: 'reflex',
});
const client = new Client();

log.info({ config }, 'application start');

// Ensure discord.js websocket is ready
client.on('ready', () => {
  log.info({ user: client.user.tag }, 'connected to discord');

  // setInterval takes time in miliseconds
  const reconciliationInterval: number = config.checkIntervalSeconds * 1000;
  client.setInterval(reconcileMembers, reconciliationInterval);
});

function reconcileMembers() {
  log.info('starting member reconciliation');

  const guilds = client.guilds.array();
  log.debug(
    {
      guilds: guilds.map((guild) => {
        return { name: guild.name, id: guild.id };
      }),
    },
    'guilds connected to',
  );
}

// Bring bot online after setting up handlers
client.login(config.discordBotToken);
