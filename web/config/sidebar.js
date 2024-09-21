const GettingStarted = {
  title: 'Getting Started',
  openPath: '/getting-started/',
  revealable: true,
  menu: [
    { to: '/getting-started/installation', text: 'Installation' },
    { to: '/getting-started/setup',        text: 'Basic Setup' },
  ]
}

const Configuration = {
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
}

const Pages = {
  title: 'Pages',
  revealable: true,
  openPath: '/pages/',
  menu: [
    { to: '/pages/router',    text: 'Page Router' },
    { to: '/pages/jsx',       text: 'JSX Pages' },
    { to: '/pages/mdx',       text: 'MDX Pages' },
    { to: '/pages/metadata',  text: 'Page Metadata' },
  ]
}

const Context = {
  title: 'Context',
  revealable: true,
  openPath: '/context/',
  menu: [
    { to: '/context/use-site', code: 'useSite' },
    { to: '/context/site-consumer',    code: 'SiteConsumer' },
    { to: '/context/metadata',    code: 'metadata' },
    // { to: '/context/provider',    text: 'Provider' },
  ]
}

const SiteContent = {
  title: 'Site Content',
  openPath: '/site/',
  revealable: true,
  menu: [
    { to: '/site/author',           code: 'Author' },
    { to: '/site/badgerpower',      code: 'BadgerPower' },
    { to: '/site/badgerpowered',    code: 'BadgerPowered' },
    { to: '/site/copyright',        code: 'Copyright' },
    { to: '/site/footer',           code: 'Footer' },
    { to: '/site/header',           code: 'Header' },
    { to: '/site/hero',             code: 'Hero' },
    { to: '/site/oss-logo',         code: 'OSSLogo' },
    { to: '/site/people-who-share', code: 'PeopleWhoShare' },
    { to: '/site/release',          code: 'Release' },
    { to: '/site/repository',       code: 'Repository' },
  ]
}

const PageContent = {
  title: 'Page Content',
  openPath: '/page/',
  revealable: true,
  menu: [
    { to: '/page/heading',          code: 'Heading' },
    { to: '/page/sub-heading',      code: 'SubHeading' },
    { to: '/page/section',          code: 'Section' },
    { to: '/page/sub-section',      code: 'SubSection' },
    { to: '/page/toc',              code: 'PageToc' },
  ]
}

const Utilities = {
  title: 'Utilities',
  openPath: '/utilities/',
  revealable: true,
  menu: [
    { to: '/utilities/link',             code: 'Link' },
    { to: '/utilities/loading',          code: 'Loading' },
    { to: '/utilities/propstable',       code: 'PropsTable' },
    { to: '/utilities/split',            code: 'Split' },
  ]
}

export const Code = {
  title: 'Code Examples',
  openPath: '/code/',
  revealable: true,
  menu: [
    // { to: '/code/',                code: 'Overview', exact: true },
    { to: '/code/source',                code: 'Source' },
    { to: '/code/snippet',               code: 'Snippet' },
    { to: '/code/example',               code: 'Example' },
  ]
}

const DevTests = {
  title: 'Dev Tests',
  openPath: '/dev-tests/',
  revealable: true,
  menu: [
    { to: '/dev-tests/',                 text: 'Introduction', exact: true },
    { to: '/dev-tests/heading-section',  text: 'Heading/Section' },
    { to: '/dev-tests/code-blocks',      text: 'Code Blocks' },
    { to: '/dev-tests/example-file',     text: 'Example File' },
    { to: '/dev-tests/theme-toggle',     text: 'Theme Toggle' },
    { to: '/dev-tests/subdir',           text: 'Sub-Directory' },
    { to: '/dev-tests/toc',              text: 'MDX Toc' },
    /*
    {
      title: 'Nested Menu #1',
      menu: [
        { to: '/debug/properties/status',       code: 'status'      },
        { to: '/debug/properties/values',       code: 'values'      },
      ]
    },
    */
    /*
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

export const Sidebar = {
  sections: [
    GettingStarted,
    Configuration,
    Pages,
    Context,
    SiteContent,
    PageContent,
    Utilities,
    Code,
    ...(
      import.meta.env.DEV
        ? [ DevTests ]
        : [ ]
    )
  ]
}


export default Sidebar
