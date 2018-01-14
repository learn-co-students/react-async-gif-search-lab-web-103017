import React from 'react'

class GifSearch extends React.Component{
  constructor(){
    super();
    this.state = {
      input: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render(){
    return(
      <form onSubmit={(e) => this.props.handleFormSubmit(e, this.state.input)}>
        <label>
          Gif:
          <input type="text" name="gif" onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default GifSearch;
