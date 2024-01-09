import React from "react";
import Square from "../square";

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
			<img src='/asset/game_play/gameBoard.png' className='game_board_img'></img>

			<div className='board_temp'>
				<div className='snakeLdr'>
					<img
						src='/asset/game_play/ldr1.png'
						className='ldr1'
						style={{
							top: "8px",
							position: "absolute",
							height: "272px",
							objectFit: "contain",
							left: "98px",
						}}></img>
					<img
						src='/asset/game_play/ldr2.png'
						className='ldr2'
						style={{
							width: "57px",
							top: "83px",
							position: "absolute",
							height: "249px",
							objectFit: "contain",
							left: "66px",
						}}></img>
					<img
						src='/asset/game_play/ldr3.png'
						className='ldr3'
						style={{
							width: "43px",
							top: "112px",
							position: "absolute",
							/* height: 249px; */
							objectFit: "contain",
							left: "270px",
						}}></img>
					<img
						src='/asset/game_play/ldr4.png'
						className='ldr4btm'
						style={{
							width: "50px",
							top: "232px",
							position: "absolute",
							objectFit: "contain",
							left: "270px",
						}}></img>
					<img
						src='/asset/game_play/ldr4.png'
						className='ldr4top'
						style={{
							width: "50px",
							top: "9px",
							position: "absolute",
							objectFit: "contain",
							left: "20px",
						}}></img>
					<img
						src='/asset/game_play/ldr6.png'
						className='ldr6'
						style={{
							width: "50px",
							top: "111px",
							position: "absolute",
							objectFit: "contain",
							left: "13px",
						}}></img>

					<img
						src='/asset/game_play/slr1.png'
						className='slr1'
						style={{
							width: "50px",
							top: "226px",
							position: "absolute",
							objectFit: "contain",
							left: "118px",
						}}></img>
					<img
						src='/asset/game_play/slr2.png'
						className='slr2'
						style={{
							width: "116px",
							top: "94px",
							position: "absolute",
							objectFit: "contain",
							left: "18px",
						}}></img>

					<img
						src='/asset/game_play/slr3.png'
						className='slr3'
						style={{
							width: "69px",
							top: "94px",
							position: "absolute",
							objectFit: "contain",
							left: "190px",
						}}></img>

					<img
						src='/asset/game_play/slr4.png'
						className='slr4'
						style={{
							width: "45px",
							top: "239px",
							position: "absolute",
							objectFit: "contain",
							left: "8px",
						}}></img>
					<img
						src='/asset/game_play/slr5.png'
						className='slr5'
						style={{
							width: "45px",
							top: "16px",
							position: "absolute",
							objectFit: "contain",
							left: "219px",
						}}></img>

					<img
						src='/asset/game_play/slr6.png'
						className='slr6'
						style={{
							width: "45px",
							top: "81px",
							position: "absolute",
							objectFit: "contain",
							left: "24px",
						}}></img>
					<img
						src='/asset/game_play/slr7.png'
						className='slr7'
						style={{
							width: "125px",
							top: "45px",
							position: "absolute",
							objectFit: "contain",
							left: "147px",
						}}></img>
				</div>
				{renderSquares()}
				<Pawn position={playerPositions.player1.value} parent_position={playerPositions} player={playerPositions.player1.color} />
				<Pawn position={playerPositions.player2.value} parent_position={playerPositions} player={playerPositions.player2.color} />
			</div>
		</>
	);
}

export default board;
