export const Sidebar = {
  title: 'Badger Website',
  // menuClass: 'menu',
  sections: [
    {
      title: 'Main Menu',
      menu: [
        { to: '/', text: 'Home' },
        { to: '/about', text: 'About' },
        { to: '/code', text: 'Code' },
      ]
    },
    {
      details: {
        summary: 'Getting Started',
        openPath: '/getting-started/',
        menu: [
          { to: '/getting-started/installation', text: 'Installation' },
          { to: '/getting-started/setup', text: 'Basic Setup' },
        ]
      }
    },
    {
      details: {
        summary: 'Configuration',
        openPath: '/configuration/',
        menu: [
          { to: '/configuration/provider', text: 'Provider' },
          { to: '/configuration/site', text: 'Site' },
          { to: '/configuration/sidebar', text: 'Sidebar' },
          { to: '/configuration/components', text: 'Components' },
          { to: '/configuration/theme', text: 'Theme' },
        ]
      }
    },
    {
      details: {
        summary: 'Section 2',
        openPath: '/section2/',
        menu: [
          { to: '/section2/biz', code: 'Biz' },
          { to: '/section2/baz', code: 'Baz' },
          { to: '/section2/boz', code: 'Boz' },
        ]
      }
    }
  ]
}

export default Sidebar
