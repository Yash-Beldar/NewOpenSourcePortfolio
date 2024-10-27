import React from 'react';
import { Container, Stack } from 'react-bootstrap';
// import { EducationItem } from '../../../common/components/UIElements';
import { Company } from '../../../assets/images';
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
              company="R3SYS"
              companyImgUrl="https://example.com/r3sys-logo.jpg" // Add the correct image URL for R3SYS
              type="Full Time"
              position="Software Engineer"
              startDate="August 2024"
              endDate="Present"
            />
            {/* <div className="line"></div> */}

            {/* Education Section */}
            <ExperienceItem
              institution="School for Secondary Studies (SSC)"
              institutionImgUrl="https://example.com/sss-logo.jpg" // Replace with an appropriate logo
              degree="10th Grade"
              startDate="March 2018"
              endDate="March 2019"
            />
            <div className="line"></div>
            <ExperienceItem
              institution="Higher Secondary School (HSC)"
              institutionImgUrl="https://example.com/hsc-logo.jpg" // Replace with an appropriate logo
              degree="12th Grade"
              startDate="March 2020"
              endDate="March 2021"
            />
            <div className="line"></div>
            <ExperienceItem
              institution="University Name"
              institutionImgUrl="https://example.com/university-logo.jpg" // Replace with an appropriate logo
              degree="Bachelor of Technology (B.Tech)"
              field="Computer Science"
              startDate="August 2021"
              endDate="Present"
            />
            <div className="line"></div>
            {/*
            <div className="line"></div>
            <ExperienceItem
              company="Google Developer Student Club - LPU"
              companyImgUrl="https://pbs.twimg.com/profile_images/1425284890799460354/phO6uvw5_400x400.jpg"
              type="Volunteering"
              position="Team Member"
              startDate="Mar 2022"
              endDate="Present"
            />
            <div className="line"></div>
            <ExperienceItem
              company="Aviyel"
              companyImgUrl="https://pbs.twimg.com/profile_images/1512091770506838018/eMqiYCHZ_400x400.jpg"
              position="Technical Writer"
              type="Volunteering"
              startDate="Mar 2022"
              endDate="Oct 2022"
            /> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
