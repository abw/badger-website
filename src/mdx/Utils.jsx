import { isObject } from '@abw/badger-utils'

export const expandCodeChildren = children => {
  // Coerce children to text
  if (isObject(children) && children.type === 'code') {
    return { code: children.props.children }
  }
  else {
    return { title: children }
  }
}
