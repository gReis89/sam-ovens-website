import React from 'react'
import Button from 'components/Button'
import InputText from 'components/InputText'
import Select from 'components/Select'
import ButtonGroup from 'components/ButtonGroup'
import Pagination from 'components/Pagination'

const dataExample = [
  { value: 1, description: 'example 1' },
  { value: 2, description: 'example 2' },
  { value: 3, description: 'example 3' },
  { value: 4, description: 'example 4' }
]

const buttons = [
  {
    text: 'Button 1',
    onChange: function () {}
  },
  {
    text: 'Button 2',
    onChange: function () {}
  },
  {
    text: 'Button 3',
    onChange: function () {}
  }
]

const buttons2 = [
  {
    text: 'Button 1',
    onChange: function () {}
  },
  {
    text: 'Button 2',
    onChange: function () {}
  },
  {
    text: 'Button 3',
    onChange: function () {}
  },
  {
    text: 'Button 4',
    onChange: function () {}
  },
  {
    text: 'Button 5',
    onChange: function () {}
  }
]

export class StyleGuide extends React.Component {
  constructor () {
    super()
    this.state = {
      selectValue: 2,
      textExample: 'Text Example'
    }
  }

  handleSelect = (e) => {
    this.setState({ selectValue: e.target.value })
  }

  handleInput = (e) => {
    this.setState({ textExample: e.target.value })
  }

  render () {
    return (
      <div>
        <h2>Style Guide</h2>
        <div className='row'>
          <div className='column medium-6'>
            <InputText value={this.state.textExample} onChange={this.handleInput} />
            <Select value={this.state.selectValue} data={dataExample} onChange={this.handleSelect} />
          </div>
          <div className='column medium-6'>
            <ul className='unstyled'>
              <li><Button value='Small' size='small' /></li>
              <li><Button value='Button' /></li>
              <li><Button value='Large' size='large' /></li>
            </ul>
            <ul className='unstyled'>
              <li><a>Link Example</a></li>
              <li><a className='active'>Link Active</a></li>
            </ul>
            <ButtonGroup data={buttons} />
            <ButtonGroup data={buttons2} />
            <Pagination nPages={10} active={5} />
          </div>
        </div>
      </div>
    )
  }
}

export default StyleGuide
