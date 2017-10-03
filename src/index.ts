import { createLogger } from 'bunyan'

const log = createLogger({
  level: 'debug',
  name: 'role-manager',
})

log.info({ foo: 'bar' }, 'application start')
log.debug('checking config')
