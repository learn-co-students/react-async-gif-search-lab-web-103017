import React from 'react'

class GifSearch extends React.Component{

  constructor(){
    super()

    this.state = {
      searchTerm: ''
    }
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({searchTerm: event.target.value})
  }

  render(){
    return (
      <div>
        <label>Enter A Search Term</label>
        <input type="text" name="" value={this.state.searchTerm} onChange={this.handleChange}/>
        <button type="" onClick={() => this.props.fetchGifs(this.state.searchTerm)}>Find Gifs</button>
      </div>
    )
  }

}

export default GifSearch
