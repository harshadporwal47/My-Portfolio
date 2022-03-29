import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harshad Porwal </span>
            from <span className="purple"> Kolhapur, Maharashtra, India</span>.
            <br />I am a Frontend Developer with 8 years of experience in software world.
            <br />I have extensive experience in SAPUI5 and a little experience in ReactJS
            </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
