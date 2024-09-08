const t=`const site = {
  title:      'My Web Site',
  author:     'Andy Wardley',
  authorLink: 'https://github.com/abw',
  repository: 'https://github.com/abw/my-web-site',
  version:    '1.2.3',
  date:       '2024-08-26',
  copyright:  2024,
  badgerpower: true,
  // Add this if your site has a URL base defined in your Vite config file
  basename:    import.meta.env.BASE_URL
}

const App = () =>
  <SiteProvider
    site={site}
    // ...etc...
  />
`;export{t as default};
