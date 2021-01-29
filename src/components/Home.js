import React from 'react'
import {useState} from 'react'
import {VictoryChart, VictoryAxis, VictoryLine, VictoryTheme} from 'victory'
import WeightInfo from './WeightInfo'
import data from './../data'

function Home() {

  const [periodInMonths, setPeriodInMonths] = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep','Oct', 'Nov', 'Dec'])
  const [monthsNumber, setMonthsNumber] = useState(4)

  const handleChange = (e) => {
    const {name, value} = e.target
    console.log('name = ' + name + ': value = ' + value)
  }

  return (
    <div className="weight-section">
      <section className="weightinfo">
      <h1>Home</h1>
        <WeightInfo
          handleChange={handleChange}
        />
      </section>
      <section className="graph">
        <h1>Your weights for this period</h1>
        <VictoryChart
          domainPadding={20}
          theme={VictoryTheme.material}
        >
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`${x} st`)}
          />
          <VictoryAxis
            tickValues={periodInMonths}
          />
          <VictoryLine
            data={data}
            style={{
              data: {stroke: '#ffd400'},
              parent: {border: '1px solid #ccc'}
            }}
            animate={{
              duration: 5000,
              onLoad: {duration: 5000}
            }}
            categories={{
              x: periodInMonths
            }}
        />
        </VictoryChart>
      </section>
    </div>
  )
}

export default Home
