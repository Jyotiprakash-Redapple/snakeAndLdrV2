import { actionTypes, gameStatus, gameMode } from "./constant";

let reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.GET_USER_DATA: {
			const userData = {
				id: action.payload?.user_id,
				user_name: action.payload?.user_name || "test 1",
				score: action.payload?.score || 0,
				colour: action.payload?.colour,
				profile: action.payload?.profile_picture || "/default.png",
			};

			return {
				...state,
				pl: { ...userData },
			};
		}
		case actionTypes.GET_MATCH_MAKEING_DATA: {
			return {
				...state,
				pl: action.payload.player,
				op: action.payload.opponent,
			};
		}
		case actionTypes.GAME_MODE: {
			return {
				...state,
				mode: action.payload,
			};
		}

		// game init when click player btn
		case actionTypes.NEW_GAME_INIT: {
			const gameObject = action.payload.arg;
			let gameInit = {
				position: {
					player1: {
						color: gameObject.player.colour === "white" ? "r" : "y",
						value: 1,
						score: 0,
						user_name: gameObject.player.user_name,
						id: gameObject.player.id,
					},
					player2: {
						color: action.payload.arg.opponent.colour === "black" ? "y" : "r",
						value: 1,
						score: 0,
						user_name: action.payload.arg.opponent.user_name,
						id: action.payload.arg.opponent.id,
					},
				},
				turn: "r",
				status: gameStatus.ongoing,
				turnTime: {
					currentPlayerId: gameObject.turn ? gameObject.player.id : gameObject.opponent.id,
					counter: "30.00",
					life: 3,
				},
				totalTurnTime: gameObject.turn_time,
			};

			return {
				...state,
				...gameInit,
				pl: action.payload.arg.player,
				op: action.payload.arg.opponent,
			};
		}
		case actionTypes.NEW_GAME_INIT_AI: {
			return {
				...state,
				...action.payload,
			};
		}
		case actionTypes.GAME_TIME: {
			return { ...state, gameTime: action.payload.counter };
		}
		case actionTypes.TURN_TIME: {
			return { ...state, turnTime: action.payload };
		}

		case actionTypes.UPDATE_TURN: {
			const gameObject = action.payload;
			let turn = "";
			if (gameObject.turn) {
				turn = gameObject.player.colour === "white" ? "r" : "y";
			} else {
				turn = gameObject.opponent.colour === "white" ? "r" : "y";
			}
			return {
				...state,
				totalTurnTime: Number(gameObject.turn_time),
				turn: turn,
			};
		}
		case actionTypes.GAME_END: {
			let gameEndObj = action.payload;
			state.socket.onUpdateWin({
				player: {
					id: gameEndObj.player.id,
					score: gameEndObj.player.score,
					colour: gameEndObj.player.colour,
				},
				opponent: {
					id: gameEndObj.opponent.id,
					score: gameEndObj.opponent.score,
					colour: gameEndObj.opponent.colour,
				},
				winner: gameEndObj.winner,
			});
			let status = "";
			if (gameEndObj.winner) {
				status = gameEndObj.player.colour === "white" ? gameStatus.r_win : gameStatus.y_win;
			} else {
				status = gameEndObj.opponent.colour === "white" ? gameStatus.r_win : gameStatus.y_win;
			}
			return {
				...state,
				status: status,
			};
		}

		case actionTypes.BOARD_UPDATE: {
			let board = action.payload.arg.board;

			if (board) {
				if (board?.status) {
					return {
						...state,
						status: board.status,
					};
				} else {
					let updatedColor = board.color;
					if (state.position.player1.color === updatedColor) {
						state.position.player1.value = board.currentPosition;
						state.advantage = board?.advantage ? board.advantage : state.advantage;
					} else {
						if (state.position.player2.color === updatedColor) {
							state.position.player2.value = board.currentPosition;
							state.advantage = board?.advantage ? board.advantage : state.advantage;
						}
					}

					return {
						...state,
					};
				}
			}
		}

		case actionTypes.ANIMATE_BOARD_UPDATE: {
			let board = action.payload.arg.board;
			if (board) {
				if (board?.animate === true || board?.animate === false) {
					if (board.animate === true) {
						return {
							...state,
							diceAnimate: true,
						};
					} else {
						return {
							...state,
							diceAnimate: false,
							diceValue: board.diceValue,
						};
					}
				} else {
					if (board?.status) {
						return {
							...state,
							status: board.status,
						};
					} else {
						let updatedColor = board.color;
						if (state.position.player1.color === updatedColor) {
							state.position.player1.value = board.currentPosition;
							state.advantage = board?.advantage ? board.advantage : state.advantage;
						} else {
							if (state.position.player2.color === updatedColor) {
								state.position.player2.value = board.currentPosition;
								state.advantage = board?.advantage ? board.advantage : state.advantage;
							}
						}

						return {
							...state,
						};
					}
				}
			}
		}

		// new move happen in board
		case actionTypes.NEW_MOVE: {
			let advantage = state.advantage;
			let advantageStatus = "";
			let updatedColor = action.payload.player_turn;
			if (state.position.player1.color === updatedColor) {
				state.position.player1.value = action.payload.currentPosition;
			} else {
				if (state.position.player2.color === updatedColor) {
					state.position.player2.value = action.payload.currentPosition;
				}
			}
			if (state.position.player1.value > state.position.player2.value && state.position.player1.color === "r") {
				advantage = state.position.player1.value - state.position.player2.value;
				advantageStatus = "r";
			} else {
				if (state.position.player1.value > state.position.player2.value && state.position.player1.color === "y") {
					advantage = state.position.player1.value - state.position.player2.value;
					advantageStatus = "y";
				}
			}

			if (state.mode === gameMode.online) {
				state.socket.onUpdateMove({
					board: {
						color: action.payload.player_turn,
						currentPosition: action.payload.currentPosition,
						advantage: advantage,
					},
					game_state: {
						status: state.status,
						advantage: advantage === 0 || state.position.player1.value === state.position.player2.value ? "Niether Side " : advantageStatus,
					},
				});
			}
			return {
				...state,
				advantage: advantage,
			};
		}

		case actionTypes.ANIMATE_PAWN: {
			let advantage = state.advantage;
			let advantageStatus = "";
			let updatedColor = action.payload.player_turn;
			if (state.position.player1.color === updatedColor) {
				state.position.player1.value = action.payload.currentPosition;
			} else {
				if (state.position.player2.color === updatedColor) {
					state.position.player2.value = action.payload.currentPosition;
				}
			}
			if (state.position.player1.value > state.position.player2.value && state.position.player1.color === "r") {
				advantage = state.position.player1.value - state.position.player2.value;
				advantageStatus = "r";
			} else {
				if (state.position.player1.value > state.position.player2.value && state.position.player1.color === "y") {
					advantage = state.position.player1.value - state.position.player2.value;
					advantageStatus = "y";
				}
			}

			if (state.mode === gameMode.online) {
				state.socket.onAnimateMove({
					board: {
						color: action.payload.player_turn,
						currentPosition: action.payload.currentPosition,
						advantage: advantage,
					},
					game_state: {
						status: state.status,
						advantage: advantage === 0 || state.position.player1.value === state.position.player2.value ? "Niether Side " : advantageStatus,
					},
				});
			}
			return {
				...state,
				advantage: advantage,
			};
		}

		// win one player
		case actionTypes.WIN: {
			let winner = action.payload === "r" ? gameStatus.r_win : gameStatus.y_win;
			if (state.mode === gameMode.online) {
				state.socket.onUpdateMove({
					board: { status: winner },
					game_state: {
						status: winner,
						advantage: state.advantage === 0 ? "Niether Side " : state.advantage > 0 ? "red" : "yellow",
					},
				});
				state.socket.onUpdateWin({
					player: {
						id: state.position.player1.id,
						score: state.position.player1.value,
						colour: state.position.player1.color,
					},
					opponent: {
						id: state.position.player2.id,
						score: state.position.player2.value,
						colour: state.position.player2.color,
					},
					winner: winner,
				});
			}
			return {
				...state,
				status: winner,
			};
		}
		case actionTypes.CURRENT_DICE: {
			if (state.mode === gameMode.online) {
				state.socket.onAnimateMove({
					board: { animate: action.payload.animate, diceValue: action.payload.dice },
					game_state: {
						status: state.status,
						advantage: state.advantage === 0 ? "Niether Side " : state.advantage > 0 ? "red" : "yellow",
					},
				});
			}
			return {
				...state,
			};
		}

		case actionTypes.ANIMATE_DICE: {
			if (state.mode === gameMode.online) {
				state.socket.onAnimateMove({
					board: { animate: action.payload },
					game_state: {
						status: state.status,
						advantage: state.advantage === 0 ? "Niether Side " : state.advantage > 0 ? "red" : "yellow",
					},
				});
			}
			return {
				...state,
			};
		}

		// socket connection save in state container
		case actionTypes.NEW_SOCKET_CONNECTION: {
			return {
				...state,
				socket: action.payload.socket,
			};
		}
		case actionTypes.CHANGE_TURN: {
			let turn = action.payload === "r" ? "y" : "r";

			return {
				...state,
				turn: turn,
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

export { reducer };
