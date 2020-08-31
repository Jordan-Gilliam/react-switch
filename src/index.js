import React from 'react'
import ReactDOM from 'react-dom'

import Demo from './Demo'

import './index.css'

if (process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>,
  document.getElementById('root')
)
