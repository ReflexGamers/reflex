import { config } from './config'

import { createLogger } from 'bunyan'

const log = createLogger({
  level: config.logLevel,
  name: 'reflex',
})

log.info({ config }, 'application start')
