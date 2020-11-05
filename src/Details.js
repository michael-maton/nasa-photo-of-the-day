import React, { useState } from 'react'
import ReactPlayer from "react-player";
import Learn from "./Learn";

export default function Details(props) {
    const { photoOfTheDay } = props;
    const [exp, setExp] = useState(null);

    const openExp = (contents) => {
      setExp(contents);
    };
  
    const closeExp = () => {
      setExp(null);
    };

    // const Explanation = (props) => {
    //     <div className="explanation">
    //         {/* {photoOfTheDay.explanation} */}

    //         {/* <button onClick={() => openExp(props.explanation)}>Learn about the photo!</button> */}
    //     </div>
    // };

    return (
        <div className="App-header">
            <div className="infoContainer">
                <p className="App-title">NASA Astronomy Picture of the Day</p>
                <div className="picture-title">{photoOfTheDay.title}</div>
                {/* {photoOfTheDay.url.includes(".jpg") ? <img src={photoOfTheDay.url} alt={photoOfTheDay.title}></img> : <ReactPlayer url={photoOfTheDay.url} />} */}
                <img src={photoOfTheDay.url} alt={photoOfTheDay.title}></img>
                <div className="date">{photoOfTheDay.date}</div>
                <a className="highDef" href={photoOfTheDay.hdurl} target={photoOfTheDay.hdurl}>Get HD Image</a>
                <button onClick={() => openExp(photoOfTheDay.explanation)}>Learn about the photo!</button>
                <div className="explanation">
                    {exp}
                </div>
                <div className="closeBtn">
                    {exp && (
                        <Learn close={closeExp} />
                    )}
                </div>
            </div>
        </div>
    );
}