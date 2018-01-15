import React from 'react';

const GifList = (props) => {
  let gifs
  let newGifs

  if (props.gifs.data) {
    gifs = props.gifs.data
    gifs.length = 3

    newGifs = gifs.map(gif => {
      return(
        <li key={gif.id}>
          <img src={gif.images.fixed_height.url}></img>
        </li>
      );
    })
  }

console.log('gifs', gifs);
console.log('newGifs', newGifs);




  return <ul>{ newGifs }</ul>
}

export default GifList
