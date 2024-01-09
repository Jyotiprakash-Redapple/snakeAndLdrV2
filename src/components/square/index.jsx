import React from "react";

const Square = ({ number }) => {
	return (
		<div
			className='square'
			style={{
				width: "35px",
				height: "35px",
				// color: "red",
				// border: "2px solid red",
				boxSizing: "border-box",
			}}>
			{/* {number} */}
		</div>
	);
};

export default Square;
