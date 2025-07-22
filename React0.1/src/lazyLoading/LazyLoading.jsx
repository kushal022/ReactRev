import React from 'react'
import { Suspense } from 'react'
const LazyComp1 = React.lazy(()=> import('./Comp1'))
const LazyComp2 = React.lazy(()=> import('./Comp2'))

const LazyLoading = () => {
  return (
    <div>
      <Suspense fallback={<p>Comp1 Loading...</p>}>
        <LazyComp1 />
      </Suspense>
      <Suspense fallback={<p>Comp2 Loading...</p>}>
        <LazyComp2 />
      </Suspense>
    </div>
  )
}

export default LazyLoading