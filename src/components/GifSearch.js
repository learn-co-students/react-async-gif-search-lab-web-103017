import React, { Component } from 'react'

export default class GifSearch extends Component {
  constructor() {
    super()

    this.state = {
      searchVal: ''
    }
  }

  changeHandle = (event) => {
    this.setState({
      searchVal: event.target.value
    }, () => console.log(this.state))
  }


  render() {
    return (
      <div>
        <input value={this.state.searchVal} onChange={this.changeHandle}/>
        <button type='submit' onClick={() => this.props.getGifs(this.state.searchVal)}>Search</button>
      </div>
    )
  }
}
