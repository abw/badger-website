import { useSite } from '@/site/Context.jsx'
import { scroll, scrollDocumentUp } from '@/utils/Scroll.jsx'

const TocClick = item => {
  const { contentRef, scrollOffset = 24 } = useSite()
  return () => {
    scrollDocumentUp()
    scroll(
      contentRef.current,
      { top: item.ref.current?.offsetTop - scrollOffset }
    )
  }
}

export default TocClick