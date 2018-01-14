import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      gifs: []
    }
  }

  handleFormSubmit = (e, query) => {
    e.preventDefault();
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`).then(resp => resp.json()).then(out => {
      this.setState({
        gifs: out.data.slice(0,3)
      })
    })
  }

  render(){
    return(
      <div>
        <GifSearch handleFormSubmit={this.handleFormSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer
