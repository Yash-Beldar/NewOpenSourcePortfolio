import React from 'react';
import { Helmet } from 'react-helmet';

import { BackToTop } from '../../common/components/UIElements';
import { ContactForm } from './components';

const Contact = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Contact | Yashodip Beldar</title>
        <meta
          name="description"
          content="Leave a message or schedule a google meet."
        />
        <meta property="og:title" content="Get in touch with Rakesh" />
        <meta
          property="og:description"
          content="Leave a message or schedule a google meet."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dc6lcsahh/image/upload/v1729320599/about_re6hkd.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646652254157"
        />
        <meta property="twitter:title" content="Get in touch with Rakesh" />
        <meta
          property="twitter:description"
          content="Leave a message or schedule a google meet."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dc6lcsahh/image/upload/v1729320599/about_re6hkd.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646652254157"
        />
      </Helmet>
      <ContactForm />
      <BackToTop />
    </React.Fragment>
  );
};

export default Contact;
