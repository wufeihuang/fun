import './styles/index.scss'

class App {
  firstName = 'Wow'

  constructor() {
    // this.firstName = 'Wow'
    this.lastName = 'World'
  }

  sayHi() {
    console.log(`Hello, ${this.firstName} ${this.lastName}`)
  }
}

const app = new App()

app.sayHi()