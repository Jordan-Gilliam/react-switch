import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

if (process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <React.StrictMode>
    <h1>hello world</h1>
  </React.StrictMode>,
  document.getElementById('root')
)
