import React from 'react'
import Link from '@/ui/Link.jsx'

const Index = () =>
  <div className="flow">
    <h1>Hello World!</h1>
    <p>
      This is the main index page.
    </p>
    <ul>
      <li><Link to="/about" text="About"/></li>
    </ul>

    <h4>Section 1</h4>
    <ul>
      <li><Link to="/section1/foo" text="Foo"/></li>
      <li><Link to="/section1/bar" text="Bar"/></li>
    </ul>

    <h4>Section 2</h4>
    <ul>
      <li><Link to="/section2/biz" text="Biz"/></li>
      <li><Link to="/section2/baz" text="Baz"/></li>
      <li><Link to="/section2/boz" text="Boz"/></li>
    </ul>
  </div>

export default Index