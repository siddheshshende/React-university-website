import React from "react";
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../Css/FooterStyle.css';

const Footer = () => {
    return (
    
        <footer>
            <div className="container container-flex">
                <div className="icons">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <XIcon className="icon footer-icon" />
                    </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon className="icon footer-icon" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon className="icon footer-icon" />
                    </a>
                   
                </div>
               
                <div className="copyright">
                    <p>Copyright &copy; 2024 Sage University. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
