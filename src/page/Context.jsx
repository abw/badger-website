import { Generator } from '@abw/react-context'
import { useSite } from '@/site/Context.jsx'

const Context = ({ render, page }) => {
  const { addPageToc, getPageToc } = useSite()

  const addToc = item => {
    // console.log(`adding TOC item "${item.title || item.code}" to page TOC`)
    addPageToc(
      page.uri,
      item.id,
      item
    )
  }

  const getToc = () => getPageToc(page.uri)

  return render({
    addToc, getToc
  })
}

export const PageContext = Generator(Context)

export const {
  Provider: PageProvider,
  Consumer: PageConsumer,
  Children: PageChildren,
  Use:      usePage
} = PageContext

export default PageContext
