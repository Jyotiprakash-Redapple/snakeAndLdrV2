import React, { useState } from "react";
import { animated } from "react-spring";
import { generateArea, cordinate } from "../../arbitar/helper";
import useWindowDimension from "../../arbitar/hook/useWindowDimensions";

// function PawnImage({ position, parent_position, player }) {
// 	const getPawnSize = () => {
// 		return parent_position.player1.value === parent_position.player2.value ? "10px" : "22px";
// 	};
// 	return (
// 		<>
// 			{player === "r" && (
// 				<img
// 					id={`pawn-${player}`}
// 					src={"/asset/game_play/red.png"}
// 					alt={""}
// 					style={{ width: getPawnSize() }}
// 				/>
// 			)}
// 			{player === "b" && (
// 				<img
// 					id={`pawn-${player}`}
// 					src={"/asset/game_play/blue.png"}
// 					alt={""}
// 					style={{ width: getPawnSize() }}
// 				/>
// 			)}
// 			{/* <img
// 				src={player === "r" ? "/asset/game_play/red.png" : "/asset/game_play/blue.png"}
// 				alt={""}
// 				style={{ width: getPawnSize() }}
// 			/> */}
// 		</>
// 	);
// }
function getSize(width) {
	if (width <= 320) {
		return "xs";
	} else if (width > 320 && width <= 380) {
		return "sm";
	} else {
		return "root";
	}
}

function getPawnArea(area) {
	switch (area) {
		case "root": {
			return "27px";
		}
		case "xs": {
			return "25px";
		}
		case "sm": {
			return "29px";
		}
	}
}
const Pawn = animated(({ position, parent_position, player, animate }) => {
	const device = cordinate["small"][getSize(window.innerWidth)];
	console.log(getSize(window.innerWidth));
	const getPawnSize = () => {
		return parent_position.player1.value === parent_position.player2.value ? "15px" : "18px";
	};

	return (
		<animated.div
			className={`${getSize(window.innerWidth)}`}
			id={`pawn-${player}`}
			style={{
				position: "absolute",
				zIndex: 100,
				width: getPawnArea(getSize(window.innerWidth)),

				height: getPawnArea(getSize(window.innerWidth)),

				transform: `translate(${device[position].x}px, ${device[position].y}px)`,
			}}>
			<img
				src={player === "r" ? "/asset/game_play/red.png" : "/asset/game_play/blue.png"}
				alt={""}
				style={{
					width: getPawnSize(),
					paddingTop:
						parent_position.player1.value === parent_position.player2.value && player === "r"
							? "-7px"
							: parent_position.player1.value === parent_position.player2.value && player === "y"
							? "7px"
							: "",
					paddingLeft:
						parent_position.player1.value === parent_position.player2.value && player === "r"
							? "-7px"
							: parent_position.player1.value === parent_position.player2.value && player === "y"
							? "7px"
							: "",
					transform: animate ? "scale(1.15)" : "",
				}}
			/>
		</animated.div>
	);
});

export default Pawn;
