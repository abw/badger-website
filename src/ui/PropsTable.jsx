import React from 'react'
import { codify } from '@/utils/Markup.jsx'
import { isString } from '@abw/badger-utils'
import { isArray } from '@abw/badger-utils'

export const PropsTable = ({ items }) =>
  <table className="props-table wide shaded striped celled baseline">
    <thead>
      <tr>
        <th>Property</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      { items.map(
        ([name, def, desc]) =>
          <PropRow key={name} name={name} defaultValue={def} description={desc}/>
      )}
    </tbody>
  </table>

const PropRow = ({name, defaultValue, description}) =>
  <tr>
    <td className="font-mono">{name}</td>
    <td className="font-mono">{defaultValue}</td>
    { isString(description)
      ? <td dangerouslySetInnerHTML={{__html: codify(description)}}/>
      : isArray(description)
        ? <td>
            { description.map(
              (para, n) =>
                <p key={n} dangerouslySetInnerHTML={{__html: codify(para)}}/>
            )}
          </td>
        : <td>{description}</td>
    }
  </tr>

export default PropsTable