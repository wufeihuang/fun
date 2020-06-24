import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import importedComponent from 'react-imported-component'

// import Home from './pages/Home'
// import NotFound from './pages/NotFound'

import Loading from './components/Loading'

import './styles/index.scss'

const About = () => {
  return (
    <div>
      about
    </div>
  )
}

const AsyncHome = importedComponent(
  () => import(/* webpackChunkName: 'Home' */ './pages/Home'),
  {
    LoadingComponent: Loading
  }
)

const AsyncNotFound = importedComponent(
  () => import(/* webpackChunkName: '404' */ './pages/NotFound'),
  {
    LoadingComponent: Loading
  }
)

class App extends React.Component {
  render () {
    return (
      <Router>
        <ul className="header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/404">NotFound</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="main">
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/" component={AsyncHome} />
            <Route exact path="/about" component={About} />
            {/* <Route component={NotFound} /> */}
            <Route component={AsyncNotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App

