import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'




class GifListContainer extends React.Component{

  constructor(){
    super()

    this.state = {
      gifLinks: []
    }
  }

  fetchGifs = (searchTerm) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`)
      .then(data => data.json())
      .then(r => this.setState({gifLinks: [r.data[0].images.original.url, r.data[1].images.original.url, r.data[2].images.original.url]}))
  }

  render(){
    return(
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifLinks={this.state.gifLinks} />
      </div>
    )
  }

}

export default GifListContainer
