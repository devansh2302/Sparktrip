import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h4>Abhinav Tripathi</h4>
        <div className="footer-icons">
          <a href="https://github.com/Ab2602" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/abhinav-tripathi-aab6a91b1/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/abhinavtripathi02?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="footer-center">
        <p>© All rights reserved Sparktrip.in</p>
      </div>
      <div className="footer-right">
        <h4>Devansh Sharma</h4>
        <div className="footer-icons">
          <a href="https://github.com/devansh2302" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/devansh-sharma-4a4a07210/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/devanshsharmamusic/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>

  );
}

export default Footer;
