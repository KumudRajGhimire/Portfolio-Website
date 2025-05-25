import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import bus from "../../Assets/Projects/bustracking.png";
import dormly from "../../Assets/Projects/ecommerce.png";
import app from "../../Assets/Projects/dormly_app.png";
import skill from "../../Assets/Projects/skill.png";
import note from "../../Assets/Projects/exnote.png";

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
              imgPath={skill}
              isBlog={false}
              title="Skill Trade App"
              
              description="SkillTrade, a Flutter-powered mobile platform, facilitates item and skill exchange within communities. Powered by Google Firebase (FirebaseAuth for secure authentication, Cloud Firestore for scalable data), it moves beyond traditional monetary transactions. This innovative app connects individuals, unlocking underutilized assets and fostering a collaborative sharing ecosystem. It is responsive, reliable, and future-proof application."
              ghLink="https://github.com/KumudRajGhimire/skill-trade.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={note}
              isBlog={false}
              title="Exnote Web App"
              description={
                <span>
                  This free, **TypeScript**-powered note-sharing website for **BMSCE** students offers a vast repository of **PYQ (Previous Year Questions)**. With over **3500 active users**, it's a dynamic platform designed to enhance academic collaboration and resource accessibility for BMS College of Engineering. Check out the live application at <a href="https://exnote.vercel.app" target="_blank" rel="noopener noreferrer">exnote.vercel.app</a>.
                </span>
              }
              ghLink="https://github.com/KumudRajGhimire/exnote.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={app}
              isBlog={false}
              title="Dormly app"
              
              description="Dormly Application – A cross-platform Flutter-based app currently under development. It utilizes Supabase for backend services and Flask for additional server-side functionality. The UI/UX is designed using Figma, ensuring a seamless and intuitive user experience across all devices. The app aims to provide a smooth and efficient solution for dorm management, enhancing convenience for users."
              ghLink="https://github.com/GhanshyamSharma122/dormly.git"
              
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
