import React from 'react';

const GifSearch = (props) => {


  return (
    <div>
      <form onChange={props.onInputChange} onSubmit={props.onFormSubmit}>
        <input type="text" placeholder="Search..." value={props.value}></input>
        <button >Submit</button>
      </form>
    </div>
  );
}

export default GifSearch;
