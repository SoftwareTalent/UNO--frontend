import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Providers from './Providers'

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
      <a className="audit-container large visible" href="https://bscscan.com/block/countdown/8003988" target="_blank" rel="noreferrer">
        <span className="txt">Reward will start from 8003988 block </span>
        <img className="logo" src="/images/egg/2.png" alt="logo" style={{width:'36px'}} />
        <div className="mini-tag pending">REWARD</div>
      </a>
    </Providers>
  </React.StrictMode>,
  document.getElementById('root'),
)
