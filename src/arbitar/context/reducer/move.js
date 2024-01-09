import { actionTypes, gameStatus, gameMode } from "./constant";

/**
 * receive Global Timer
 */
let gameTimer = (arg) => {
	return {
		type: actionTypes.GAME_TIME,
		payload: arg,
	};
};

/**
 * receive turn timer
 */
let turnTimer = (arg) => {
	return {
		type: actionTypes.TURN_TIME,
		payload: arg,
	};
};

/**
 * turn updated
 */

let turnUpdate = (arg) => {
	return {
		type: actionTypes.UPDATE_TURN,
		payload: arg,
	};
};

/**
 * game end
 */

let gameEnd = (arg) => {
	return {
		type: actionTypes.GAME_END,
		payload: arg,
	};
};
/**
 * get user data
 */

let getUserData = (arg) => {
	return {
		type: actionTypes.GET_USER_DATA,
		payload: arg,
	};
};
let getMatchMakeingData = (arg) => {
	return {
		type: actionTypes.GET_MATCH_MAKEING_DATA,
		payload: arg,
	};
};
let makeNewMove = ({ player_turn, currentPosition }) => {
	return {
		type: actionTypes.NEW_MOVE,
		payload: { player_turn, currentPosition },
	};
};

let makeAnimateMove = ({ player_turn, currentPosition }) => {
	return {
		type: actionTypes.ANIMATE_PAWN,
		payload: { player_turn, currentPosition },
	};
};

let dectateWin = (win) => {
	return {
		type: actionTypes.WIN,
		payload: win,
	};
};

/**
 * socket connect
 */

let newSocketConnect = ({ socket }) => {
	return {
		type: actionTypes.NEW_SOCKET_CONNECTION,
		payload: { socket },
	};
};
/**
 * new game init
 */

let gameInit = ({ arg }) => {
	return {
		type: actionTypes.NEW_GAME_INIT,
		payload: { arg },
	};
};

/**
 * new game init
 */

let updateBoard = ({ arg }) => {
	return {
		type: actionTypes.BOARD_UPDATE,
		payload: { arg },
	};
};

let animateBoard = ({ arg }) => {
	return {
		type: actionTypes.ANIMATE_BOARD_UPDATE,
		payload: { arg },
	};
};
/**
 * update game mode
 */
let updateGameMode = (arg) => {
	return { type: actionTypes.GAME_MODE, payload: arg };
};

/**
 * make AI boardPosition
 */

let newGameInitAi = () => {
	let gameInit = {
		position: {
			player1: {
				profile: "/default.png",
				color: "r",
				value: 1,
				score: 0,
				user_name: "Test_1",
				id: 2,
			},
			player2: {
				profile: "/default.png",
				color: "y",
				value: 1,
				score: 0,
				user_name: "Test_2",
				id: 3,
			},
		},

		turn: "r",
		status: gameStatus.ongoing,
	};
	return {
		type: actionTypes.NEW_GAME_INIT_AI,
		payload: { ...gameInit },
	};
};

let turnChnage = (arg) => {
	return {
		type: actionTypes.CHANGE_TURN,
		payload: arg,
	};
};

let animateDice = (arg) => {
	return {
		type: actionTypes.ANIMATE_DICE,
		payload: arg,
	};
};

let currentDice = (arg) => {
	return {
		type: actionTypes.CURRENT_DICE,
		payload: arg,
	};
};
export {
	makeNewMove,
	dectateWin,
	updateBoard,
	newSocketConnect,
	gameInit,
	updateGameMode,
	newGameInitAi,
	getUserData,
	getMatchMakeingData,
	gameEnd,
	turnTimer,
	gameTimer,
	turnUpdate,
	makeAnimateMove,
	animateBoard,
	turnChnage,
	animateDice,
	currentDice,
};
