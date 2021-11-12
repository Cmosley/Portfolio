import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="site-color">Christian Mosley </span>
            from <span className="site-color"> Fort Worth, TX</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drinking an excessive amount of Monsters
            </li>
            <li className="about-activity">
              <ImPointRight /> Swiping right on dating apps
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing basketball with dirty diapers
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Before you marry, you should first make them use a computer with slow internet to see who they really are"{" "}
          </p>
          <footer className="blockquote-footer">-Will Ferrell</footer> 
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
