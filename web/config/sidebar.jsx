export const Sidebar = {
  title: 'Badger Website',
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
          { to: '/section2/biz', text: 'Biz' },
          { to: '/section2/baz', text: 'Baz' },
          { to: '/section2/boz', text: 'Boz' },
        ]
      }
    }
  ]
}

export default Sidebar
