import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import ReactPlayer from "react-player";

const API_KEY = "u8JG1y99VXOWi2RTtXgloOZCbjdBUyVLPtyGLBV2";

function App() {
  const [mediaURL, setMediaURL] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");
  const [HD_URL, setHD_URL] = useState("");
  const fetchAPOD = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then((res) => {
        setMediaURL(res.data.url);
        setDate(res.data.date);
        setTitle(res.data.title);
        setExplanation(res.data.explanation);
        setHD_URL(res.data.hdurl);
        // console.log(res.data);
      })
      .catch((err) => {
        debugger;
      });
  }
  fetchAPOD();

  // const HD = () => {
  //   <div>
      
  //   </div>
  // };

  return (
    <div className="App-header">
      <p className="App-title">NASA Astronomy Picture of the Day</p>
      <div className="picture-title">{title}</div>
      {mediaURL.includes(".jpg") ? <img src={mediaURL} alt={title}></img> : <ReactPlayer url={mediaURL} />}
      <div className="date">{date}</div>
      {/* <button className="highDef"></button> */}
        <a className="highDef" href={HD_URL} target={HD_URL}>Get HD Image</a>
      
      <div className="explanation">{explanation}</div>
      
      {/* <HD /> */}
    </div>
  );
}

export default App;
