import React from 'react'
import Source from '@/code/Source.jsx'
import site from '@/snippets/config/site.js?raw'
import sidebar from '@/snippets/config/sidebar.js?raw'
import App from '@/snippets/App.jsx?raw'
import stylesheet from '@/snippets/stylesheet.scss?raw'

const Setup = () =>
  <div>
    <h1>Basic setup</h1>

    <h2>Site configuration</h2>
    <p>
      Create a configuration file for your site.  In this example we&apos;ll
      assume it&apos;s in a <code>config/site.js</code> file underneath your
      main <code>src</code> source directory.
    </p>
    <Source
      code={site}
      language="javascript"
      caption="src/config/site.js"
    />

    <h2>Sidebar configuration</h2>
    <p>
      Create a configuration file for the sidebar.  We&apos;ll
      assume it&apos;s in the <code>config/sidebar.js</code> file.
    </p>
    <Source
      code={sidebar}
      language="javascript"
      caption="src/config/sidebar.js"
    />

    <h2>Main application</h2>
    <p>
      Add the following to your main application file.  If you created the
      site using{' '}
      <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a>{' '}
      (which is highly recommended as all the instructions here assume that)
      then it will be something like <code>src/App.jsx</code>
    </p>
    <Source
      code={App}
      language="jsx"
      caption="src/App.jsx"
    />
    <p>
      This imports the <code>site</code> and <code>sidebar</code> configurations
      from above.  It also scans the <code>pages</code> directory to find all
      the main pages in your site.  Routes will automatically be added for these
      pages.
    </p>
    <p>
      The <code>App</code> component simply renders the <code>SiteProvider</code>{' '}
      imported from <code>@abw/badger-website</code>, passing the <code>site</code>,{' '}
      <code>sidebar</code> and <code>pages</code> as properties.  There are
      lots of additional properties you can pass in here.  More on that later.
    </p>

    <h2>Styling</h2>
    <p>
      The main <code>App.jsx</code> component also imports a stylesheet for
      the site.  In the example above this is <code>./styles/my-website.scss</code>,
      but obviously you can call it what you like and put it wherever you want.
    </p>
    <p>
      The stylesheet should look something like this.  It should define a{' '}
      <code>$brand-color</code> SASS variable as one of the color ranges from{' '}
      <a href="https://badgerpower.com/badger-css/colors/ranges" target="_blank" rel="noreferrer">Badger CSS</a>,
      along with the <code>$brand-hue</code> for that color.  You can use
      the corresponding hue from the Badger CSS color range or adjust it slightly
      to better match your desired brand color.  It then imports all the styling
      components from <code>badger-website.scss</code>.
    </p>
    <Source
      code={stylesheet}
      language="scss"
      caption="src/styles/my-website.scss"
    />

    <h2>Take it for a spin</h2>
    <p>
      You should then be able to start up the development server from the
      command line by running <code>pnpm dev</code> (or the equivalent for
      whatever package manager you&apos;re using).
    </p>
  </div>

export default Setup