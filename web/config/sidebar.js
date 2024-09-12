export const Sidebar = {
  sections: [
    /*
    {
      title: 'Main Menu',
      menu: [
        { to: '/', text: 'Home' },
        { to: '/about', text: 'About' },
        { to: '/code', text: 'Code' },
      ]
    },
    */
    {
      title: 'Getting Started',
      openPath: '/getting-started/',
      revealable: true,
      menu: [
        { to: '/getting-started/installation', text: 'Installation' },
        { to: '/getting-started/setup',        text: 'Basic Setup' },
      ]
    },
    {
      title: 'Configuration',
      revealable: true,
      openPath: '/configuration/',
      menu: [
        { to: '/configuration/site-provider', code: 'SiteProvider' },
        { to: '/configuration/pages',         code: 'pages' },
        { to: '/configuration/site',          code: 'site' },
        { to: '/configuration/sidebar',       code: 'sidebar' },
        { to: '/configuration/theme',         code: 'theme' },
        { to: '/configuration/components',    text: 'Components' },
      ]
    },
    {
      title: 'Pages',
      revealable: true,
      openPath: '/pages/',
      menu: [
        { to: '/pages/router',    text: 'Page Router' },
        { to: '/pages/jsx',       text: 'JSX Pages' },
        { to: '/pages/mdx',       text: 'MDX Pages' },
        { to: '/pages/metadata',  text: 'Page Metadata' },
      ]
    },
    {
      title: 'Context',
      revealable: true,
      openPath: '/context/',
      menu: [
        { to: '/context/use-site', code: 'useSite' },
        { to: '/context/site-consumer',    code: 'SiteConsumer' },
        { to: '/context/metadata',    code: 'metadata' },
        // { to: '/context/provider',    text: 'Provider' },
      ]
    },
    {
      title: 'Content',
      openPath: '/content/',
      revealable: true,
      menu: [
        // { title: 'Site Components' },
        { to: '/content/author',           code: 'Author' },
        { to: '/content/badgerpower',      code: 'BadgerPower' },
        { to: '/content/badgerpowered',    code: 'BadgerPowered' },
        { to: '/content/copyright',        code: 'Copyright' },
        { to: '/content/footer',           code: 'Footer' },
        { to: '/content/header',           code: 'Header' },
        { to: '/content/hero',             code: 'Hero' },
        { to: '/content/oss-logo',         code: 'OSSLogo' },
        { to: '/content/people-who-share', code: 'PeopleWhoShare' },
        { to: '/content/release',          code: 'Release' },
        { to: '/content/repository',       code: 'Repository' },
        { to: '/content/split',            code: 'Split' },
      ]
    },
    {
      title: 'Code Examples',
      openPath: '/code/',
      revealable: true,
      menu: [
        { to: '/code/source',                code: 'Source' },
        { to: '/code/snippet',               code: 'Snippet' },
        { to: '/code/example',               code: 'Example' },
      ]
    },
    {
      title: 'Section 2',
      openPath: '/section2/',
      revealable: true,
      menu: [
        { to: '/section2/biz', code: 'Biz' },
        { to: '/section2/baz', code: 'Baz' },
        { to: '/section2/boz', code: 'Boz' },
        { to: '/section2/hello', code: 'Hello' },
        /*
        {
          title: 'Nested Menu #1',
          menu: [
            { to: '/debug/properties/status',       code: 'status'      },
            { to: '/debug/properties/values',       code: 'values'      },
          ]
        },
        {
          title: 'Nested Menu #2',
          menu: [
            { to: '/section2/wam', text: 'Wam' },
            { to: '/section2/bam', text: 'Bam' },
            {
              title: 'Level 2 Nested Menu',
              menu: [
                { to: '/debug/properties/thank',       text: 'thank'      },
                { to: '/debug/properties/you',         text: 'you'      },
                { to: '/debug/properties/maam',        text: "Ma'am"   },
              ]
            },
          ]
        }
        */
      ]
    }
  ]
}

export default Sidebar
