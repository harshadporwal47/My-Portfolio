import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiSap
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={3} md={3} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={3} md={3} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={3} md={3} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={3} md={3} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={3} md={3} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={3} md={3} className="tech-icons">
        <SiSap />
      </Col>
    </Row>
  );
}

export default Techstack;
