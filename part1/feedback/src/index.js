import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
  return (
    <h1>anna palautetta</h1>
  )
}

const labels = ['hyvä', 'neutraali', 'huono', 'keskiarvo', 'positiivisia']

const Button = ( {listner, text} ) => {
  return (
    <button onClick={listner}>{text}</button>
  )
}

const Result = ( {total} ) => {
  if ( total === 0) {
    return (
      <div>
        <h2>statistics</h2>
        <p>ei yhtään palautetta annettu</p>
      </div>
    )
  } else {
    return (
      <h2>statistics</h2>
    )
  }
}

const Statistics = ( {name, counter, total} ) =>{
  if ( total === 0) {
    return (
      null  
    )
  } else {
    return (
      <tr>
        <td>{name}</td>
        <td>{counter}</td> 
      </tr>
    )
  }
}
const Footer = () => {
  return (
    <footer><br />Web and mobile programming 2022: PART1 6-10 by Kim (yukkim@utu.fi)</footer>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
      total: []
    }
    this.clickBad = this.clickBad.bind(this)
    this.clickGood = this.clickGood.bind(this)
    this.clickNeutral = this.clickNeutral.bind(this)
  }

  clickGood = () => {
    this.setState({
      good: this.state.good + 1,
      total: this.state.total.concat(1),
    });
    console.log(this.state.good)
  }
  clickNeutral = () => {
    this.setState({
      neutral: this.state.neutral + 1,
      total: this.state.total.concat(1),
    })
  }
  clickBad = () => {
    this.setState({
      bad: this.state.bad + 1,
      total: this.state.total.concat(1),
    })
  }

  getPos = () => {
    if (this.state.total.length === 0) {
      return 0
    }
    return this.state.good * 100 / this.state.total.length
  }
  getAvg = () => {
    if (this.state.total.length === 0) {
      return 0
    }
    return (this.state.good - this.state.bad) / this.state.total.length
  }

  render() {  
    return (
      <div>
        <Header />    
        <div>
          <Button listner={this.clickGood} text={labels[0]} />
          <Button listner={this.clickNeutral} text={labels[1]} />
          <Button listner={this.clickBad} text= {labels[2]} />
        </div>

        <div>
          <Result total={this.state.total.length} />
          <table><tbody>  
            <Statistics name={labels[0]} counter={this.state.good} total={this.state.total.length}/>
            <Statistics name={labels[1]} counter={this.state.neutral} total={this.state.total.length} />
            <Statistics name={labels[2]} counter={this.state.bad} total={this.state.total.length}/>          
            <Statistics name={labels[3]} counter={this.getAvg()} total={this.state.total.length}/>
            <Statistics name={labels[4]} counter={this.getPos().toFixed(2) + " %"} total={this.state.total.length}/>
          </tbody></table>
        </div>
    
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)