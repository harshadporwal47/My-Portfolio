import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import simplyca from "../../Assets/Projects/simplyca.png";
import portfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="My Portfolio"
              description="This project is the current portfolio webiste you are currently looking."
              link="https://github.com/harshadporwal47/My-Portfolio.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simplyca}
              isBlog={false}
              title="Simply-CA"
              description="This project is to help CA firms to make document management easier. The frontend is ReactJS and Backend is Firebase"
              link="https://github.com/harshadporwal47/simply-ca"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
