import React from 'react';
import '../styles/Reasons.scss';

const Reasons = () => (
  <div className="reasons-container">
    <div className="reason">
      <div className="reason-image reason-image-1" />
      <h5>We do the hard work</h5>
      <p>
        We review thousands of websites and sources that provide health
        information and only deliver information from respected and trusted
        sources.
      </p>
    </div>
    <div className="reason">
      <div className="reason-image reason-image-2" />
      <h5>Health information in one place</h5>
      <p>
        Our platform only delivers news for topics you’ve followed directly into
        your own personal feed so you don’t have to search through a sea of
        content.
      </p>
    </div>
    <div className="reason">
      <div className="reason-image-3" />
      <h5>Great patient experiences</h5>
      <p>
        Hearing from other people’s experiences directly is more helpful and
        important than ever. Share your health experience annonymously and help
        others.
      </p>
    </div>
  </div>
);

export default Reasons;
