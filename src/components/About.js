import React from 'react'
import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import More from './More'

function About() {
  return (
    <section className="about">
      <h1>About</h1>
      <Link to="/more">More about me</Link>
      <Router>
        <Switch>
          <Route path="/more" component={More} />
        </Switch>
      </Router>
    </section>
  )
}

export default About
