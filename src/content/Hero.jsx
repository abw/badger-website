import React from 'react'
import { toArray } from '@/utils/Coerce.jsx'

export const Hero = ({
  logo,
  title,
  tagline,
  overview,
  underview
}) =>
  <div className="hero grid-2 gap-12 start stack-laptop">
    <div>
      {logo}
    </div>
    <div>
      <h1>
        {title}
      </h1>
      { Boolean(tagline) &&
      <h2>{tagline}</h2>
      }
      { Boolean(overview) &&
      <div className="overview">
        { toArray(overview).map(
          (p, n) =>
            <p key={n}>{p}</p>
        )}
      </div>
      }
      { Boolean(underview) &&
      <div className="underview">
        { toArray(underview).map(
          (p, n) =>
            <p key={n}>{p}</p>
        )}
      </div>
      }
    </div>
  </div>

export default Hero