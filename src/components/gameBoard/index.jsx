import React from "react";
import Square from "../square";
import SnakeAndLdr from "../snakeAndLadder";
import { initBoardPosition } from "../../arbitar/helper";
import Pawn from "../pawn";
function board({ playerPositions, turn, animate }) {
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
			<div className="grid-main">
				<SnakeAndLdr />
				<div className="board-grid">
					{renderSquares()}
					<Pawn
						position={playerPositions.player1.value}
						parent_position={playerPositions}
						player={playerPositions.player1.color}
						animate={animate}
					/>
					<Pawn
						position={playerPositions.player2.value}
						parent_position={playerPositions}
						player={playerPositions.player2.color}
						animate={animate}
					/>
				</div>
			</div>
			<img src="/asset/game_play/gameBoard.png" alt="" />
		</>
	);
}

export default board;
