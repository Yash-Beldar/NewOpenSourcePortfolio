import React, { useEffect, useRef } from 'react';
import 'github-calendar/dist/github-calendar-responsive.css'; // Import the CSS for responsive styles
import GitHubCalendar from 'github-calendar';
import { Container } from 'react-bootstrap';
import './ContributionsGraph.scss'; // Assuming you have your custom styles here

const ContributionsGraph = () => {
  const calendarRef = useRef(null); // Create a reference to the calendar container

  useEffect(() => {
    if (calendarRef.current) {
      // Initialize GitHubCalendar on the referenced div
      GitHubCalendar(calendarRef.current, 'Mr-Yash-beldar', {
        responsive: true, // Enable responsive functionality
        tooltips: true,   // Enable tooltips for the contribution graph
        // Uncomment and set up proxy if needed
        // proxy (username) {
        //   return fetch(`https://your-proxy.com/github?user=${username}`);
        // }
      });
    }
  }, []); // Empty dependency array ensures this effect runs once after the component is mounted

  return (
    <Container>
      <div className="contributions-graph">
        <h2>Github Contributions</h2>
        <div ref={calendarRef} className="calendar">
         
        </div>
      </div>
    </Container>
  );
};

export default ContributionsGraph;
