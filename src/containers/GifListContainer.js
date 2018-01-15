import React from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      query: ''
    }
  }

  componentDidMount() {
    this.getGifs()
  }

  getGifs() {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC`)
    .then(resp => resp.json())
    .then(json => this.setState({
      gifs: json
    }));
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.getGifs()

  }

  render() {
    console.log(this.state);
    return (
      <div>
        <GifSearch
          onInputChange={this.handleChange}
          value={this.state.query}
          onFormSubmit={this.handleSubmit}
        />
        <GifList gifs={this.state.gifs}/>
      </div>
    );
  }
}

export default GifListContainer;
