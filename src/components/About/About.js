import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import GoalCard from "./GoalCard";
import laptopImg from "../../Assets/about.svg";
import Toolstack from "./Toolstack";
import './About.css';

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple tools">I'M</strong>
            </h1>
            <Aboutcard />

            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              My <strong className="purple tools">Goal</strong>
            </h1>
            <GoalCard />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple tools">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading ">
          <strong className="purple tools">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
