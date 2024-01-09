let gameStatus = {
	pending: "pending",
	ongoing: "ongoing",
	r_win: "red pawn wins",
	y_win: "yellow pawn wins",
};

let gameMode = {
	offline: "offline",
	online: "online",
};

// const player1 === red and player2===yellow
/// white === player1 and black ==== player2
let initGame = {
	socket: null,
	diceAnimate: false,
	diceValue: "",
	position: {},
	turn: "",
	status: gameStatus.pending,
	mode: "",
	advantage: 0,
	turnTime: {}, // turn time | counter | life
	gameTime: 0,
	totalTurnTime: 0,
};

Object.freeze(initGame);

let actionTypes = {
	CHANGE_TURN: "CHANGE_TURN",
	ANIMATE_PAWN: "ANIMATE_PAWN",
	ANIMATE_BOARD_UPDATE: "ANIMATE_BOARD_UPDATE",
	GET_USER_DATA: "GET_USER_DATA",
	GET_MATCH_MAKEING_DATA: "GET_MATCH_MAKEING_DATA",
	NEW_GAME_INIT: "NEW_GAME_INIT",
	NEW_GAME_INIT_AI: "NEW_GAME_INIT_AI",
	BOARD_UPDATE: "BOARD_UPDATE",
	NEW_MOVE: "NEW_MOVE",
	TURN_CHANGE: "TURN_CHANGE",
	WIN: "WIN",
	NEW_GAME: "NEW_GAME",
	GAME_MODE: "GAME_MODE",
	GAME_END: "GAME_END",
	UPDATE_TURN: "UPDATE_TURN",
	TURN_TIME: "TURN_TIME",
	GAME_TIME: "GAME_TIME",
	ANIMATE_DICE: "ANIMATE_DICE",
	CURRENT_DICE: "CURRENT_DICE",
	NEW_SOCKET_CONNECTION: "NEW_SOCKET_CONNECTION",
};

export { initGame, actionTypes, gameStatus, gameMode };
