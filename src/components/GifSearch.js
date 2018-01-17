import React from 'react'

class GifSearch extends React.Component {
  constructor(){
    super()

    this.state = {
      search: ""
    }
  }

  handleChange = (event) => {
    this.setState({search: event.target.value})
  }

  runSearch = (event) => {
    event.preventDefault()
    this.props.executeSearch(this.state.search)

  }

  render(){
    return (
      <form onSubmit={this.runSearch}>
        <input type="text" value={this.state.search} onChange={this.handleChange} />
        <button type="submit">Search</button>
      </form>
    )
  }
}


export default GifSearch
