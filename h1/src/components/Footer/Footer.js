import React from 'react';
import TourItem from '../TourItem';
import {useState, useEffect} from 'react' 
import axios from 'axios';


export default function Footer ({mode}) {
  const [tours, setTours] = useState([]);

  function getData(){
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then(response => setTours(response.data))
  }
  useEffect(getData,[])

  function items(element, index) {
    return <TourItem key={index} tourName={element.id}/>
  }

  const style = {
    day: {
      color: "black",
      backgroundColor: "white"
    },
    night: {
      color: "white",
      backgroundColor: "black"
    }
  }
  const currentStyle = mode.current === "day" ? style.day : style.night

  return (
    <div style={currentStyle}>
      <h2>NUMBER ID</h2>
      <ul>
        {tours.map(items)}
      </ul>
    </div>
  )
}