import React from "react";
import { Link } from "react-router-dom";
import './Terms.scss';

export default function Terms() {
  return (
    <main className="terms-container">
      <header>
        <h1 className="terms-title">Terms and Service</h1>
      </header>
      <p>
        Welcome to bLog/In! By accessing and using our website, you agree to
        comply with and be bound by the following terms and conditions. Please
        read these terms carefully before using our services.
      </p>
      <h4 className="terms-sub-title">1. Acceptance of Terms</h4>
      <p>
        By accessing or using bLog/in (referred to as "we," "us," or "our"), you
        acknowledge that you have read, understood, and agree to be bound by
        these Terms of Service. If you do not agree with any part of these
        terms, please do not use our website.
      </p>
      <h4 className="terms-sub-title">2. User Conduct</h4>
      <p>As a user of bLog/In, you agree to:</p>
      <ul>
        <li className='terms-list-item'>
          Abide by all applicable local, state, national, and international laws
          and regulations.
        </li>
        <li className='terms-list-item'>
          Be responsible for maintaining the confidentiality of your account
          information.
        </li>
        <li className='terms-list-item'>
          Refrain from engaging in any activity that may interfere with the
          proper functioning of the website.
        </li>
      </ul>
      <h4 className="terms-sub-title">3. Content and Copyright</h4>
      <p>
        All content on bLog/In, including text, images, and multimedia, is the
        property of bLog/In or its respective owners. Unauthorized use,
        reproduction, or distribution of any content on this website is strictly
        prohibited.
      </p>
      <h4 className="terms-sub-title">4. User Contributions</h4>
      <p>
        We encourage users to contribute and share content on [Your Blog Name],
        subject to the following guidelines:
      </p>
      <ul>
        <li className='terms-list-item'>Content must not violate any applicable laws or regulations.</li>
        <li className='terms-list-item'>
          Content must not infringe upon the rights of others, including
          copyright, trademark, or privacy rights.
        </li>
        <li className='terms-list-item'>Content must not be offensive, defamatory, or harmful.</li>
      </ul>
      <p>
        We reserve the right to remove any user-contributed content that
        violates these guidelines.
      </p>
      <h4 className="terms-sub-title">5. Privacy Policy</h4>
      <p>
        Your privacy is important to us. Please review our{" "}
        <Link to="/privacy">Privacy Policy</Link> to understand how we collect,
        use, and safeguard your personal information.
      </p>
      <h4>6. Changes to Terms</h4>
      <p>
        bLog/In reserves the right to update or modify these Terms of Service at
        any time without prior notice. It is your responsibility to review these
        terms periodically for changes.
      </p>
      <h4 className="terms-sub-title">7. Contact Information</h4>
      <p>
        If you have any questions or concerns regarding these Terms of Service,
        please contact us at [your contact email]. Thank you for being a part of
        bLog/In!
      </p>
    </main>
  );
}
