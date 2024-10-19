import React from 'react';
import { InlineWidget } from 'react-calendly';

const Calendly = () => {
  return (
    <div>
      <InlineWidget url="https://calendly.com/yashodipbeldar?hide_landing_page_details=1&hide_gdpr_banner=1" />
    </div>
  );
};

export default Calendly;
