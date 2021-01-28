import React from 'react'
import ReactDom from 'react-dom'
import * as V from 'victory'
import {VictoryBar, VictoryChart, VictoryAxis, VictoryLine, VictoryTheme} from 'victory'
import WeightInfo from './WeightInfo'
import data from './../data'

function Home() {
  return (
    <div className="weight-section">
      <section className="weightinfo">
      <h1>Home</h1>
        <WeightInfo />
      </section>
      <section className="graph">
        <h1>Your weights for this period</h1>
        <VictoryChart
          domainPadding={20}
          theme={VictoryTheme.material}
        >
          <VictoryLine
            data={data}
            style={{
              data: {stroke: '#c43a31'},
              parent: {border: '1px solid #ccc'}
            }}
            animate={{
              duration: 5000,
              onLoad: {duration: 5000}
            }}
            categories={{
              x: ["Jan", "Feb", "Mar", "Apr"]
            }}
        />
        </VictoryChart>
      </section>
    </div>
  )
}

export default Home
