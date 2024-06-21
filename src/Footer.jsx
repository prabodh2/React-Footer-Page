import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Reach us</h4>
          <p><i className="fas fa-phone"></i> +1012 3456 789</p>
          <p><i className="fas fa-envelope"></i> demo@gmail.com</p>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <p>Privacy Policy</p>
          <p>Terms & Services</p>
          <p>Terms of Use</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;