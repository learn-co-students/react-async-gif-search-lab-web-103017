import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      gifs: []
    }
  }



  getGifs = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`)
      .then(resp => resp.json())
      .then(json => {
        const arr = [];
        for (let i = 0; i < 3; i++) {
          arr.push(json.data[i]);
        }
        this.setState( { gifs: arr} )
      })
  }

  render() {
    return (
      <div>
        < GifList gifs={this.state.gifs}/>
        < GifSearch getGifs={this.getGifs}/>
      </div>
    )
  }
}
