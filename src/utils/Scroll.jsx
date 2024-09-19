import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const scroll = (
  element,
  {
    top=0,
    left=0,
    behavior='smooth'
  } = { }
) =>
  element?.scrollTo({
    top,
    left,
    behavior
  })

export const scrollDocumentUp = () =>
  scroll(document.documentElement)

export const scrollToTop = () => {
  scrollDocumentUp()
  scroll(document.getElementById('content'))
}

export const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(
    scrollToTop,
    [pathname]
  )
  return null
}

