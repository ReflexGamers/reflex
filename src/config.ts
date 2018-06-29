import * as joi from 'joi';

const schema = joi.object({
  CHECK_INTERVAL_SECONDS: joi
    .number()
    .integer()
    .positive()
    .default(300),
  DISCORD_BOT_TOKEN: joi.string().required(),
  DISCORD_TARGET_GUILD_ID: joi.string().required(),
  FORUM_DATABASE_URI: joi
    .string()
    .uri({ scheme: ['mysql'] })
    .required(),
  LOG_LEVEL: joi
    .string()
    .allow(['trace', 'debug', 'info', 'warn', 'error', 'fatal'])
    .default('debug'),
});

const { error, value: configVars } = joi.validate(process.env, schema, {
  allowUnknown: true,
});
if (error) {
  throw new Error(`config validation error: ${error.message}`);
}

export const config = {
  checkIntervalSeconds: configVars.CHECK_INTERVAL_SECONDS,
  discordBotToken: configVars.DISCORD_BOT_TOKEN,
  discordTargetGuildID: configVars.DISCORD_TARGET_GUILD_ID,
  forumDatabaseURI: configVars.FORUM_DATABASE_URI,
  logLevel: configVars.LOG_LEVEL,
};
