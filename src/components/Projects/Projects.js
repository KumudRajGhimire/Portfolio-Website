import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import bus from "../../Assets/Projects/bustracking.png";
import dormly from "../../Assets/Projects/ecommerce.png";
import app from "../../Assets/Projects/dormly_app.png";

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
              imgPath={dormly}
              isBlog={false}
              title="Dormly website"
              description="Dormly is a second-hand marketplace designed exclusively for hostel students, making it easier to buy and sell pre-owned essentials within their campus community. Built using the MERN stack  Dormly ensures a seamless and user-friendly experience. It helps students find affordable products while promoting a sustainable and hassle-free way to trade items they no longer need."
              ghLink="https://github.com/KumudRajGhimire/dormly"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={app}
              isBlog={false}
              title="Dormly app"
              
              description="Dormly Application – A cross-platform Flutter-based app currently under development. It utilizes Supabase for backend services and Flask for additional server-side functionality. The UI/UX is designed using Figma, ensuring a seamless and intuitive user experience across all devices. The app aims to provide a smooth and efficient solution for dorm management, enhancing convenience for users."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bus}
              isBlog={false}
              title="Bus Tracking System"
              description="Public Vehicles Live Location Tracking – A web-based application designed to track the real-time location of public vehicles. Built with Flask for the backend and HTML & CSS for the frontend, it provides users with live updates on vehicle positions, improving convenience and efficiency in transportation. The system ensures accurate location tracking, helping commuters plan their journeys more effectively. "
              ghLink="https://github.com/KumudRajGhimire/Bus-Tracking.git"
                           
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
