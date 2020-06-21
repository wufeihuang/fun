import React from 'react'
import ReactDOM from 'react-dom'
import {hot} from 'react-hot-loader/root'

import './styles/index.scss'

class App extends React.Component {
  state = {
    name: 'Wow'
  }

  render () {
    return (
      <div>
        Hello, {this.state.name}!
      </div>
    )
  }
}

const render = (Component) => {
  ReactDOM.render(<Component />, document.getElementById('root'))
}

render(hot(App))
