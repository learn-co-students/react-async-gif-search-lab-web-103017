import React from 'react';

const GifSearch = (props) => {

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type="text" value={props.searchTerm} onChange={props.handleSearchChange}/>
        <button type="submit" >Submit</button>
      </form>
    </div>
  )

}

export default GifSearch;
