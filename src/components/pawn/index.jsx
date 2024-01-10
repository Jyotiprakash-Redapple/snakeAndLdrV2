import React, { useState } from "react";
import { animated } from "react-spring";
import { generateArea, cordinate } from "../../arbitar/helper";
import useWindowDimension from "../../arbitar/hook/useWindowDimensions";

function getSize(width) {
	if (width <= 320) {
		return "xs";
	} else if (width > 320 && width <= 380) {
		return "sm";
	} else {
		return "root";
	}
}
const Pawn = animated(({ position, parent_position, player }) => {
	const [view_port, _] = useState(useWindowDimension());
	const device = cordinate["small"][getSize(window.innerWidth)];
	console.log(getSize(window.innerWidth));
	const getPawnSize = () => {
		// if (view_port.width <= 600) {
		// 	return parent_position.player1.value === parent_position.player2.value ? "30px" : "40px";
		// } else {
		// 	return parent_position.player1.value === parent_position.player2.value ? "40px" : "50px";
		// }

		return parent_position.player1.value === parent_position.player2.value ? "20px" : "25px";
	};

	return (
		<animated.div
			className={`${getSize(window.innerWidth)}`}
			id={`pawn-${player}`}
			style={{
				position: "absolute",
				zIndex: 2000,
				width: getPawnSize(),

				height: getPawnSize(),

				top:
					parent_position.player1.value === parent_position.player2.value && player === "r"
						? "-7px"
						: parent_position.player1.value === parent_position.player2.value && player === "y"
						? "7px"
						: "",
				left:
					parent_position.player1.value === parent_position.player2.value && player === "r"
						? "-7px"
						: parent_position.player1.value === parent_position.player2.value && player === "y"
						? "7px"
						: "",

				borderRadius: "50%",
				backgroundImage: player === "r" ? `url('/asset/game_play/red.png')` : `url('/asset/game_play/blue.png')`,
				backgroundSize: "cover", // Ensure the image covers the entire div
				transform: `translate(${device[position].x}px, ${device[position].y}px)`,
			}}
		/>
	);
});

export default Pawn;
