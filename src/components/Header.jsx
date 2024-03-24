import "./Header.css";
import React from "react";
import Logo from "../assets/logo.svg";

export default function Header() {
	return (
		<div>
			<header>
				<img className="logo" src={Logo} alt="pargo-logo" />
				<button>
					<a href="/">Home</a>
				</button>
				<button>
					<a href="/">About</a>
				</button>
				<div className="spacer"></div>
				<button>
					<a href="/">Login</a>
				</button>
			</header>
		</div>
	);
}
