declare module '*.svg' {
  import * as React from 'react'
  export const ReactComponent: React.VFC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}
