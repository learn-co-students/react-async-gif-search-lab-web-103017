import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends React.Component{


  constructor(){
    super()
    this.state={
      gifs: [],
    }
  }

  submitHandler=(query)=>{
    console.log(query);
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`)
    .then(resp => resp.json())
    .then(json => this.setState({
      gifs: [json.data[0],json.data[1],json.data[2]]
    }))
  }


  render(){
    return(
      <div>
        <GifSearch callback={this.submitHandler}/>
        <GifList gifs = {this.state.gifs}/>
      </div>
    )
  }





}

export default GifListContainer
