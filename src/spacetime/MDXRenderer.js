/** @jsxImportSource theme-ui */
import React, {
  lazy,
  Component,
  Suspense
} from 'react'
import { importMDX } from 'mdx.macro'


const Content = lazy(() => importMDX('./Documentation.mdx'))

export default function MDXLayout() {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <Content/>
      </Suspense>
    </div>
  )
}

const Loading = () => {
  return (
    <div>
      Loading...
    </div>
  )
}
