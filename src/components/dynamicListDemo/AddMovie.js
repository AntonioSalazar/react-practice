import React, { Component } from "react";

class AddMovie extends Component{

  constructor(props){
    super(props)
    this.state = {
      title: "",
      director: "",
      hasOscars: false,
      IMDbRating : ""
    }
  }

  // handleTitleInput = (event) => {
  //   this.setState({
  //     title: event.target.value
  //   })
  // }

  // handleDirectorInput = (event) => {
  //   this.setState({
  //     director: event.target.value
  //   })
  // }

  // handleHasOscarCheck = (event) => {
  //   this.setState({
  //     hasOscars: event.target.type === "checkbox" ? event.target.checked : event.target.value
  //   })
  // }

  // handleRating = (event) => {
  //   this.setState({
  //     IMDbRating: event.target.value
  //   })
  // }



  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addTheMovie(this.state);
    this.setState({     
      title: '',
      director: '',
      hasOscars: false,
      IMDbRating: ''
    })     
  }

  handleChange(event) {
    let { name, value } = event.target;
    if(name === "hasOscars" && value === "on"){
        value = true;
    } 
    this.setState({[name]: value});
  }


  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="">Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={ (e) => this.handleChange(e)}/>

          <label htmlFor="">Director:</label>
          <input type="text" name="director" value={this.state.director} onChange={(e) => this.handleChange(e)}/>

          <label htmlFor="">Awarded</label>
          <input type="checkbox" name="hasOscars" checked={this.state.hasOscars} onChange={(e) => this.handleChange(e)}/>

          <label htmlFor="">IMDb Rating:</label>
          <input type="text" name="IMDbRating" value={this.state.IMDbRating} onChange={(e) => this.handleChange(e)}/>

          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

export default AddMovie;