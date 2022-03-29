import React from "react";
import Card from "react-bootstrap/Card";
import './About.css';

function GoalCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            To become a <span className="purple">Full Stack Developer</span>.
            <br />I am working on <span className="purple">ReactJS</span> and will be buidling cool and awesome <span className="purple">ReactJS</span> projects.
            <br />
            </p>
            <br />

            <p className="quotes">
            "Creating beautifully simple solutions!"
            </p>
            <footer className="blockquote-footer tools">Harshad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default GoalCard;
