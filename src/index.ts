import { createLogger } from 'bunyan'

const log = createLogger({
  name: 'role-manager',
  level: 'debug',
})

log.info({ foo: 'bar' }, 'application start')
log.debug('checking config')
