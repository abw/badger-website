import { useRef, useEffect } from 'react'
import { usePage } from '@/page/Context.jsx'
import { idSafe } from '@/utils/Misc.jsx'

const useToc = ({
  code,
  text=code,
  title=text,
  id,
  ...props
}) => {
  const { addToc } = usePage()
  const ref = useRef()
  id ||= idSafe(title)

  useEffect(
    () => {
      addToc({ id, code, title, ref, ...props })
    },
    [title]
  )

  return { id, code, title, ref }
}

export default useToc
