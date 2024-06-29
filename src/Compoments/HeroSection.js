import React from "react";
import '../App.css'
import { Button } from "./Button";
import "./HeroSection.css"

export default function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/Videos/video-3.mp4" autoPlay loop muted />
      <h1>ART IS THE LANGUAGE</h1>
      <p>A Mean to Express the Inexpressible</p>
      <div className="hero-btns">
      <Button
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
      >
        WATCH TRAILER 
      </Button>
      <Button
        className="btns"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        GET STARTED <i className="far fa-play-circle"/>
      </Button>
    </div>
    </div>
  );
}
