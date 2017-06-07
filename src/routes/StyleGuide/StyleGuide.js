import React from 'react'
import Button from 'components/Button'
import InputText from 'components/InputText'

const dataExample = [
  { value: 1, description: 'example 1' },
  { value: 2, description: 'example 2' },
  { value: 3, description: 'example 3' },
  { value: 4, description: 'example 4' }
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
          </div>
        </div>
      </div>
    )
  }
}

export default StyleGuide
