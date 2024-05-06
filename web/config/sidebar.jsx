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
        summary: 'Section 1',
        openPath: '/section1/',
        menu: [
          { to: '/section1/foo', text: 'Foo' },
          { to: '/section1/bar', text: 'Bar' },
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
