import React from "react";
import Card from "react-bootstrap/Card";
import { FaCode } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kumud Raj Ghimrie </span>
            from <span className="purple"> Chitwan, Nepal.</span>
            <br />
            I am currently studying computer science engineering at BMS Collage of Engineering.
            <br />
            I am studying under Indian Government's full ride scholarship program called COMPEX.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <FaCode /> Playing Games
            </li>
            <li className="about-activity">
              <FaCode /> Watching Movies and Series
            </li>
            <li className="about-activity">
              <FaCode /> Travelling
            </li>
          </ul>

          <p style={{ color: "#0d99ff" }}>
            "श्रम एव पुरुषस्य भूषणम्।!"{" "}
          </p>
          <footer className="blockquote-footer">Mahabharata - Shanti Parva, 66.20</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
