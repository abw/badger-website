export const Sidebar = {
  sections: [
    {
      title: 'Main Menu',
      menu: [
        { to: '/', text: 'Home' },
        { to: '/about', text: 'About' },
        { to: '/code', text: 'Code' },
      ]
    },
    /*
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
      title: 'Components',
      openPath: '/components/',
      revealable: true,
      menu: [
        { to: '/components/author',           code: 'Author' },
        { to: '/components/copyright',        code: 'Copyright' },
        { to: '/components/hero',             code: 'Hero' },
        { to: '/components/oss-logo',         code: 'OSSLogo' },
        { to: '/components/people-who-share', code: 'PeopleWhoShare' },
        { to: '/components/release',          code: 'Release' },
        { to: '/components/repository',       code: 'Repository' },
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
      ]
    }
  ]
}

export default Sidebar
