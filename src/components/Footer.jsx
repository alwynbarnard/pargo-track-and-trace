import "./Footer.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faTwitter,
	faInstagram,
	faLinkedinIn,
	faYoutube,
	faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/logo.svg";

export default function Footer() {
	return (
		<footer className="footer">
			<img className="logo" src={Logo} alt="pargo-logo" />
			<div>ALL RIGHTS RESERVED &copy; {new Date().getFullYear()}</div>
			<div className="socials">
				<FontAwesomeIcon className="footer-icon" icon={faFacebook} />
				<FontAwesomeIcon className="footer-icon" icon={faTwitter} />
				<FontAwesomeIcon className="footer-icon" icon={faInstagram} />
				<FontAwesomeIcon className="footer-icon" icon={faLinkedinIn} />
				<FontAwesomeIcon className="footer-icon" icon={faYoutube} />
				<FontAwesomeIcon className="footer-icon" icon={faGoogle} />
			</div>
		</footer>
	);
}
