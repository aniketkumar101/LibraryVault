import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container className="py-5">
      <header className="text-center mb-5">
        <h1>About Us</h1>
        <p className="lead">Learn more about our company</p>
      </header>
      <Row className="mb-5">
        <Col md={6}>
          <h2>Our Mission</h2>
          <p className="lead">
            We are dedicated to providing high-quality products and excellent
            customer service to our clients.
          </p>
        </Col>
        <Col md={6}>
          <h2>Our Vision</h2>
          <p className="lead">
            To be a leading innovator in our industry, exceeding customer
            expectations and contributing positively to our community.
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={6}>
          <h2>Our Team</h2>
          <Card className="team-member mb-3">
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>Founder & CEO</Card.Text>
            </Card.Body>
          </Card>
          <Card className="team-member mb-3">
            <Card.Body>
              <Card.Title>Jane Smith</Card.Title>
              <Card.Text>Head of Operations</Card.Text>
            </Card.Body>
          </Card>
          {/* Add more team members */}
        </Col>
        <Col md={6}>
          <h2>Join Our Team</h2>
          <p className="lead">
            We're always looking for talented individuals to join our team. If
            you're passionate about what you do, check out our current job
            openings.
          </p>
          <Button variant="primary">View Openings</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Our Values</h2>
          <ul className="list-unstyled">
            <li className="mb-3">
              <strong>Quality:</strong> We never compromise on quality.
            </li>
            <li className="mb-3">
              <strong>Integrity:</strong> We conduct business with honesty and
              transparency.
            </li>
            <li className="mb-3">
              <strong>Innovation:</strong> We embrace innovation to stay ahead
              in the market.
            </li>
            <li className="mb-3">
              <strong>Customer Satisfaction:</strong> We prioritize customer
              satisfaction above all else.
            </li>
          </ul>
        </Col>
      </Row>
      <footer className="text-center mt-5">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </Container>
  );
};

export default AboutUs;
