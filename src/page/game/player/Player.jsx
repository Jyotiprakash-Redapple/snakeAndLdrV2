// import SoundAlert from "../../../audio/alert.mp3";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";

import Board from "../../../components/gameBoard";

import { useAppContext } from "../../../arbitar/context/Provider";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { IoMdHeart } from "react-icons/io";
import { FaHeartBroken } from "react-icons/fa";
import Popupbox from "../../../components/popup/popupbox";
import { snakes, ladder, generateArea, cordinate } from "../../../arbitar/helper";

import { makeNewMove, dectateWin, makeAnimateMove, animateDice, currentDice } from "../../../arbitar/context/reducer/move";

import ReactDice from "react-dice-complete";
import PawnMovementSound from "../../../audio/pawn_movement.mp3";
import roolingSound from "../../../audio/rpg-dice-rolling-95182.mp3";
import { gameStatus } from "../../../arbitar/context/reducer/constant";
var soundPlay = true;
function getSize(width) {
	if (width <= 320) {
		return "xs";
	} else if (width > 320 && width <= 380) {
		return "sm";
	} else {
		return "root";
	}
}
function PlayWithPlayer() {
	const [quitGame, setQuitGame] = useState(false);
	const [soundStatus, setSoundStatus] = useState(true);
	const [animate, setAnimate] = useState(false);
	const diceRef = useRef();
	const diceAnimateRef = useRef();

	const router = useNavigate();
	// 	const { appState, dispatch } = useAppContext();
	// 	const handelQuitGame = () => {
	// 		if (appState.socket) {
	// 			appState.socket.emitDisConnect();
	// 		}
	// 	};
	/**
	 * function for calculkate progress bar
	 */

	// function updateProgressBar(time) {
	// 	let remainingTime = appState.totalTurnTime - Number(time);
	// 	let percentageComplete = 100 - (remainingTime / appState.totalTurnTime) * 100;
	// 	let strokeDashOffsetValue = 100 - percentageComplete;

	// 	// console.log("Percentage Complete:", percentageComplete, "%");
	// 	// console.log("Remaining Time:", remainingTime, "seconds");

	// 	if (isCloseToOne(percentageComplete, 0.000001)) {
	// 		percentageComplete = 0;
	// 	}
	// 	return percentageComplete;
	// }

	// function isCloseToOne(value, epsilon) {
	// 	return Math.abs(1 - value) < epsilon;
	// }

	/**
	 *
	 * @param {*} player_turn
	 * @param {*} diceRoll
	 * @function movePlayer
	 * @description pawn movement logic
	 */
	// async function movePlayer(player_turn, diceRoll) {
	// 	let currentPosition = 0;
	// 	setAnimate(true);

	// 	if (appState?.position.player1.color === player_turn) {
	// 		currentPosition += appState.position.player1.value;
	// 	} else {
	// 		if (appState?.position.player2.color === player_turn) {
	// 			currentPosition += appState.position.player2.value;
	// 		} else {
	// 			throw new Error("Invalid Player");
	// 		}
	// 	}

	// 	for (let i = 1; i <= diceRoll; i++) {
	// 		setTimeout(async () => {
	// 			currentPosition += 1;

	// 			if (soundStatus) {
	// 				let soundSource = PawnMovementSound;
	// 				let sound = new Audio(soundSource);
	// 				sound.play();
	// 			}
	// 			dispatch(
	// 				makeAnimateMove({
	// 					player_turn,
	// 					currentPosition: currentPosition <= 100 ? Number(currentPosition) : 100,
	// 				})
	// 			);
	// 			if (currentPosition >= 100) {
	// 				dispatch(dectateWin(player_turn));
	// 				return;
	// 			}

	// 			if (i === diceRoll) {
	// 				await handleSnakeAndLadder(player_turn, currentPosition);
	// 				dispatch(currentDice({ animate: false, dice: "" }));
	// 			}
	// 		}, i * 225.5);
	// 	}
	// }

	/**
	 *
	 * @param {*} player_turn
	 * @param {*} position
	 * @function handleSnakeAndLadder
	 * @description according to position and player turn handel sanke and ladder
	 * @returns end of function execute
	 */

	// const handleSnakeAndLadder = async (player_turn, position) => {
	// 	let currentPosition = position;
	// 	let player = player_turn === "r" ? "player-1" : "player-2";

	// 	const device = cordinate["small"][getSize(window.innerWidth)];
	// 	if (snakes[position]?.length >= 1) {
	// 		const snakePositionArr = snakes[position];

	// 		for (let i = 0; i < snakePositionArr.length; i++) {
	// 			currentPosition = snakePositionArr[i];
	// 			let cord = device[currentPosition];

	// 			await animatePawn(player_turn, player, currentPosition, cord.x, cord.y);
	// 		}

	// 		if (ladder[snakePositionArr[snakePositionArr.length - 1]]?.length >= 1) {
	// 			const ladderPositionArr = ladder[snakePositionArr[snakePositionArr.length - 1]];

	// 			for (let i = 0; i < ladderPositionArr.length; i++) {
	// 				currentPosition = ladderPositionArr[i];
	// 				let cord = device[currentPosition];

	// 				await animatePawn(player_turn, player, currentPosition, cord.x, cord.y);
	// 			}
	// 		}
	// 	} else if (ladder[position]?.length >= 1) {
	// 		const ladderPositionArr = ladder[position];

	// 		for (let i = 0; i < ladderPositionArr.length; i++) {
	// 			currentPosition = ladderPositionArr[i];
	// 			let cord = device[currentPosition];

	// 			await animatePawn(player_turn, player, currentPosition, cord.x, cord.y);
	// 		}

	// 		if (snakes[ladderPositionArr[ladderPositionArr.length - 1]]?.length >= 1) {
	// 			const snakePositionArr = snakes[ladderPositionArr[ladderPositionArr.length - 1]];

	// 			for (let i = 0; i < snakePositionArr.length; i++) {
	// 				currentPosition = snakePositionArr[i];
	// 				let cord = device[currentPosition];

	// 				await animatePawn(player_turn, player, currentPosition, cord.x, cord.y);
	// 			}
	// 		}
	// 	}

	// 	dispatch(makeNewMove({ player_turn, currentPosition }));
	// 	setTimeout(() => {
	// 		setAnimate(false);
	// 	}, 1000);
	// };

	// const animatePawn = async (turn, player, position, x, y) => {
	// 	return new Promise((resolve) => {
	// 		const pawnElement = document.getElementById(`pawn-${turn}`);

	// 		if (pawnElement) {
	// 			pawnElement.style.transition = "transform 0.3s ease-in-out";
	// 			pawnElement.style.transform = `translate(${x}px, ${y}px)`;
	// 		}

	// 		setTimeout(() => {
	// 			resolve();
	// 		}, 280);
	// 	});
	// };
	// function handelRollDice() {
	// 	localStorage.setItem("GAME_START_SNLIO", "1");
	// 	var should_play = true;
	// 	if (!animate) {
	// 		dispatch(animateDice(true));
	// 		diceRef?.current?.rollAll();
	// 		console.log("diceRef", diceRef);
	// 		if (soundStatus) {
	// 			if (should_play) {
	// 				should_play = !should_play;
	// 				let soundSource = roolingSound;
	// 				let sound = new Audio(soundSource);
	// 				sound.play();
	// 				sound.onended = () => {
	// 					should_play = true;
	// 				};
	// 			}
	// 		}
	// 	}
	// }
	// function handelAutoRollDice() {
	// 	localStorage.setItem("GAME_START_SNLIO", "1");
	// 	var should_play = true;
	// 	if (!animate) {
	// 		diceAnimateRef?.current?.rollAll();

	// 		console.log(diceAnimateRef.current, "animate dice====>");
	// 		if (soundStatus) {
	// 			if (should_play) {
	// 				// should_play = !should_play;
	// 				// let soundSource = roolingSound;
	// 				// let sound = new Audio(soundSource);
	// 				// sound.play();
	// 				// sound.onended = () => {
	// 				// 	should_play = true;
	// 				// };
	// 			}
	// 		}
	// 	}
	// }
	// useLayoutEffect(() => {
	// 	localStorage.removeItem("GAME_START_SNLIO");
	// }, []);
	// // console.log(appState, "current appp state");
	// useEffect(() => {
	// 	if (appState.diceAnimate === true) {
	// 		handelAutoRollDice();
	// 	}
	// }, [appState.diceAnimate]);

	let position = {
		player1: {
			color: "r",
			value: 1,
			score: 0,
			user_name: "test",
			id: 1,
		},
		player2: {
			color: "y",
			value: 1,
			score: 0,
			user_name: "test",
			id: 2,
		},
	};
	return (
		// <main>
		// 	<div className='view_container'>
		// 		{/*<--start::play with player wrapper---->*/}
		// 		<div className='play_wrapper'>
		// 			{/*<--start::bg screen---->*/}
		// 			<div className='player_bg'>
		// 				{/*<--start::timer back ---->*/}

		// 				<span className='global_timer'>
		// 					<strong
		// 						style={{
		// 							color: "#FFF",
		// 						}}>
		// 						{moment.utc(appState?.gameTime * 1000).format("mm:ss")}
		// 					</strong>
		// 				</span>
		// 				<span className='quit_game' onClick={() => setQuitGame(true)}></span>
		// 				<span
		// 					className={`sound_game ${soundStatus ? "on" : "off"} `}
		// 					onClick={() => {
		// 						setSoundStatus(!soundStatus);
		// 					}}></span>
		// 				<span className='pawn_click'>
		// 					<div className='role'>
		// 						{appState.animate ? (
		// 							<span
		// 								className={`role_btn ${appState.position?.player1?.color === appState?.turn && !animate ? "active" : ""}`}
		// 								style={{
		// 									pointerEvents:
		// 										appState.position?.player1?.color === appState?.turn && !animate && appState.status !== gameStatus.r_win && appState.status !== gameStatus.y_win ? "auto" : "none",
		// 								}}></span>
		// 						) : (
		// 							<span
		// 								className={`role_btn ${appState.position?.player1?.color === appState?.turn && !animate ? "active" : ""}`}
		// 								style={{
		// 									pointerEvents:
		// 										appState.position?.player1?.color === appState?.turn && !animate && appState.status !== gameStatus.r_win && appState.status !== gameStatus.y_win ? "auto" : "none",
		// 								}}
		// 								onClick={handelRollDice}></span>
		// 						)}
		// 					</div>
		// 					<div className='turn_role_text'>
		// 						<strong
		// 							style={{
		// 								color: "#FFF",
		// 							}}>
		// 							{appState.position?.player1?.color === appState?.turn && !animate ? "Your Turn" : "Opponent Turn"}
		// 						</strong>
		// 					</div>
		// 				</span>
		// 				{/*<--start::timer back ---->*/}
		// 				{quitGame && (
		// 					<div className='quit_game_bg'>
		// 						<div className='quit_game_wrapper'>
		// 							<div className='quit_game_text'>Do You Want To Quit ?</div>
		// 							<div className='quit_game_btn'>
		// 								{" "}
		// 								<button className='yes' onClick={() => handelQuitGame()}>
		// 									Yes
		// 								</button>
		// 								<button className='no' onClick={() => setQuitGame(false)}>
		// 									No
		// 								</button>
		// 							</div>
		// 						</div>
		// 					</div>
		// 				)}
		// 				<div className='inner_wrapper'>
		// 					<div className='top_sesc'>
		// 						<div className='left_base'>
		// 							<div className='player_name'>
		// 								<div className='name'>
		// 									<p
		// 										style={{
		// 											color: "#fff",
		// 											fontSize: "10px",
		// 											whiteSpace: "nowrap",
		// 											width: "60%",
		// 											overflow: "hidden",
		// 											textAlign: "center",
		// 											textOverflow: "ellipsis",
		// 										}}>
		// 										{appState.pl?.user_name}
		// 									</p>
		// 								</div>

		// 								{appState?.pl.id === appState.turnTime.current_player_id && appState.turnTime.life ? (
		// 									<>
		// 										<div style={{ position: "absolute", top: "-8px", left: 0 }}>
		// 											{appState?.pl?.id === appState.turnTime.current_player_id && !appState.turnTime.life ? (
		// 												<FaHeartBroken style={{ color: "#ED5AB3", fontSize: "23px" }} />
		// 											) : (
		// 												<IoMdHeart style={{ color: "#ED5AB3", fontSize: "23px" }} />
		// 											)}
		// 										</div>
		// 										<div className='turn_bar_bg'>
		// 											<div className='turn_bar_inActive_bg'>
		// 												<img
		// 													src='/asset/game_play/time_bar.png'
		// 													width={20}
		// 													height={30}
		// 													alt='loader'
		// 													style={{
		// 														height: "7px",
		// 														width: `${updateProgressBar(appState.turnTime.counter)}%`,
		// 														objectFit: "cover",

		// 														borderRadius: "10px",
		// 													}}
		// 												/>
		// 											</div>
		// 										</div>
		// 									</>
		// 								) : (
		// 									<>
		// 										{" "}
		// 										<div className='turn_bar_bg'></div>
		// 									</>
		// 								)}
		// 							</div>
		// 							<div className='player_profile'>
		// 								<img
		// 									src={`${appState?.pl?.profile || "/default.png"}`}
		// 									style={{
		// 										objectFit: "contain",
		// 										width: "90%",
		// 										height: "100%",
		// 										borderRadius: "10px",
		// 									}}></img>
		// 							</div>
		// 						</div>
		// 						<div className='dise_base'>
		// 							{" "}
		// 							<div
		// 								className='dice_movement'
		// 								style={{
		// 									cursor: "pointer",
		// 									position: "relative",

		// 									display: "flex",
		// 									alignItems: "center",
		// 									justifyContent: "center",
		// 								}}>
		// 								{appState.diceAnimate ? (
		// 									<>
		// 										{appState.diceAnimate === false && appState.diceValue ? (
		// 											<ReactDice
		// 												numDice={1}
		// 												rollTime={4}
		// 												ref={diceAnimateRef}
		// 												disableIndividual
		// 												// disableRandom
		// 												faceColor={appState.turn === "r" ? "radial-gradient(rgb(255, 60, 60), rgb(180, 0, 0))" : "radial-gradient(rgb(0 202 235), rgb(0 145 180))"}
		// 												dotColor='#fff'
		// 												dieSize={20}
		// 												defaultRoll={appState.diceValue}
		// 												rollDone={(val) => {
		// 													let start = localStorage.getItem("GAME_START_SNLIO");
		// 													// if (start) {
		// 													// 	movePlayer(appState?.turn, val);
		// 													// }
		// 												}}
		// 											/>
		// 										) : (
		// 											<ReactDice
		// 												numDice={1}
		// 												rollTime={4}
		// 												ref={diceAnimateRef}
		// 												disableIndividual
		// 												// disableRandom
		// 												faceColor={appState.turn === "r" ? "radial-gradient(rgb(255, 60, 60), rgb(180, 0, 0))" : "radial-gradient(rgb(0 202 235), rgb(0 145 180))"}
		// 												dotColor='#fff'
		// 												dieSize={20}
		// 												// defaultRoll={appState.diceValue}
		// 												rollDone={(val) => {
		// 													let start = localStorage.getItem("GAME_START_SNLIO");
		// 													// if (start) {
		// 													// 	movePlayer(appState?.turn, val);
		// 													// }
		// 												}}
		// 											/>
		// 										)}
		// 									</>
		// 								) : (
		// 									<ReactDice
		// 										numDice={1}
		// 										rollTime={4}
		// 										ref={diceRef}
		// 										disableIndividual
		// 										// disableRandom
		// 										faceColor={appState.turn === "r" ? "radial-gradient(rgb(255, 60, 60), rgb(180, 0, 0))" : "radial-gradient(rgb(0 202 235), rgb(0 145 180))"}
		// 										dotColor='#fff'
		// 										dieSize={20}
		// 										rollDone={(val) => {
		// 											let start = localStorage.getItem("GAME_START_SNLIO");
		// 											if (start) {
		// 												dispatch(currentDice({ animate: false, dice: val }));
		// 												movePlayer(appState?.turn, val);
		// 											}
		// 										}}
		// 									/>
		// 								)}
		// 							</div>
		// 						</div>
		// 						<div className='right_base'>
		// 							<div className='player_profile' style={{ marginLeft: "7px" }}>
		// 								<img
		// 									src={`${appState?.op?.profile || "/default.png"}`}
		// 									style={{
		// 										objectFit: "contain",
		// 										width: "90%",
		// 										height: "100%",
		// 										borderRadius: "10px",
		// 									}}></img>
		// 							</div>

		// 							<div className='player_name'>
		// 								<div className='name'>
		// 									<p
		// 										style={{
		// 											color: "#fff",
		// 											fontSize: "10px",
		// 											whiteSpace: "nowrap",
		// 											width: "60%",
		// 											overflow: "hidden",
		// 											textAlign: "center",
		// 											textOverflow: "ellipsis",
		// 										}}>
		// 										{appState.op?.user_name}
		// 									</p>
		// 								</div>

		// 								{appState.op.id === appState.turnTime.current_player_id && appState.turnTime.life ? (
		// 									<>
		// 										<div
		// 											style={{
		// 												position: "absolute",
		// 												top: "-8px",
		// 												right: 0,
		// 											}}>
		// 											{appState.pl.id === appState.turnTime.current_player_id && !appState.turnTime.life ? (
		// 												<FaHeartBroken style={{ color: "#ED5AB3", fontSize: "23px" }} />
		// 											) : (
		// 												<IoMdHeart style={{ color: "#ED5AB3", fontSize: "23px" }} />
		// 											)}
		// 										</div>
		// 										<div className='turn_bar_bg'>
		// 											<div className='turn_bar_inActive_bg'>
		// 												<img
		// 													src='/asset/game_play/time_bar.png'
		// 													width={20}
		// 													height={30}
		// 													alt='loader'
		// 													style={{
		// 														height: "7px",
		// 														width: `${updateProgressBar(appState.turnTime.counter)}%`,
		// 														objectFit: "cover",

		// 														borderRadius: "10px",
		// 													}}
		// 												/>
		// 											</div>
		// 										</div>{" "}
		// 									</>
		// 								) : (
		// 									<>
		// 										<div className='turn_bar_bg'></div>
		// 									</>
		// 								)}
		// 							</div>
		// 						</div>
		// 					</div>
		// 					<div className='btm_sesc'>
		// 						<div className='gameBoard'>
		// 							<Board playerPositions={appState.position} turn={appState.turn} />
		// 							<Popupbox />
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 			{/*<--end::bg screen---->*/}
		// 		</div>
		// 		{/*<--end::play with player wrapper---->*/}
		// 	</div>
		// </main>
		<main className='game_body'>
			<div className='gameplay_box'>
				<div className='game_bg'>
					<img src='/asset/game_play/bg.png' alt='' />
					<div className='top-area'>
						<div className='time'>24:15</div>
						<div className='top-control'>
							<div className='back'>
								<img src='/asset/game_play/back.png' alt='back' />
							</div>
							<div className='sound'>
								<img src='/asset/game_play/sound_on.png' alt='sound' />
							</div>
						</div>
					</div>
					<div className='player-info-area'>
						<div className='left'>
							<div className='player-name player-name-left'>NAME</div>
							<div className='user-image user-left'>
								<img src='/default.png' alt='' />
							</div>
							<img src='/asset/game_play/Left_base.png' alt='' />
						</div>
						<div className='center'>
							<img src='/asset/game_play/dise_base.png' alt='' />
						</div>
						<div className='right'>
							<div className='player-name player-name-right'>NAME</div>
							<div className='user-image user-right'></div>
							<img src='/asset/game_play/right_base.png' alt='' />
						</div>
					</div>
					<div className='gameplay-board'>
						<Board playerPositions={position} turn={"r"} />
					</div>
					<div className='roll-btn'>
						<img src='/asset/game_play/Roll.png' alt='' />
						<p>YOUR TURN</p>
					</div>
				</div>
			</div>
		</main>
	);
}

export default PlayWithPlayer;
