import React from 'react'

const GifList = (props) => {
  const showGifs = props.gifs.map(gif => {
    return(
      <div key={gif.id}>
          <iframe title={gif.id} src={gif.embed_url} width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
          <p><a href={gif.url}>via GIPHY</a></p>
      </div>
    )
  })
  return(
    <div>
      {showGifs}
    </div>
  )
}

export default GifList;

// <img key={gif.id} src={gif.url} />
