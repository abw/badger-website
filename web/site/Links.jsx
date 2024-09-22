import React from 'react'
import { Link } from '@/ui/Link.jsx'

export const AuthorLink = () =>
  <Link to="/site/author" code="Author"/>

export const BadgerPowerLink = () =>
  <Link to="/site/badgerpower" code="BadgerPower"/>

export const BadgerPoweredLink = () =>
  <Link to="/site/badgerpowered" code="BadgerPowered"/>

export const CopyrightLink = () =>
  <Link to="/site/copyright" code="Copyright"/>

export const FooterLink = () =>
  <Link to="/site/footer" code="Footer"/>

export const HeaderLink = () =>
  <Link to="/site/header" code="Header"/>

export const ReleaseLink = () =>
  <Link to="/site/release" code="Release"/>

export const RepositoryLink = () =>
  <Link to="/site/repository" code="Repository"/>

export const HeadingLink = () =>
  <Link to="/page/heading" code="Heading"/>

export const SubHeadingLink = () =>
  <Link to="/page/sub-heading" code="SubHeading"/>

export const SectionLink = () =>
  <Link to="/page/section" code="Section"/>

export const PageTocLink = () =>
  <Link to="/page/toc" code="PageToc"/>

export const BadgerPowerSiteLink = ({ path='', text='Badger Power' }) =>
  <Link href={`https://badgerpower.com/${path}`} text={text} targetBlank />

export const BadgerCSSLink = ({ path='', text='Badger CSS' }) =>
  <Link href={`https://badgerpower.com/badger-css/${path}`} text={text} targetBlank />

export const BadgerFormLink = ({ path='', text='Badger Form' }) =>
  <Link href={`https://badgerpower.com/badger-form/${path}`} text={text} targetBlank/>

export const BadgerReactUILink = ({ path='', text='Badger React UI'}) =>
  <Link href={`https://badgerpower.com/badger-react-ui/${path}`} text={text} targetBlank/>

export const ReactNightAndDayLink = ({ path='', text='React Night and Day' }) =>
  <Link href={`https://badgerpower.com/react-night-and-day/${path}`} text={text} targetBlank/>

export const ViteLink = ({ path='', text='Vite' }) =>
  <Link href={`https://vitejs.dev/${path}`} text={text} targetBlank/>
