// import SoundAlert from "../../../audio/";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";

import Board from "../../../components/gameBoard";
import axios from "axios";
import { useAppContext } from "../../../arbitar/context/Provider";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { IoMdHeart } from "react-icons/io";
import { FaHeartBroken } from "react-icons/fa";
import Popupbox from "../../../components/popup/popupbox";
import { snakes, ladder, generateArea, cordinate } from "../../../arbitar/helper";

import { makeNewMove, dectateWin, makeAnimateMove, turnChnage } from "../../../arbitar/context/reducer/move";

import ReactDice from "react-dice-complete";
import PawnMovementSound from "../../../audio/pawn_movement.mp3";
import roolingSound from "../../../audio/rpg-dice-rolling-95182.mp3";
import { gameStatus } from "../../../arbitar/context/reducer/constant";
import { app } from "../../../config/appConfig";
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
	let game_auth_token = localStorage.getItem("offline_auth_token");
	const [quitGame, setQuitGame] = useState(false);
	const [soundStatus, setSoundStatus] = useState(true);
	const [animate, setAnimate] = useState(false);
	const [time, setTime] = useState("");
	const diceRef = useRef();

	const router = useNavigate();
	const { appState, dispatch } = useAppContext();
	const handelQuitGame = () => {
		const config = {
			headers: { Authorization: `Bearer ${game_auth_token}` },
		};

		const bodyParameters = {
			key: "value",
		};

		axios
			.post("http://3.137.86.237:5000/api/v2/player-return", bodyParameters, config)
			.then((data) => {
				router.push("/");
			})
			.catch(() => {
				console.log("error in HandelQuitGame");
			});
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

		if (appState?.position.player1.color === player_turn) {
			currentPosition += appState.position.player1.value;
		} else {
			if (appState?.position.player2.color === player_turn) {
				currentPosition += appState.position.player2.value;
			} else {
				throw new Error("Invalid Player");
			}
		}

		for (let i = 1; i <= diceRoll; i++) {
			setTimeout(() => {
				currentPosition += 1;

				if (soundStatus) {
					let soundSource = PawnMovementSound;
					let sound = new Audio(soundSource);
					sound.play();
				}
				dispatch(
					makeAnimateMove({
						player_turn,
						currentPosition: currentPosition <= 100 ? Number(currentPosition) : 100,
					})
				);
				if (currentPosition >= 100) {
					dispatch(dectateWin(player_turn));
					return;
				}

				if (i === diceRoll) {
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

		const device = cordinate["small"][getSize(window.innerWidth)];
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
		setTimeout(() => {
			dispatch(turnChnage(player_turn));
			setAnimate(false);
		}, 1000);
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
		localStorage.setItem("GAME_START_SNLIO", "1");
		var should_play = true;
		if (!animate) {
			diceRef?.current?.rollAll();
			if (soundStatus) {
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
	}

	useLayoutEffect(() => {
		localStorage.removeItem("GAME_START_SNLIO");
	}, []);

	/**
	 * Global time Function
	 */

	useEffect(() => {
		let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9asdf";
		const fetch = async () => {
			const data = await axios.get("http://3.137.86.237:5000/api/v2/game-setting?game_id=25", {
				headers: { Authorization: `Bearer ${token}` },
			});

			let _time = data?.data?.data?.game_setting?.GAMETIME || 600;
			setTime(_time);
		};

		fetch();
	}, []);

	/**
	 * call back execute page loading
	 */
	useEffect(() => {
		const intervalId = setInterval(() => {
			if (time === 0) {
				handelQuitGame();
				return;
			}
			setTime((prevTime) => Number(prevTime) - 1);
		}, 1000); // (1000 ms = 1 second)

		return () => clearInterval(intervalId);
	}, []);
	useEffect(() => {
		if (appState.status === gameStatus.r_win || appState.status === gameStatus.y_win) {
			handelQuitGame();
		}
		if (appState.turn === "y") {
			handelRollDice();
		}
	}, [appState.turn]);

	return (
		<main className='game_body'>
			<div className='gameplay_box'>
				<div className='game_bg'>
					<img src='/asset/game_play/bg.png' alt='' />
					<div className='top-area'>
						<div className='time'>{moment.utc(time * 1000).format("mm:ss")} </div>
						<div className='top-control'>
							<div className='back'>
								<img src='/asset/game_play/back.png' alt='back' onClick={() => setQuitGame(true)} />
							</div>
							<div className='sound'>
								{soundStatus && <img src='/asset/game_play/sound_on.png' alt='sound' onClick={() => setSoundStatus(!soundStatus)} />}
								{!soundStatus && <img src='/asset/game_play/sound_off.png' alt='sound' onClick={() => setSoundStatus(!soundStatus)} />}
							</div>
						</div>
					</div>
					<div className='player-info-area'>
						<div className='left'>
							<div className='player-name player-name-left'>{appState.pl?.user_name || "TEST"}</div>

							<div className='user-image user-left'>
								<img src={appState?.pl?.profile || "/default.png"} alt='' />
							</div>
							<img src='/asset/game_play/Left_base.png' alt='' />
						</div>
						<div className='center'>
							<img src='/asset/game_play/dise_base.png' alt='' />
							<div
								className='dice_movement'
								style={{
									width: "100%",
									height: "70%",
									cursor: "pointer",
									position: "absolute",
									top: "10px",
									letf: 0,
									zIndex: 100,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}>
								<ReactDice
									numDice={1}
									rollTime={4}
									ref={diceRef}
									disableIndividual
									// disableRandom
									faceColor='#fff'
									dotColor='black'
									dieSize={25}
									rollDone={(val) => {
										let start = localStorage.getItem("GAME_START_SNLIO");
										if (start) {
											movePlayer(appState?.turn, val);
										}
									}}
								/>
							</div>
						</div>
						<div className='right'>
							<div className='player-name player-name-right'>{"AI"}</div>

							<div className='user-image user-right'>
								<img src={appState?.op?.profile || "/default.png"} alt='' />
							</div>
							<img src='/asset/game_play/right_base.png' alt='' />
						</div>
					</div>
					<div className='gameplay-board'>
						{quitGame && (
							<div className='quit_game_bg'>
								<div className='quit_game_wrapper'>
									<div className='quit_game_text'>Do You Want To Quit ?</div>
									<div className='quit_game_btn'>
										{" "}
										<button className='yes' onClick={() => handelQuitGame()}>
											Yes
										</button>
										<button className='no' onClick={() => setQuitGame(false)}>
											No
										</button>
									</div>
								</div>
							</div>
						)}
						<Board playerPositions={appState.position} turn={appState.turn} animate={animate} />
						<Popupbox />
					</div>
					<div className='roll-btn'>
						{appState.position?.player1?.color === appState?.turn && !animate ? (
							<img src='/asset/game_play/Roll.png' alt='' onClick={() => handelRollDice()} style={{ cursor: "pointer" }} />
						) : (
							<></>
						)}
						<p>{appState.position?.player1?.color === appState?.turn && !animate ? "Your Turn" : "Opponent Turn"}</p>
					</div>
				</div>
			</div>
		</main>
	);
}

export default PlayWithPlayer;
