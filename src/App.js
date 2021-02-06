import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <Router>
      <main>
      <div className="container">
        <Header className="site-header"/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
      <Footer />
      </main>
    </Router>
  )
}

export default App;
