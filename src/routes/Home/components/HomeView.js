import React from 'react'
import './HomeView.scss'
import Button from 'components/Button'
import InputText from 'components/InputText'
import DisplayList from 'components/DisplayList'

export class HomeView extends React.Component {
  constructor () {
    super()
    this.state = {
      inputValue: '',
      list: []
    }
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  handleEnterKey = (e) => {
    e.keyCode === 13 &&
    this.addItem()
  }

  addItem = () => {
    if (this.state.inputValue.length) {
      const list = [...this.state.list]
      list.push(this.state.inputValue)
      this.setState({ inputValue: '', list })
    }
  }

  render () {
    return (
      <div className='row'>
        <h2>App</h2>
        <hr />
        <div>
          <InputText id='addInput' width='auto' value={this.state.inputValue}
            onChange={this.handleInputChange}
            onKeyUp={this.handleEnterKey} />
          <Button value='ADD' size='small'
            onClick={this.addItem} />
        </div>
        <DisplayList data={this.state.list} />
      </div>
    )
  }
}

export default HomeView
