import React, { useEffect, useState } from "react";
import axios from "axios";

import Details from "./Details";

const API_KEY = "u8JG1y99VXOWi2RTtXgloOZCbjdBUyVLPtyGLBV2";
const expla = "Over fifty gravitational wave events have now been detected. These events mark the distant, violent collisions of two black holes, a black hole and a neutron star, or two neutron stars.  Most of the 50 events were detected in 2019 by the LIGO gravitational wave detectors in the USA and the VIRGO detector in Europe.  In the featured illustration summarizing the masses of the first 50 events, blue dots indicate higher-mass black holes while orange dots denote lower-mass neutron stars. Astrophysicists are currently uncertain, though, about the nature of events marked in white involving masses that appear to be in the middle -- between two and five solar masses.  The night sky in optical light is dominated by nearby and bright planets and stars that have been known since the dawn of humanity. In contrast, the sky in gravitational waves is dominated by distant and dark black holes  that have only been known about for less than five years.  This contrast is enlightening -- understanding the gravitational wave sky is already reshaping humanity's knowledge not only of star birth and death across the universe, but properties of the universe itself.";

const APODdata = {
  date: "2020-11-04",
  title: "Fifty Gravitational Wave Events Illustrated",
  explanation: expla,
  hdurl: "https://apod.nasa.gov/apod/image/2011/GWaveSources2020Oct_LigoVIrgo_2977.jpg",
  url: "https://apod.nasa.gov/apod/image/2011/GWaveSources2020Oct_LigoVIrgo_960.jpg"
};

function App() {
  // const [mediaURL, setMediaURL] = useState("");
  // const [date, setDate] = useState("");
  // const [title, setTitle] = useState("");
  // const [explanation, setExplanation] = useState("");
  // const [HD_URL, setHD_URL] = useState("");
  
  const [photoOfTheDay, setPhotoOfTheDay] = useState({});
 

  // const fetchAPOD = () => {
  //   axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
  //     .then((res) => {
  //       setMediaURL(res.data.url);
  //       setDate(res.data.date);
  //       setTitle(res.data.title);
  //       setExplanation(res.data.explanation);
  //       setHD_URL(res.data.hdurl);
  //       // console.log(res.data);
  //     })
  //     .catch(() => {
  //       debugger;
  //       });
  // }
  // fetchAPOD();

 
  useEffect(() => {
    const fetchAPOD = () => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
          .then((res) => {
            setPhotoOfTheDay(res.data);
            // console.log(res.data);
          })
          .catch(() => {
            // debugger;
            setPhotoOfTheDay(APODdata);
            console.log(APODdata);
            });
      }
      fetchAPOD();
  }, []);
  
  
  return (
    <div className="App">
      <Details photoOfTheDay={photoOfTheDay} />
      {/* <div className="App-header">
        <p className="App-title">NASA Astronomy Picture of the Day</p>
        <div className="picture-title">{title}</div>
        {mediaURL.includes(".jpg") ? <img src={mediaURL} alt={title}></img> : <ReactPlayer url={mediaURL} />}
        <div className="date">{date}</div>
        <a className="highDef" href={HD_URL} target={HD_URL}>Get HD Image</a>
        <div className="explanation">{explanation}</div>
      </div> */}
    </div>
  );
}

export default App;
