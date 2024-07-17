import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {

  state = {mangoCount : 0, bananaCount : 0}

  mangoesCount = () => {
    this.setState((previousState) => {
     return ({mangoCount : previousState.mangoCount + 1})
    })
  }
  
  bananasCount = () => {
    this.setState((previousState) => {
     return ({bananaCount : previousState.bananaCount + 1})
    })
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="background-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="fruit">{mangoCount}</span> mangoes
            <span className="fruit"> {bananaCount}</span> bananas
          </h1>
          <div className="fruit-container">
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="mango"
                alt="mango"
              />
              <button className="mango-button" type="button" onClick = {this.mangoesCount}>
                Eat Mango
              </button>
            </div>
            <div className="banana-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="banana"
                alt="banana"
              />
              <button className="banana-button" type="button" onClick = {this.bananasCount}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter