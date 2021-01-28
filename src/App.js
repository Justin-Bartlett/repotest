import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import './App.css';

function App() {
  return (
    <main>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </main>
  )
}

export default App;
