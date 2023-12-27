// import SoundAlert from "../../../audio/alert.mp3";
import React, { useEffect, useState } from "react";
import Dice from "react-dice-roll";
import Board from "../../../components/gameBoard";

import { app } from "../../../config/appConfig";
import { useAppContext } from "../../../arbitar/context/Provider";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { IoMdHeart } from "react-icons/io";
import { FaHeartBroken } from "react-icons/fa";
// import Popupbox from "../../../components/popup/popupbox";
import { diceBorderColor, snakes, ladder, generateArea } from "../../../arbitar/helper";

import {
	makeNewMove,
	makeTrunChange,
	dectateWin,
} from "../../../arbitar/context/reducer/reducer";
import { gameStatus } from "../../../arbitar/context/reducer/constant";
import appConfig from "../../../config/appConfig";
import ReactDice from "react-dice-complete";
import PawnMovementSound from "../../../audio/pawn_movement.mp3";
// import LadderSound from "../../audio/ladder.mp3";
// import SnakeSound from "../../audio/sanke.mp3";

import { useNavigate } from "react-router-dom";
var soundPlay = true;
function PlayWithPlayer() {
	const [quitGame, setQuitGame] = useState(false);

	const router = useNavigate();
	// const { appState, dispatch } = useAppContext();
	const handelQuitGame = () => {
		// if (appState.socket) {
		// 	appState.socket.emitDisConnect();
		// }
	};
	/**
	 * function for calculkate progress bar
	 */

	function updateProgressBar(time) {
		let remainingTime = appState.totalTurnTime - Number(time);
		let percentageComplete = 100 - (remainingTime / appState.totalTurnTime) * 100;
		let strokeDashOffsetValue = 100 - percentageComplete;

		// console.log("Percentage Complete:", percentageComplete, "%");
		// console.log("Remaining Time:", remainingTime, "seconds");

		if (isCloseToOne(percentageComplete, 0.000001)) {
			percentageComplete = 0;
		}
		return percentageComplete;
	}

	function isCloseToOne(value, epsilon) {
		return Math.abs(1 - value) < epsilon;
	}

	const [animate, setAnimate] = useState(false);

	const { appState, dispatch } = useAppContext();

	const diceRef = useRef();
	/**
	 *
	 * @param {*} player_turn
	 * @param {*} diceRoll
	 * @function movePlayer
	 * @description pawn movement logic
	 */
	function movePlayer(player_turn, diceRoll) {
		let currentPosition = 0;
		setAnimate(true);

		if (appState.position.player1.color === player_turn) {
			currentPosition += appState.position.player1.value;
		} else {
			if (appState.position.player2.color === player_turn) {
				currentPosition += appState.position.player2.value;
			} else {
				throw new Error("Invalid Player");
			}
		}

		for (let i = 1; i <= diceRoll; i++) {
			setTimeout(() => {
				currentPosition += 1;

				let soundSource = PawnMovementSound;
				let sound = new Audio(soundSource);
				sound.play();

				dispatch(
					makeNewMove({
						player_turn,
						currentPosition: currentPosition <= 100 ? currentPosition : 100,
					})
				);
				if (currentPosition >= 100) {
					dispatch(dectateWin(player_turn));
					return;
				}
				// console.log(currentPosition, "after move dice ");
				if (i === diceRoll) {
					// Clear animation after the last step
					handleSnakeAndLadder(player_turn, currentPosition);
				}
			}, i * 225.5);
		}
	}

	/**
	 *
	 * @param {*} player_turn
	 * @param {*} position
	 * @function handleSnakeAndLadder
	 * @description according to position and player turn handel sanke and ladder
	 * @returns end of function execute
	 */

	const handleSnakeAndLadder = async (player_turn, position) => {
		let currentPosition = position;
		let player = player_turn === "r" ? "player-1" : "player-2";
		const device = generateArea(32);
		if (snakes[position]?.length >= 1) {
			const snakePositionArr = snakes[position];

			for (let i = 0; i < snakePositionArr.length; i++) {
				currentPosition = snakePositionArr[i];
				let cord = device[currentPosition];

				await animatePawn(player_turn, player, currentPosition, cord.x, cord.y);
			}

			if (ladder[snakePositionArr[snakePositionArr.length - 1]]?.length >= 1) {
				const ladderPositionArr = ladder[snakePositionArr[snakePositionArr.length - 1]];

				for (let i = 0; i < ladderPositionArr.length; i++) {
					currentPosition = ladderPositionArr[i];
					let cord = device[currentPosition];

					await animatePawn(player_turn, player, currentPosition, cord.x, cord.y);
				}
			}
		} else if (ladder[position]?.length >= 1) {
			const ladderPositionArr = ladder[position];

			for (let i = 0; i < ladderPositionArr.length; i++) {
				currentPosition = ladderPositionArr[i];
				let cord = device[currentPosition];

				await animatePawn(player_turn, player, currentPosition, cord.x, cord.y);
			}

			if (snakes[ladderPositionArr[ladderPositionArr.length - 1]]?.length >= 1) {
				const snakePositionArr = snakes[ladderPositionArr[ladderPositionArr.length - 1]];

				for (let i = 0; i < snakePositionArr.length; i++) {
					currentPosition = snakePositionArr[i];
					let cord = device[currentPosition];

					await animatePawn(player_turn, player, currentPosition, cord.x, cord.y);
				}
			}
		}

		dispatch(makeNewMove({ player_turn, currentPosition }));
	};

	const animatePawn = async (turn, player, position, x, y) => {
		return new Promise((resolve) => {
			const pawnElement = document.getElementById(`pawn-${turn}`);

			if (pawnElement) {
				pawnElement.style.transition = "transform 0.3s ease-in-out";
				pawnElement.style.transform = `translate(${x}px, ${y}px)`;
			}

			setTimeout(() => {
				resolve();
			}, 280);
		});
	};
	function handelRollDice() {
		var should_play = true;
		if (appState.status === gameStatus.pending) {
			dispatch(updateGameStatus());
		}
		if (!animate) {
			diceRef?.current?.rollAll();
			if (should_play) {
				should_play = !should_play;
				let soundSource = roolingSound;
				let sound = new Audio(soundSource);
				sound.play();
				sound.onended = () => {
					should_play = true;
				};
			}
		}
	}

	return (
		<main>
			<div className="view_container">
				{/*<--start::play with player wrapper---->*/}
				<div className="play_wrapper">
					{/*<--start::bg screen---->*/}
					<div className="player_bg">
						{/*<--start::timer back ---->*/}

						<span className="global_timer">
							<strong
								style={{
									color: "#FFF",
								}}>
								2.23
							</strong>
						</span>
						<span className="quit_game"></span>
						<span className="sound_game off"></span>
						<span className="pawn_click">
							<div className="role">
								<span className="role_btn"></span>
							</div>
							<div className="turn_role_text">
								<strong
									style={{
										color: "#FFF",
									}}>
									Your Turn
								</strong>
							</div>
						</span>
						{/*<--start::timer back ---->*/}
						{quitGame && (
							<div className="quit_game_bg">
								<div className="quit_game_wrapper">
									<div className="quit_game_text"></div>
									<div className="quit_game_btn">
										{" "}
										<button className="yes" onClick={() => handelQuitGame()}>
											Yes
										</button>
										<button className="no" onClick={() => setQuitGame(false)}>
											No
										</button>
									</div>
								</div>
							</div>
						)}
						<div className="inner_wrapper">
							<div className="top_sesc">
								<div className="left_base">
									<div className="player_name">
										<div className="name">
											<p
												style={{
													color: "#fff",
													fontSize: "10px",
													whiteSpace: "nowrap",
													width: "60%",
													overflow: "hidden",
													textAlign: "center",
													textOverflow: "ellipsis",
												}}>
												Jack
											</p>
										</div>
										{appState.pl.id === appState.turnTime.current_player_id && appState.turnTime.life ? (
											<>
												<div style={{ position: "absolute", top: "-8px", left: 0 }}>
													{appState.pl.id === appState.turnTime.current_player_id && !appState.turnTime.life ? (
														<FaHeartBroken style={{ color: "#ED5AB3", fontSize: "23px" }} />
													) : (
														<IoMdHeart style={{ color: "#ED5AB3", fontSize: "23px" }} />
													)}
												</div>
												<div className="turn_bar_bg">
													<div className="turn_bar_inActive_bg">
														<img
															src="/game_play/time_bar.png"
															width={20}
															height={30}
															alt="loader"
															style={{
																height: "7px",
																width: `${updateProgressBar(appState.turnTime.counter)}%`,
																objectFit: "cover",

																borderRadius: "10px",
															}}
														/>
													</div>
												</div>
											</>
										) : (
											<></>
										)}
									</div>
									<div className="player_profile">
										<img
											src="/logo192.png"
											style={{
												objectFit: "contain",
												width: "90%",
												height: "100%",
												borderRadius: "10px",
											}}></img>
									</div>
								</div>
								<div className="dise_base">
									{" "}
									<div
										className="dice_movement"
										style={{
											border: `8px solid ${diceBorderColor(appState?.turn)}`,
											pointerEvents: appState.position.player1.color === appState.turn && !animate ? "auto" : "none",
											cursor: "pointer",
											position: "relative",
										}}
										onClick={handelRollDice}>
										<ReactDice
											numDice={1}
											rollTime={1}
											ref={diceRef}
											disableIndividual
											// disableRandom
											faceColor={
												appState.turn === "r"
													? "radial-gradient(rgb(255, 60, 60), rgb(180, 0, 0))"
													: "radial-gradient(rgb(255, 245, 60), rgb(180, 162, 0))"
											}
											dotColor="#fff"
											dieSize={40}
											rollDone={(val) => {
												if (appState.status === gameStatus.ongoing) {
													movePlayer(appState?.turn, val);
												}
											}}
										/>
									</div>
								</div>
								<div className="right_base">
									<div className="player_profile" style={{ marginLeft: "7px" }}>
										<img
											src="/logo192.png"
											style={{
												objectFit: "contain",
												width: "90%",
												height: "100%",
												borderRadius: "10px",
											}}></img>
									</div>

									<div className="player_name">
										<div className="name">
											<p
												style={{
													color: "#fff",
													fontSize: "10px",
													whiteSpace: "nowrap",
													width: "60%",
													overflow: "hidden",
													textAlign: "center",
													textOverflow: "ellipsis",
												}}>
												Jack
											</p>
										</div>
										{appState.op.id === appState.turnTime.current_player_id && appState.turnTime.life ? (
											<>
												<div style={{ position: "absolute", top: "-8px", right: 0 }}>
													{appState.pl.id === appState.turnTime.current_player_id && !appState.turnTime.life ? (
														<FaHeartBroken style={{ color: "#ED5AB3", fontSize: "23px" }} />
													) : (
														<IoMdHeart style={{ color: "#ED5AB3", fontSize: "23px" }} />
													)}
												</div>
												<div className="turn_bar_bg">
													<div className="turn_bar_inActive_bg">
														<img
															src="/game_play/time_bar.png"
															width={20}
															height={30}
															alt="loader"
															style={{
																height: "7px",
																// width: `${loadingWidth}%`,
																objectFit: "cover",

																borderRadius: "10px",
															}}
														/>
													</div>
												</div>{" "}
											</>
										) : (
											<></>
										)}
									</div>
								</div>
							</div>
							<div className="btm_sesc">
								<div className="gameBoard">
									<Board playerPositions={position} turn={"r"} />
								</div>
							</div>
						</div>
						{/* <Popupbox /> */}
					</div>
					{/*<--end::bg screen---->*/}
				</div>
				{/*<--end::play with player wrapper---->*/}
			</div>
		</main>
	);
}

export default PlayWithPlayer;
