import React from 'react'
import "./Cover.scss";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
  return (
    <div className="cover-main">
        <video className="video" src= {coverVideo} autoPlay loop muted/>
        <h1> Álvaro González Barjola</h1>
        <p> Full Stack Developer | Designer | Digital Marketer </p>
    </div>
  )
}

export default Cover
