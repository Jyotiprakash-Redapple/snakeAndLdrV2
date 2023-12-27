import React from "react";
import Square from "../square";
// import Popup from "../../component/popup/popup";
import { initBoardPosition } from "../../arbitar/helper";
import Pawn from "../pawn";
function board({ playerPositions, turn }) {
	const renderSquares = () => {
		const squares = [];

		for (let i = 0; i < initBoardPosition.length; i++) {
			const player = getPlayerAtPosition(initBoardPosition[i]);

			squares.push(<Square key={i} number={initBoardPosition[i]} player={player} turn={turn} />);
		}

		return squares;
	};

	const getPlayerAtPosition = (position) => {
		let playerIdentity = [];
		for (const [key, _] of Object.entries(playerPositions)) {
			if (_.value === position) {
				playerIdentity.push({ player: key, color: _.color });
			}
		}

		return playerIdentity;
	};

	return (
		<>
			<img src="/game_play/gameBoard.png" className="game_board_img"></img>
			<div className="board_temp">
				{renderSquares()}
				<Pawn position={playerPositions.player1.value} parent_position={playerPositions} player={turn} />
				<Pawn position={playerPositions.player2.value} parent_position={playerPositions} player={turn} />
			</div>
			{/* <Popup></Popup> */}
		</>
	);
}

export default board;
