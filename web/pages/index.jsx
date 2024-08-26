import React          from 'react'
// import Link           from '@/ui/Link.jsx'
import Badger         from '@/svg/badger-website.svg?react'
import BadgerCSS      from '@/svg/badger-css.svg?react'
import BadgerForm     from '@/svg/badger-form.svg?react'
import BadgerIcon     from '@/svg/badger-icon.svg?react'
// import BadgerColor    from '@/svg/badger-color.svg?react'
import BadgerReactUI  from '@/svg/badger-react-ui.svg?react'
import OSS            from '../svg/oss.svg?react'
import { Tiles, Warning }      from '@abw/badger-react-ui'

export const Index = () =>
  <div>
    <div className="grid-2 gap-12 start stack-laptop">
      <div>
        <Badger className="brw-logo"/>
      </div>
      <div>
        <h1 className="mar-v-none">
          Badger Website Builder
        </h1>
        <h2 className="mar-t-none small mar-b-2">
          Powered by Badgers
        </h2>
        <p className="larger">
          Badger Website is a framework / template which I use to generate the
          documentation websites for various other badger projects.
        </p>
      </div>
    </div>
    <h2>See it in action</h2>
    <p>
      These are some of the site that have been built using this framework.
    </p>
    <Tiles gap="4" minWidth="10rem">
      <CardLink href="https://badgerpower.com/badger-react-ui/" Picture={BadgerReactUI}/>
      <CardLink href="https://badgerpower.com/badger-form/" Picture={BadgerForm}/>
      <CardLink href="https://badgerpower.com/badger-css/" Picture={BadgerCSS}/>
      <CardLink href="https://badgerpower.com/badger-icon/" Picture={BadgerIcon}/>
      {/* <CardLink href="https://abw.github.io/badger-color/" Picture={BadgerColor}/> */}
    </Tiles>
    <Warning title="Warning!" border shadow="2" icon="exclamation" className="mar-t-8">
      <p>
        This is Open Source Software and you&apos;re welcome to use it.
        But be warned that it is also Opinionated and Selfish Software.
        I wrote it for me and if you want to use it then you do so at your
        own risk.  You will need to get your hands dirty.  It&apos;s still
        very much a work in progress. It&apos;s not complete, not well
        documented and is likely to change without notice.
      </p>
    </Warning>
    <div className="flex center mar-t-12 mar-b-4">
      <OSS className="width-10rem"/>
    </div>
  </div>

const CardLink = ({ href, Picture }) =>
  <a href={href} className="card surface hover border bdr-2 shadow-1 pad-a-4" target="_blank" rel="noreferrer">
    <Picture/>
  </a>

export default Index