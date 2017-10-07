import React from 'react';

import Reasons from './Reasons.jsx';
import Footer from './Footer.jsx';
import '../styles/FooterContainer.scss';

const FooterContainer = () => (
  <div className="footer-container">
    <h3>Why MedCircle?</h3>
    <Reasons />
    <Footer />
  </div>
);

export default FooterContainer;
