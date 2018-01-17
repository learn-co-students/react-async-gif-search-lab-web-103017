import React from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

class GifListContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      gifs: []

    }
  }

  executeSearch = (term) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`)
    .then(resp => resp.json())
    .then(json => {console.log(json.data); this.setState({gifs: json.data})})
  }
//[json.data[0], json.data[1], json.data[2]]

  render(){
    return (
    <div>
    <GifList gifs={this.state.gifs}/>
    <GifSearch executeSearch={this.executeSearch}/>
    </div>
  )
  }
}

export default GifListContainer
