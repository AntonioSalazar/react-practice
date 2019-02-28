import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import { listItems, MoviesList} from "./components/ListDemo"
import DynamicMoviesList from "./components/dynamicListDemo/DynamicMoviesList"
import TextareaAndSelectTagDemo from './components/dynamicListDemo/TextareaAndSelectTagDemo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ul className="list-style">{ listItems }</ul>
        <div>
          <MoviesList />
        </div>
        <hr/>
        <DynamicMoviesList />
        <TextareaAndSelectTagDemo />
      </div>
    );
  }
}

export default App;
