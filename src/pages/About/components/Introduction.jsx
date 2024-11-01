import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTwitter, FaMedium, FaGithub } from 'react-icons/all';

import { CustomButton } from '../../../common/components/UIElements';

import './Introduction.scss';

const Introduction = () => {
  return (
    <div id="introduction">
      <Container>
        <div className="introduction">
          <Row>
            <Col sm>
              <div className="introduction__img">
                <img
                  src="https://res.cloudinary.com/dc6lcsahh/image/upload/v1728847583/yashodip_d4o60p.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644134493976"
                  alt="Yashodip Beldar"
                  loading="lazy"
                />
              </div>
            </Col>
            <Col className="introduction__short mt-4" sm>
              <div>
                <h1>Yashodip Beldar</h1>
                <p>
                  Full Stack Developer, NodeJs Ethusiast, and a passionate
                  learner.
                </p>
              </div>
              <div>
                <h6>Email Me</h6>
                <a href="mailto:yashodipbeldar@gmail.com">
                  <span className="introduction__short__email">
                    yashodipbeldar@gmail.com
                  </span>
                </a>
              </div>
              <div className="introduction__short__links">
                <Row>
                  <Col lg={3} md={6} xs={6}>
                    <Link to="/work">
                      <CustomButton className="work">Work</CustomButton>
                    </Link>
                  </Col>
                  <Col lg={3} md={6} xs={6}>
                    <Link to="/blogs">
                      <CustomButton className="blogs">Blogs</CustomButton>
                    </Link>
                  </Col>
                  <Col lg={3} md={6} xs={6}>
                    <Link to="/contact">
                      <CustomButton className="contact">Contact</CustomButton>
                    </Link>
                  </Col>
                  <Col lg={3} md={6} xs={6}>
                    <Link to="/profiles">
                      <CustomButton className="profiles">Profiles</CustomButton>
                    </Link>
                  </Col>
                </Row>
              </div>
              <div className="introduction__short__social">
                <h6>Follow me on</h6>
                <div>
                  <Link to="/profiles/twitter">
                    <FaTwitter className="social-icon" />
                  </Link>
                  <Link to="/profiles/github">
                    <FaGithub className="social-icon" />
                  </Link>
                  <Link to="/profiles/medium">
                    <FaMedium className="social-icon" />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <hr />
          <div className="introduction__brief">
            <p>
              Hi there! Thanks for visiting my portfolio.
              <br /> I'm{' '}
              <a
                href="https://www.linkedin.com/in/yashbeldar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yashodip Beldar
              </a>
              , a Full Stack Developer, Technical Writer, and a passionate
              learner. I am pursuing B.Tech in Computer Science and Engineering
              at{' '}
              <a
                href="https://www.rcpit.ac.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                R C Patel Institute of Technology,Shirpur
              </a>
              , Maharshtra, India. I have worked on a wide range of technologies and
              have worked on projects ranging from small to large scale. I am a
              self-motivated and self-driven individual who is always looking
              for new challenges and opportunities.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Introduction;
