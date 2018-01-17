import React from 'react'

const GifList = (props) => {

  return (
    <ul>
      {props.gifs.length > 0 ? <div><li><img src={props.gifs[0].images.original.url} /></li><li><img src={props.gifs[1].images.original.url} /></li><li><img src={props.gifs[2].images.original.url} /></li></div> : <li>no gifs yet</li>}

    </ul>
  )
}



export default GifList
// {props.gifs ? (<div>
//   <li><img src={props.gifs[0].embed} /></li>
//   <li><img src={props.gifs[1].embed} /></li><li><img src={props.gifs[2].embed} /></li></div>) :
// <li>no gifs yet</li>
// }
