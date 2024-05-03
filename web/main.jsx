import React    from 'react'
import ReactDOM from 'react-dom/client'
import Provider from '@/Site/Provider.jsx'
import site     from './config/site.js'
import './styles/badger-website.scss'

const pages = import.meta.glob(
  './pages/**/[a-z_]*.jsx',
  { eager: true }
)

const Sidebar = () =>
  <p>
    My sidebar
  </p>

ReactDOM
  .createRoot(
    document.getElementById('root')
  )
  .render(
    <React.StrictMode>
      <Provider
        site={site}
        pages={pages}
        Sidebar={Sidebar}
      />
    </React.StrictMode>,
  )
