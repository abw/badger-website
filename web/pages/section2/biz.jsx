import React from 'react'
import { Button } from '@abw/badger-react-ui'
import Section from '@/page/Section.jsx'
import Heading from '@/page/Heading.jsx'
import Toc from '@/page/Toc.jsx'

export const metadata = {
  prevNext: false,
}

const Biz = () =>
  <div>
    <h1>The Biz Page</h1>
    <Toc/>
    <div className="flex gap-2 mar-b-2">
      <Button color="brand" text="Brand Button"/>
      <a href="/" className="button">Link Button</a>
      <a href="/" className="brand button">Brand Link Button</a>
    </div>
    <Heading text="The First Bit"/>
    <Section title="Section One">
      This is section One
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi enim itaque eveniet quasi nesciunt perferendis repellat at ab suscipit repellendus asperiores repudiandae accusantium aliquid alias non, rem esse laudantium quisquam!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi enim itaque eveniet quasi nesciunt perferendis repellat at ab suscipit repellendus asperiores repudiandae accusantium aliquid alias non, rem esse laudantium quisquam!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi enim itaque eveniet quasi nesciunt perferendis repellat at ab suscipit repellendus asperiores repudiandae accusantium aliquid alias non, rem esse laudantium quisquam!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi enim itaque eveniet quasi nesciunt perferendis repellat at ab suscipit repellendus asperiores repudiandae accusantium aliquid alias non, rem esse laudantium quisquam!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi enim itaque eveniet quasi nesciunt perferendis repellat at ab suscipit repellendus asperiores repudiandae accusantium aliquid alias non, rem esse laudantium quisquam!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi enim itaque eveniet quasi nesciunt perferendis repellat at ab suscipit repellendus asperiores repudiandae accusantium aliquid alias non, rem esse laudantium quisquam!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi enim itaque eveniet quasi nesciunt perferendis repellat at ab suscipit repellendus asperiores repudiandae accusantium aliquid alias non, rem esse laudantium quisquam!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi enim itaque eveniet quasi nesciunt perferendis repellat at ab suscipit repellendus asperiores repudiandae accusantium aliquid alias non, rem esse laudantium quisquam!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi enim itaque eveniet quasi nesciunt perferendis repellat at ab suscipit repellendus asperiores repudiandae accusantium aliquid alias non, rem esse laudantium quisquam!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi enim itaque eveniet quasi nesciunt perferendis repellat at ab suscipit repellendus asperiores repudiandae accusantium aliquid alias non, rem esse laudantium quisquam!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi enim itaque eveniet quasi nesciunt perferendis repellat at ab suscipit repellendus asperiores repudiandae accusantium aliquid alias non, rem esse laudantium quisquam!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi enim itaque eveniet quasi nesciunt perferendis repellat at ab suscipit repellendus asperiores repudiandae accusantium aliquid alias non, rem esse laudantium quisquam!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi enim itaque eveniet quasi nesciunt perferendis repellat at ab suscipit repellendus asperiores repudiandae accusantium aliquid alias non, rem esse laudantium quisquam!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi enim itaque eveniet quasi nesciunt perferendis repellat at ab suscipit repellendus asperiores repudiandae accusantium aliquid alias non, rem esse laudantium quisquam!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi enim itaque eveniet quasi nesciunt perferendis repellat at ab suscipit repellendus asperiores repudiandae accusantium aliquid alias non, rem esse laudantium quisquam!</p>

    </Section>
    <Heading code="bit2"/>
    <Section title="Section Two">
      This is section Two
    </Section>
    <Section code="Section Three">
      This is section Two
    </Section>
  </div>

export default Biz