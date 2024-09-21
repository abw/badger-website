import { isString, isObject, isArray } from '@abw/badger-utils'
import { toArray } from '@/utils/Coerce.jsx'
import { idSafe } from '@/utils/Misc.jsx'
import { fail } from '@abw/badger-utils'

export const expandCodeChildren = children => {
  // Coerce children to text
  if (isString(children)) {
    return { title: children }
  }
  else if (isObject(children) && children.type === 'code') {
    return { code: children.props.children }
  }
  else {
    const text = expandChildrenToText(children)
    const id = idSafe(text)
    return {
      children,
      id,
      error: [ 'Cannot handle mixed content in MDX heading', ...children]
    }
  }
}

export const expandChildrenToText = children =>
  toArray(children)
    .map(expandChildToText)
    .join('')

export const expandChildToText = child => {
  if (isString(child)) {
    return child
  }
  else if (isObject(child) && child.props.children) {
    return expandChildrenToText(child.props.children)
  }
  else if (isArray(child)) {
    return expandChildrenToText(child)
  }
  else {
    console.log(`MDX child:`, child)
    fail("Can't expand MDX children to text")
  }
}
