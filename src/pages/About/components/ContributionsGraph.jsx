import React from 'react';
import 'github-calendar/dist/github-calendar-responsive.css'; // Import the CSS for responsive styles
import { Container } from 'react-bootstrap';
import './ContributionsGraph.scss'; // Assuming you have your custom styles here

const ContributionsGraph = () => {
  return (
    <Container>
      <div className="contributions-graph">
        <h2>Github Contributions</h2>
        <div  className="calendar">
          <img 
            src="[![Ashutosh's github activity graph](https://github-readme-activity-graph.vercel.app/graph?username=Mr-Yash-beldar&bg_color=ffcfe9&color=9e4c98&line=9e4c98&point=403d3d&area=true&hide_border=true)](https://github.com/ashutosh00710/github-readme-activity-graph)"
            alt="contribution-graph"
          />
        </div>
      </div>
    </Container>
  );
};

export default ContributionsGraph;
