import React from 'react'
import ReactDOM from 'react-dom'

import './styles/index.scss'

// class App {
//   firstName = 'Wow'

//   constructor() {
//     // this.firstName = 'Wow'
//     this.lastName = 'World'
//   }

//   sayHi() {
//     console.log(`Hello, ${this.firstName} ${this.lastName}`)
//   }
// }

// const app = new App()

// app.sayHi()

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

ReactDOM.render(<App />, document.getElementById('root'))