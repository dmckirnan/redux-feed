import React from 'react';

import '../styles/Footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="footer-links">
      <a href="https://www.medcircle.com/about">ABOUT</a>
      <a href="https://www.medcircle.com/about#faq">FAQ</a>
      <a href="https://www.medcircle.com/about#contact-us">CONTACT</a>
    </div>
    <div className="footer-social-media">
      <a
        href="https://www.facebook.com/medcircle"
        className="footer-button footer-facebook"
      />
      <a
        href="https://twitter.com/medcircle"
        className="footer-button footer-twitter"
      />
      <a
        href="https://www.instagram.com/medcircleapp/"
        className="footer-button footer-instagram"
      />
    </div>
    <h6>
      <a href="#" className="footer-terms">
        Terms and conditions
      </a>
      {' / '}
      <a href="#" className="footer-terms">
        Privacy Policy
      </a>
    </h6>
    <p>
      MedCircle is not a referral service and does not recommend, endorse,
      discourage, screen or approve any providers or any medical procedures,
      products or services, nor does Medcircle provide medical advice of any
      kind. This information is not specific medical advice and does not replace
      information you receive from your health care provider. You must talk with
      your health care provider for complete information about your health and
      treatment options. Only your health care provider has the knowledge and
      training to provide advice that is right for you. The use of MedCircle
      content is governed by the MedCircle Terms of Use ©2017 MedCircle, inc.
      all rights reserved.
    </p>
  </div>
);

export default Footer;
