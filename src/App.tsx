import React from 'react'
import { Test } from '~/components'

export const App = () => {
  return (
    <div>
      <Test />
      {process.env.REACT_APP_TEST_URL}
    </div>
  )
}
