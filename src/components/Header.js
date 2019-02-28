import React from "react";
import logo from "../logo.svg";
import Title from "./Title"
import Description from "./Description"

const header = () => {
  return(
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <Title firstName="Antonio"/>
      <Description description="Are you ready to take it to the next level?"/>
    </header>
  )
}

export default header;