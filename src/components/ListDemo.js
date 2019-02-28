import React from "react";
import Card from "./Card";

const number = [1, 2, 3, 4, 5, 6];

export const listItems = number.map((oneNumber, index) => {
  return <li key={index}>{oneNumber}</li>
})

const movies = [
  {title: "Harry Potter", director: "Steven Spielberg"},
  {title: "Estar Guars", director: "Lucas Algo"},
  {title: "Titanic", director: "James Cameron"}
]

export const MoviesList = () =>{
  return (
    <ul>
      { movies.map((oneMovie,index) => 
        <Card key={index} title={oneMovie.title} director={oneMovie.director} />) 
      }
    </ul>
  )
};