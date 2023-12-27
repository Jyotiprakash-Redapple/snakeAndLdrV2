import React, { useState } from "react";
import { animated } from "react-spring";
import { cordinate, generateGrid } from "../../arbitar/helper";
import useWindowDimension from "../../arbitar/hook/useWindowDimensions";
const Pawn = animated(({ position, player, parent_position }) => {
	const [view_port, _] = useState(useWindowDimension());

	// const device = view_port.width <= 600 ? cordinate["medium"] : cordinate["large"];
	const device = generateGrid(32);
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
			style={{
				position: "absolute",

				width: getPawnSize(),

				height: getPawnSize(),

				top:
					parent_position.player1.value === parent_position.player2.value && player === "r"
						? "-0px"
						: parent_position.player1.value === parent_position.player2.value && player === "y"
						? "0px"
						: "",
				left:
					parent_position.player1.value === parent_position.player2.value && player === "r"
						? "-0px"
						: parent_position.player1.value === parent_position.player2.value && player === "y"
						? "0px"
						: "",

				borderRadius: "50%",
				backgroundImage: player === "r" ? `url('/game_play/red.png')` : `url('/game_play/blue.png')`,
				backgroundSize: "cover", // Ensure the image covers the entire div
				transform: `translate(${device[position].x}px, ${device[position].y}px)`,
			}}
		/>
	);
});

export default Pawn;
