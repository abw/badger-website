const sidebar = {
  title: 'Sidebar Title',
  sections: [
    {
      title: 'Main Menu',
      menu: [
        { to: '/', text: 'Home' },
        { to: '/about', text: 'About' },
      ]
    },
    {
      title: 'Example Section',
      openPath: '/section/',
      revealable: true,
      menu: [
        { to: '/section/foo', text: 'Foo' },
        { to: '/section/bar', text: 'Bar' },
      ]
    },
  ]
}

export default sidebar