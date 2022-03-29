import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={4} className="myAvtar">
              <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a Front End Developer working in{" "}
              <b className="purple"> SAP </b> field building{" "}
              <b className="purple">SAP Fiori</b> applications.
              <br />
              <br />I am fluent in 
              <i>
                <b className="purple"> SAPUI5 and Javascript</b>.
              </i>
              <br />
              <br />I am not the best in <b className="purple">CSS</b> but me and my friend <b className="purple">Google</b> can manage.
             
              <br />
              <br />
              My field of Interest's are building new&nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and and
                helping to make someone's life easier.
              </i>
              <br />
              <br />
              Recently I found my new love{" "}
              <b style={{ color: "red" }}>&#10084;</b> &nbsp;
              <i>
                <b className="purple">ReactJS </b>.
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/harshadporwal47"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/PorwalHarshad"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/harshad-porwal-4a99584a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/harshuporwal/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
