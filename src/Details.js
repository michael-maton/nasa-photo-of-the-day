import React, { useState } from "react";
// import ReactPlayer from "react-player";
// import Learn from "./Learn";
import styled from "styled-components";

export default function Details(props) {
  const { photoOfTheDay } = props;
  const [exp, setExp] = useState(null);
  const [btnClosed, setBtnClosed] = useState(true);

  const openExp = (contents) => {
    setExp(contents);
    setBtnClosed(false);
  };

  const closeExp = () => {
    setExp(null);
    setBtnClosed(true);
  };

  return (
    <StyledContainer>
      <StyledTitle>{photoOfTheDay.title}</StyledTitle>
      <img src={photoOfTheDay.url} alt={photoOfTheDay.title}></img>
      {!photoOfTheDay.url ? <h3>Loading...</h3> : null}
      <span>{photoOfTheDay.date}</span>
      <a
        href={photoOfTheDay.hdurl}
        target={photoOfTheDay.hdurl}
      >
        Get HD Image
      </a>
      <button
        onClick={() =>
          btnClosed ? openExp(photoOfTheDay.explanation) : closeExp()
        }
      >
        {btnClosed ? "Learn about the photo!" : "Close"}
      </button>
      <div className="explanation">{exp}</div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  span {
    display: flex;
    justify-content: flex-end;
    font-size: 1rem;
    width: 70vh;
    font-family: Strait;
  }

  button,
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    width: 10rem;
    font-size: calc(1px + 1vmin);
    background-color: white;
    color: black;
    height: 2.5rem;
    border: solid rgba(255, 255, 255, 0.3);
    margin-bottom: 1rem;
    text-decoration: none;
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      opacity: 10;
      transition: all 0.3s ease-in-out;
      background-color: rgb(77, 77, 77);
    }
    transition: all 0.3s ease-in-out;
  }
`;

const StyledTitle = styled.div`
  font-size: 2rem;
  font-family: Space Mono;
  margin-top: 4rem;
`;

// const toggleBtn = () => {
//     setBtnClosed(!btnClosed);
// };
// const [mediaURL, setMediaURL] = useState("");
// setMediaURL(photoOfTheDay.url);
// console.log(mediaURL);
{
  /* {mediaURL.includes(".jpg") ? <img src={mediaURL} alt={photoOfTheDay.title}></img> : <ReactPlayer url={mediaURL} />} */
}
{
  /* {mediaURL.includes(".jpg") ? <img src={mediaURL} alt={photoOfTheDay.title}></img> : <ReactPlayer url={mediaURL} />} */
}
{
  /* <button onClick={() => openExp(photoOfTheDay.explanation)}>Learn about the photo!</button> */
}
{
  /* <div className="closeBtn">
      {exp && (
          <Learn close={closeExp} />
      )}
  </div> */
}
