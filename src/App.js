import React, { Component } from 'react'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h4 className="App-title">MOCK LOC API</h4>
        </header>

        <p className="App-intro">
          <h2>Choose an example</h2>
        </p>

        <div className='content'>
          {/* <a className='link' href="/.netlify/functions/aws-serverless-express">
            Example using `aws-serverless-express` module
          </a> */}
          <a className='link' href="/.netlify/functions/serverless-http">
            Example using `serverless-http` module
          </a>
          {/* <a className='link' href="/.netlify/functions/react-express-ssr">
            Example using React serverside rendering
          </a> */}
        </div>
      </div>
    )
  }
}

export default App
