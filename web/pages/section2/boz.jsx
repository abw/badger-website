import React from 'react'
import { Button } from '@abw/badger-react-ui'
import { useSite } from '@/site/Context.jsx'

export const metadata = {
  message: 'Hello World!'
}

const Boz = () => {
  const { theme, isDark, isLight, toggleTheme, setDark, setLight } = useSite()

  return (
    <div>
      <h1>The Boz Page</h1>
      <p>
        Theme is {theme}
      </p>
      <p>
        Light is {isLight ? 'true' : 'false'}.
        Dark is {isDark ? 'true' : 'false'}.
      </p>
      <div className="flex gap-2 mar-b-2">
        <Button
          onClick={toggleTheme}
          color="grey"
          text="Toggle Theme"
        />
        <Button
          onClick={setDark}
          color="dark brand"
          text="Set Dark"
        />
        <Button
          onClick={setLight}
          color="brand"
          text="Set Light"
        />
      </div>
    </div>
  )
}

export default Boz