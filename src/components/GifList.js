import React, { Component } from 'react'

const GifList = (props) => {
  return <ul>{props.gifs.map((gif, i) => <li key={i}><img src={gif.images.original.url}/></li>)}</ul>
}

export default GifList
