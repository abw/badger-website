import { now } from '@abw/badger-timestamp'

// Not used - moved into ../site/Context
export const defaultSite = {
  version:  '0.0.1',
  title:    'Badger Website',
  date:     now().date()
}
