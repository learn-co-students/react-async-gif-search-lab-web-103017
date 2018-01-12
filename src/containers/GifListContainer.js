import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends  React.Component {
  constructor() {
    super()

    this.state = {
      searchTerm: '',
      gifs: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC`)
    .then(res => res.json()).then(data => this.setState({
      gifs: data.data.slice(0, 3)
    }))
  }

  handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    this.setState({
      searchTerm: searchTerm
    })
  }

  render() {
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit} searchTerm={this.state.searchTerm} handleSearchChange={this.handleSearchChange}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }

}

export default GifListContainer;
