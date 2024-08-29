import React    from 'react'
import HeroCode from './_examples/UseHero.jsx'
import HeroSrc  from './_examples/UseHero.jsx?raw'
import Example  from '@/code/Example.jsx'

const Hero = () =>
  <div>
    <h1>Hero</h1>
    <p>
      The <code>Hero</code> component is for rendering a hero block, typically
      at the start of the home page.
    </p>
    <Example
      Component={HeroCode}
      code={HeroSrc}
    />
  </div>

export default Hero