import React from 'react';
import { Helmet } from 'react-helmet';

import { BackToTop } from '../../common/components/UIElements';
import {
  BlogsHistory,
  ContributionsGraph,
  Introduction,
  Details,
  Experience
} from './components';

const About = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>About | Yashodip Beldar</title>
        <meta name="description" content="Know more about me." />
        <meta property="og:title" content="About Yashodip Beldar" />
        <meta property="og:description" content="Know more about me." />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dc6lcsahh/image/upload/v1729320599/about_re6hkd.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646652253766"
        />
        <meta property="twitter:title" content="About Yashodip Beldar" />
        <meta property="twitter:description" content="Know more about me." />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dc6lcsahh/image/upload/v1729320599/about_re6hkd.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646652253766"
        />
      </Helmet>
      <Introduction />
      <ContributionsGraph />
      <BlogsHistory />
      <Experience />
      <Details />
      <BackToTop />
    </React.Fragment>
  );
};

export default About;
