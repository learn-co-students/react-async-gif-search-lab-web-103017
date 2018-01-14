import React from 'react'

class GifList extends React.Component{

  render(){
    return(
      <div>
        <ul>
          <li><img src={this.props.gifLinks[0]} alt=""/></li>
          <li><img src={this.props.gifLinks[1]} alt=""/></li>
          <li><img src={this.props.gifLinks[2]} alt=""/></li>
        </ul>
      </div>
    )
  }

}


export default GifList
