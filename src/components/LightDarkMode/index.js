// Write your code here
import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onChangeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state

    const btnText = isDarkMode ? 'Light Mode' : 'Dark Mode'
    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'
    return (
      <div className="app-container">
        <div className={`container ${modeClassName} `}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onChangeMode}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
