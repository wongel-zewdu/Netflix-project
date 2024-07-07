import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CopyrightIcon from "@mui/icons-material/Copyright";
const Footer = () => {
  return (
    <div>
      <div className="AllFooterSection">
        <div className="icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <section className="FooterSection">
          <ul className="FooterList">
            <div>
              <li>Audio Relation</li>
              <li>Investor Relations</li>
              <li>legal notice</li>
            </div>
            <div>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookies Preference</li>
            </div>
            <div>
              <li>Gift Cards</li>
              <li>Terms of user</li>
              <li>Corporate Information</li>
            </div>
            <div>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </div>
          </ul>
        </section>
        <section className="ServiceSection">
          <div>
            <p className="Service">Service Code</p>
          </div>
          <div>
            {/* <CopyrightIcon /> */}
            <p>&copy; 1997-2024 Netflix, Inc.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
