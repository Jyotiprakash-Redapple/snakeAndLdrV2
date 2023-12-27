import React from "react";

const Square = ({ number, player, turn }) => {
	return (
		<div
			className="square"
			style={{
				width: "35px",
				height: "35px",
				border: "2px solid red",
				// backgroundColor: "red",
				boxSizing: "border-box",
			}}>
			{number}
		</div>
	);
};

export default Square;
