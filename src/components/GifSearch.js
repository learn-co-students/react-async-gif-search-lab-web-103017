import React from 'react'



class GiftSearch extends React.Component{

  constructor(props){
    super(props)
    this.state={
      query: ""
    }
  }

  handleChange=(e)=>{
    console.log(e.target.value)
    this.setState({
      query: e.target.value
    })
  }

  localSubmit=(e)=>{
    e.preventDefault()
    console.log(this.props);
    this.props.callback(this.state.query)
  }

  render(){
    return(
      <form onSubmit={this.localSubmit}>
        <input type="text" value={this.state.query} onChange={this.handleChange}/>
        <input type="Submit" value="Submit"/>

      </form>
    )
  }

}



export default GiftSearch
