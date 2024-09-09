import React from 'react'
import OSS   from '@/svg/oss.svg?react'

export const OSSLogo = ({
  className='',
  style
}) =>
  <OSS
    style={style}
    className={`oss-logo ${className}`}
  />

export default OSSLogo