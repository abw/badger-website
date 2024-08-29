import React from 'react'
import Link from '@/ui/Link.jsx'
import OSSLogo from './OSSLogo.jsx'
import { Icon, Warning } from '@abw/badger-react-ui'

const PeopleWhoShare = ({
  title='WARNING: People who share their source code do not owe you anything!',
  className,
  logo=true,
  short=false,
  freedom=true,
  children
}) =>
  <Warning headline={title} border className={className}>
    <div className="side-icon">
      { Boolean(logo) &&
      <OSSLogo className="width-8rem"/>
      }
      <div className="wide">
        <p className={short ? '' : 'large'}>
          This is <b>Open Source Software</b> and you&apos;re welcome to use it.
          But be warned that it is also <b>Opinionated and Selfish Software</b>.
        </p>
        { Boolean(short) ||
        <p>
          I wrote it for me to help me get my job done.  If you want to use it to
          help you get your job done, then that&apos;s great.  But that&apos;s
          your job, not mine, and I have no responsibility to help you do it.
          If you want to use it then you do so at your own risk.
        </p>
        }
        {children}
        { Boolean(freedom) &&
        <div className="flex space gap-2 middle surface-5 pad-a-2 border">
          <div className="small">
            Free as in <Link href="https://en.wiktionary.org/wiki/free_as_in_beer"    targetBlank text="beer"/>,
            free as in <Link href="https://en.wiktionary.org/wiki/free_as_in_speech"  targetBlank text="speech"/>,
            free as in <Link href="https://freeasinweekend.org/open-source-open-mind" targetBlank text="weekend"/>
          </div>
          <div className="text-right smaller">
            <Icon name="thumb"/>{' '}
            Thanks <Link href="https://dylanbeattie.net/" targetBlank text="Dylan"/>!
          </div>
        </div>
        }
      </div>
    </div>
  </Warning>

export default PeopleWhoShare