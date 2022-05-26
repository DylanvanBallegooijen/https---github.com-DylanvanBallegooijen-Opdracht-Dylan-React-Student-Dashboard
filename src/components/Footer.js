import React from "react"
import "../styling/globals.css"
import { FaCopyright } from "react-icons/fa"

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-container">
				</div>

			<p className="naw">
				{" "}
				Dylan van Ballegooijen
				<FaCopyright className="footer-icon" />
				2022 Copyright
			</p>
		</div>
	)
}
export default Footer
