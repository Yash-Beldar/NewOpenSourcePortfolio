import React from 'react';
import { Container, Stack } from 'react-bootstrap';
// import { EducationItem } from '../../../common/components/UIElements';
import { Company } from '../../../assets/images';
import { FaCheck } from 'react-icons/fa';
import './Experience.scss';

const ExperienceItem = (props) => {
  return (
    <div className="experience__content__item">
      <Stack direction="horizontal" gap={5}>
        <div className="experience__content__item__img">
          <img
            src={props.companyImgUrl ? props.companyImgUrl : Company}
            alt={props.company}
          />
        </div>
        <div className="experience__content__item__details mt-3">
          <h3>{props.company}</h3>
          <h5>{props.position}</h5>
          <span className="type">
            <span
              style={{
                backgroundColor:
                  props.endDate === 'Present' ? 'rgb(51, 255, 0)' : '#ff0000'
              }}
            />{' '}
            {props.type}
          </span>
          {props.grade && ( // Conditional rendering for grade
            <span className="grade">
              <FaCheck className="check-icon" /> {props.grade}
            </span>
          )}

          <p>
            {props.startDate} - {props.endDate}
          </p>
        </div>
      </Stack>
    </div>
  );
};

const Experience = () => {
  return (
    <div id="experience">
      <Container>
        <div className="experience">
          <h2>Experience</h2>
          <div className="experience__content">
            {/* Experience Section */}
            <ExperienceItem
              company="Akatsuki Coding Club"
              companyImgUrl="https://pbs.twimg.com/profile_images/1425284890799460354/phO6uvw5_400x400.jpg"
              type="Volunteering"
              position="Core Team Member"
              startDate="Oct 2023"
              endDate="Present"
            />
            <div className="line"></div>
            <ExperienceItem
              company="R3SYS PVT. LTD."
              institutionImgUrl="https://example.com/r3sys-logo.jpg" // Add the correct image URL for R3SYS
              type="Internship"
              position="Java Developer Intern"
              startDate="June 2023"
              endDate="July 2023"
            />
            <div className="line"></div>
            <ExperienceItem
              company="Skill Bhavan"
              companyImgUrl="https://pbs.twimg.com/profile_images/1512091770506838018/eMqiYCHZ_400x400.jpg"
              position="Web Devloper Intern"
              type="Internship"
              startDate="Mar 2024"
              endDate="April 2024"
            />
          </div>
        </div>
      </Container>

      {/* Education Section */}
      <Container>
        <div className="experience">
          <h2>Education</h2>
          <div className="experience__content">
            <ExperienceItem
              company="R C Patel Institute of Technology, Shirpur"
              institutionImgUrl="https://example.com/sss-logo.jpg" // Replace with an appropriate logo
              type="Bachelor of Technology (B.Tech)"
              position="Computer Engineering"
              grade="CGPA: 7.66 (Upto 6th Sem)"
              startDate="Nov 2021"
              endDate="Present"
            />
            <div className="line"></div>
            <ExperienceItem
              company="A S C College, Chopda"
              institutionImgUrl="https://example.com/hsc-logo.jpg" // Replace with an appropriate logo
              type="HSC"
              position="Science"
              grade="84.33 %"
              startDate="June 2020"
              endDate="July 2021"
            />
            <div className="line"></div>
            <ExperienceItem
              company="Vidya Bharati Vidyalay, Virwade"
              institutionImgUrl="https://example.com/university-logo.jpg" // Replace with an appropriate logo
              type="SSC"
              grade="81.40 %"
              position="General"
              startDate="June 2018"
              endDate="June 2019"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
