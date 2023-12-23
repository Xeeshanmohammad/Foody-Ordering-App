import React from 'react'
import { useRouteError } from 'react-router-dom'


function ErrorPage() {
    const err = useRouteError()
  return (
    <div>
        <h1>{err.status} : Page {err.statusText}</h1>
        

    </div>
  )
}

export default ErrorPage