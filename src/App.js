import React, { useEffect, useState } from "react";
import axios from "axios";
import Details from "./Details";
import { APODdata } from "./rawData";
import styled, { keyframes } from "styled-components";

const API_KEY = "u8JG1y99VXOWi2RTtXgloOZCbjdBUyVLPtyGLBV2";

function App() {
  const [photoOfTheDay, setPhotoOfTheDay] = useState({});
 
  useEffect(() => {
    const fetchAPOD = () => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
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
    <StyledHeader>
       <p className="App-title">NASA Astronomy Picture of the Day</p>
      <Details photoOfTheDay={photoOfTheDay} />
    </StyledHeader>
  );
}
export default App;

const fadeIn = keyframes`
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  text-align: center;
  background-image: linear-gradient(to right, #868f96 0%, #596164 100%);

  p {
    opacity: 1%;
    animation: ${fadeIn} 2.5s ease-in-out forwards;
    padding: 5vh 0 0 0;
    margin-bottom: 0.3rem;
    font-size: 5rem;
    font-family: Strait;
  }
`;