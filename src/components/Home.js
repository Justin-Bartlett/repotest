import React from 'react'
import {useState} from 'react'
import {VictoryChart, VictoryAxis, VictoryLine, VictoryTheme} from 'victory'
import WeightInfo from './WeightInfo'
import data from './../data'

function Home() {

  const [periodInMonths] = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])
  const [month, setMonth] = useState('1')
  const [weight, setWeight] = useState(4.0)

  const inputtedPerson = "David"
  let chosenPerson = data.find(person => person.name === inputtedPerson)

  const [weightData, setWeightData] = useState(chosenPerson.weights)
  console.log('chosenPerson initial state is..')
  console.log(chosenPerson)
  console.log('Its type is..')
  console.log(typeof(chosenPerson))

  const handleChange = (e) => {
    const {name, value} = e.target
    console.log('name = ' + name + ': value = ' + value)
    if (name === 'month') {
      setMonth(value)
    } else if (name === 'weight') {
      setWeight(value.replace("st ", "."))
    } else if (name === 'people') {
      const thisPerson = value
      chosenPerson = data.find(person => person.name === thisPerson)
      console.log('chosenPerson after change is..')
      console.log(chosenPerson)
      console.log('Its type is..')
      console.log(typeof(chosenPerson))
      setWeightData(chosenPerson.weights)
    }
  }

  const handleClick = () => {
    if (month.length > 3) {
      const justMonth = month.slice(5)
      if (justMonth.charAt(0) === '0') {
        setMonth(justMonth.slice(1))
      } else {
        setMonth(justMonth)
      }
        setWeightData((weightData) => [...weightData, {x: parseFloat(justMonth), y: parseFloat(weight)}])
    }
  }

  return (
    <div className="weight-section">
      <section className="weightinfo">
      <h1>WeightTRACKER</h1>
        <WeightInfo
          people={data}
          handleChange={handleChange}
          handleClick={handleClick}
        />
      </section>
      <section className="graph">
        <h1>Weights for this period</h1>
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
            data = {weightData}
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
