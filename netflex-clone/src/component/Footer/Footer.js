import React from 'react'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";
const Footer = () => {
  return (
    <>
     <footer className="footer">

      <div className="footer-container">

        {/* SOCIAL ICONS */}
        <ul className="social-icons">

          <li>
            <a href="#facebook">
              <FacebookIcon />
            </a>
          </li>

          <li>
            <a href="#instagram">
              <InstagramIcon />
            </a>
          </li>

          <li>
            <a href="#youtube">
              <YouTubeIcon />
            </a>
          </li>

        </ul>


        {/* FOOTER LINKS */}
        <div className="footer-links">

          {/* COLUMN 1 */}
          <ul>
            <li><a href="#audio">Audio Description</a></li>
            <li><a href="#investor">Investor Relations</a></li>
            <li><a href="#legal">Legal Notice</a></li>
          </ul>


          {/* COLUMN 2 */}
          <ul>
            <li><a href="#help">Help Center</a></li>
            <li><a href="#jobs">Jobs</a></li>
            <li><a href="#cookie">Cookie Preferences</a></li>
          </ul>


          {/* COLUMN 3 */}
          <ul>
            <li><a href="#gift">Gift Cards</a></li>
            <li><a href="#terms">Terms of Use</a></li>
            <li><a href="#corporate">Corporate Information</a></li>
          </ul>


          {/* COLUMN 4 */}
          <ul>
            <li><a href="#media">Media Center</a></li>
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>

        </div>


        {/* SERVICE CODE */}
        <div className="service-code">
          Service Code
        </div>


        {/* COPYRIGHT */}
        <p>
          © 1997-2024 NETFLX, Inc.
        </p>

      </div>

    </footer>
    </>
  )
}

export default Footer
