import React from 'react'

function WeightInfo(props) {
  const weights = []
  let id = 0;
  for (let st=5; st<15; st++) {
    for (let lb=0; lb<15; lb++) {
      weights.push(<option key={id}>{st}st {lb}</option>)
      id++;
    }
  }
  console.log(props.people)
  const peopleOptions = props.people.map(person => <option key={person.id}>{person.name}</option>)
  // let [name] = props.people.name
  // for (let person=0; person<props.people.length; person++) {
  //   name.push(<option key={person}>{props.people.name}</option>)
  //   console.log(props.people)
  // }
  console.log(peopleOptions)

  return (
    <div>
      <div className="date-picker">
      <div className="person-choice">
        <select
          name="people"
          onChange={props.handleChange}
        >
          {peopleOptions}
        </select>
      </div>
        <div className="date-input">
          <label>Enter the month</label>
          <input
            type="month"
            name="month"
            min="2021-01"
            max="2021-12"
            onChange={props.handleChange}
          />
        </div>
        <div className="date-input">
          <label>Stone</label>
          <select
            name="weight"
            onChange={props.handleChange}
          >
            {weights}
          </select>
        </div>
        <br />
      </div>
      <div className="weight-input">
        <button onClick={props.handleClick}>
          Enter weight for this month
        </button>
      </div>
    </div>
  )
}

export default WeightInfo
