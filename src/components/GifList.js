import React from 'react';

const GifList = ({gifs}) => {
  return (

    <div>
      {gifs.map(gif => <div key={gif.id}><img src={gif.images.original.url} width="480" height="360" frameBorder="0" className="giphy-embed" allowFullScreen/></div>)}
    </div>
  )
}

export default GifList;

// function gifList(props) {
//   return <h1>Hi</h1>
// }
//
// var gifList = function(props) {
//   return <h1>Hi</h1>
// }
//
// const GifList = /*function*/(props) => /*return*/(<h1>Hi</h1>)
//
// var hi = "hi"
// var food = {pizza: "pepperoni"}
// var foo = function() {
//   return "hi"
// }
