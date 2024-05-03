import process from 'node:process'
import { now } from '@abw/badger-timestamp'

const VITE_SITE_VERSION = JSON.stringify(process.env.npm_package_version)
const VITE_SITE_DATE    = JSON.stringify(now().date())
const VITE_SITE_TITLE   = '"Badger Website"'

export default {
  VITE_SITE_VERSION,
  VITE_SITE_DATE,
  VITE_SITE_TITLE
}
