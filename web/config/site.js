// These constants are replaced by Vite.  See the vite.defs.js file in the
// root directory where they are defined.  They are included as the define
// options in vite.config.js

// TODO: most of these can come out of the package.json

/* eslint-disable no-undef */
export const site = {
  version:    VITE_SITE_VERSION,
  date:       VITE_SITE_DATE,
  title:      VITE_SITE_TITLE,
  copyright:  2024,
  author:     'Andy Wardley',
  authorLink: 'https://github.com/abw',
  repository: 'https://github.com/abw/badger-website',
  repoIcon:   'github',
  badgerpower: true,
  basename:    import.meta.env.BASE_URL,
  debugRouter: false,
  debugPages:  false,
}

export default site