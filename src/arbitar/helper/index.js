const snakes = {
	21: [21, 22, 19, 20, 1],
	26: [26, 15, 5],
	93: [93, 89, 88, 72],
	85: [76, 66, 55, 48, 33, 28, 29],
	68: [68, 67, 54, 53, 52, 48, 33],
	62: [62, 59, 60],
	57: [57, 56, 43, 38, 22, 21],
	// 21: [21, 22, 19, 20, 1],
	// 26: [26, 25, 16, 4],
	// 93: [93, 87, 88, 72],
	// 85: [85, 75, 66, 55, 48, 33, 29],
	// 68: [68, 67, 53, 48],
	// 63: [63, 64, 58, 59, 42, 40],
	// 79: [79, 62, 60],
};
const snakeCordinate = {
	large: {
		8: [
			{
				x: 350,
				y: 450,
				pos: 8,
			},
			{
				x: 380,
				y: 420,
				pos: 9,
			},
			{
				x: 400,
				y: 380,
				pos: 12,
			},
			{
				x: 350,
				y: 400,
				pos: 13,
			},
			{
				x: 320,
				y: 400,
				pos: 14,
			},
			{
				x: 300,
				y: 450,
				pos: 7,
			},
			{
				x: 250,
				y: 400,
				pos: 15,
			},
			{
				x: 200,
				y: 400,
				pos: 16,
			},
			{
				x: 150,
				y: 400,
				pos: 17,
			},
			{
				x: 150,
				y: 450,
				pos: 4,
			},
		],
		18: [
			{
				x: 100,
				y: 400,
				pos: 18,
			},
			{
				x: 50,
				y: 450,
				pos: 2,
			},
			{
				x: 0,
				y: 450,
				pos: 1,
			},
		],
		26: [
			{
				x: 250,
				y: 350,
				pos: 26,
			},
			{
				x: 300,
				y: 350,
				pos: 27,
			},
			{
				x: 300,
				y: 400,
				pos: 14,
			},
			{
				x: 350,
				y: 400,
				pos: 13,
			},
			{
				x: 400,
				y: 450,
				pos: 9,
			},
			{
				x: 450,
				y: 450,
				pos: 10,
			},
		],
		39: [
			{
				x: 50,
				y: 300,
				pos: 39,
			},
			{
				x: 100,
				y: 300,
				pos: 38,
			},
			{
				x: 150,
				y: 300,
				pos: 37,
			},
			{
				x: 150,
				y: 350,
				pos: 24,
			},
			{
				x: 150,
				y: 400,
				pos: 17,
			},
			{
				x: 150,
				y: 450,
				pos: 4,
			},
			{
				x: 200,
				y: 450,
				pos: 5,
			},
		],
		51: [
			{
				x: 450,
				y: 200,
				pos: 51,
			},
			{
				x: 450,
				y: 250,
				pos: 50,
			},
			{
				x: 450,
				y: 300,
				pos: 31,
			},
			{
				x: 400,
				y: 300,
				pos: 32,
			},
			{
				x: 350,
				y: 300,
				pos: 33,
			},
			{
				x: 350,
				y: 350,
				pos: 28,
			},
			{
				x: 150,
				y: 400,
				pos: 17,
			},
			{
				x: 300,
				y: 450,
				pos: 7,
			},
			{
				x: 250,
				y: 450,
				pos: 6,
			},
		],
		54: [
			{
				x: 300,
				y: 200,
				pos: 54,
			},
			{
				x: 300,
				y: 250,
				pos: 47,
			},
			{
				x: 350,
				y: 300,
				pos: 33,
			},
			{
				x: 300,
				y: 350,
				pos: 27,
			},
			{
				x: 250,
				y: 300,
				pos: 35,
			},
			{
				x: 200,
				y: 300,
				pos: 36,
			},
		],
		56: [
			{
				x: 200,
				y: 200,
				pos: 56,
			},
			{
				x: 150,
				y: 200,
				pos: 57,
			},
			{
				x: 150,
				y: 250,
				pos: 44,
			},
			{
				x: 200,
				y: 300,
				pos: 36,
			},
			{
				x: 200,
				y: 350,
				pos: 25,
			},
			{
				x: 150,
				y: 400,
				pos: 17,
			},
			{
				x: 100,
				y: 400,
				pos: 18,
			},
			{
				x: 50,
				y: 400,
				pos: 19,
			},
			{
				x: 0,
				y: 450,
				pos: 1,
			},
		],
		60: [
			{
				x: 0,
				y: 200,
				pos: 60,
			},
			{
				x: 50,
				y: 200,
				pos: 59,
			},
			{
				x: 50,
				y: 250,
				pos: 42,
			},
			{
				x: 0,
				y: 300,
				pos: 40,
			},
			{
				x: 0,
				y: 350,
				pos: 21,
			},
			{
				x: 50,
				y: 400,
				pos: 19,
			},
			{
				x: 100,
				y: 350,
				pos: 23,
			},
		],
		75: [
			{
				x: 250,
				y: 100,
				pos: 75,
			},
			{
				x: 300,
				y: 100,
				pos: 74,
			},
			{
				x: 350,
				y: 100,
				pos: 73,
			},
			{
				x: 350,
				y: 150,
				pos: 68,
			},
			{
				x: 350,
				y: 200,
				pos: 53,
			},
			{
				x: 300,
				y: 250,
				pos: 47,
			},
			{
				x: 300,
				y: 300,
				pos: 34,
			},
			{
				x: 350,
				y: 350,
				pos: 28,
			},
		],
		83: [
			{
				x: 100,
				y: 50,
				pos: 83,
			},
			{
				x: 150,
				y: 50,
				pos: 84,
			},
			{
				x: 150,
				y: 100,
				pos: 77,
			},
			{
				x: 100,
				y: 150,
				pos: 63,
			},
			{
				x: 100,
				y: 200,
				pos: 58,
			},
			{
				x: 100,
				y: 250,
				pos: 43,
			},
			{
				x: 150,
				y: 250,
				pos: 44,
			},
			{
				x: 200,
				y: 250,
				pos: 45,
			},
		],
		85: [
			{
				x: 200,
				y: 50,
				pos: 85,
			},
			{
				x: 150,
				y: 100,
				pos: 77,
			},
			{
				x: 150,
				y: 150,
				pos: 64,
			},
			{
				x: 150,
				y: 200,
				pos: 57,
			},
			{
				x: 100,
				y: 200,
				pos: 58,
			},
			{
				x: 50,
				y: 200,
				pos: 59,
			},
		],
		90: [
			{
				x: 450,
				y: 50,
				pos: 90,
			},
			{
				x: 400,
				y: 100,
				pos: 72,
			},
			{
				x: 450,
				y: 150,
				pos: 70,
			},
			{
				x: 400,
				y: 200,
				pos: 52,
			},
			{
				x: 400,
				y: 250,
				pos: 49,
			},
			{
				x: 350,
				y: 250,
				pos: 48,
			},
		],
		92: [
			{
				x: 400,
				y: 0,
				pos: 92,
			},
			{
				x: 350,
				y: 0,
				pos: 93,
			},
			{
				x: 350,
				y: 50,
				pos: 88,
			},
			{
				x: 350,
				y: 100,
				pos: 73,
			},
			{
				x: 400,
				y: 150,
				pos: 69,
			},
			{
				x: 400,
				y: 200,
				pos: 52,
			},
			{
				x: 350,
				y: 200,
				pos: 53,
			},
			{
				x: 250,
				y: 250,
				pos: 46,
			},
			{
				x: 250,
				y: 300,
				pos: 35,
			},
			{
				x: 200,
				y: 350,
				pos: 25,
			},
		],
		97: [
			{
				x: 150,
				y: 0,
				pos: 97,
			},
			{
				x: 150,
				y: 50,
				pos: 84,
			},
			{
				x: 200,
				y: 50,
				pos: 85,
			},
			{
				x: 250,
				y: 0,
				pos: 95,
			},
			{
				x: 300,
				y: 0,
				pos: 94,
			},
			{
				x: 300,
				y: 50,
				pos: 87,
			},
		],
		99: [
			{
				x: 50,
				y: 0,
				pos: 99,
			},
			{
				x: 0,
				y: 50,
				pos: 81,
			},
			{
				x: 50,
				y: 100,
				pos: 79,
			},
			{
				x: 100,
				y: 100,
				pos: 78,
			},
			{
				x: 100,
				y: 150,
				pos: 63,
			},
		],
	},
};
const ladder = {
	// 18: [18, 23, 44, 57],
	// 9: [9, 30],
	// 9: [9, 13],
	// 32: [32, 51, 70],
	// 14: [14, 46, 65, 84, 97],
	// 42: [42, 61],
	// 80: [80, 99],
	18: [18, 37, 44],
	9: [9, 11],
	32: [32, 51],
	14: [14, 46, 65, 84],
	42: [42, 59],
	80: [80, 82],
};

const initBoardPosition = [
	100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 60, 59,
	58, 57, 56, 55, 54, 53, 52, 51, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 20, 19, 18, 17,
	16, 15, 14, 13, 12, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];

const cordinate = {
	large: {
		100: { x: 0, y: 0 },
		99: { x: 50, y: 0 },
		98: { x: 100, y: 0 },
		97: { x: 150, y: 0 },
		96: { x: 200, y: 0 },
		95: { x: 250, y: 0 },
		94: { x: 300, y: 0 },
		93: { x: 350, y: 0 },
		92: { x: 400, y: 0 },
		91: { x: 450, y: 0 },

		81: { x: 0, y: 50 },
		82: { x: 50, y: 50 },
		83: { x: 100, y: 50 },
		84: { x: 150, y: 50 },
		85: { x: 200, y: 50 },
		86: { x: 250, y: 50 },
		87: { x: 300, y: 50 },
		88: { x: 350, y: 50 },
		89: { x: 400, y: 50 },
		90: { x: 450, y: 50 },

		80: { x: 0, y: 100 },
		79: { x: 50, y: 100 },
		78: { x: 100, y: 100 },
		77: { x: 150, y: 100 },
		76: { x: 200, y: 100 },
		75: { x: 250, y: 100 },
		74: { x: 300, y: 100 },
		73: { x: 350, y: 100 },
		72: { x: 400, y: 100 },
		71: { x: 450, y: 100 },

		61: { x: 0, y: 150 },
		62: { x: 50, y: 150 },
		63: { x: 100, y: 150 },
		64: { x: 150, y: 150 },
		65: { x: 200, y: 150 },
		66: { x: 250, y: 150 },
		67: { x: 300, y: 150 },
		68: { x: 350, y: 150 },
		69: { x: 400, y: 150 },
		70: { x: 450, y: 150 },

		60: { x: 0, y: 200 },
		59: { x: 50, y: 200 },
		58: { x: 100, y: 200 },
		57: { x: 150, y: 200 },
		56: { x: 200, y: 200 },
		55: { x: 250, y: 200 },
		54: { x: 300, y: 200 },
		53: { x: 350, y: 200 },
		52: { x: 400, y: 200 },
		51: { x: 450, y: 200 },

		41: { x: 0, y: 250 },
		42: { x: 50, y: 250 },
		43: { x: 100, y: 250 },
		44: { x: 150, y: 250 },
		45: { x: 200, y: 250 },
		46: { x: 250, y: 250 },
		47: { x: 300, y: 250 },
		48: { x: 350, y: 250 },
		49: { x: 400, y: 250 },
		50: { x: 450, y: 250 },

		40: { x: 0, y: 300 },
		39: { x: 50, y: 300 },
		38: { x: 100, y: 300 },
		37: { x: 150, y: 300 },
		36: { x: 200, y: 300 },
		35: { x: 250, y: 300 },
		34: { x: 300, y: 300 },
		33: { x: 350, y: 300 },
		32: { x: 400, y: 300 },
		31: { x: 450, y: 300 },

		21: { x: 0, y: 350 },
		22: { x: 50, y: 300 },
		23: { x: 100, y: 350 },
		24: { x: 150, y: 350 },
		25: { x: 200, y: 350 },
		26: { x: 250, y: 350 },
		27: { x: 300, y: 350 },
		28: { x: 350, y: 350 },
		29: { x: 400, y: 350 },
		30: { x: 450, y: 350 },

		20: { x: 0, y: 400 },
		19: { x: 50, y: 400 },
		18: { x: 100, y: 400 },
		17: { x: 150, y: 400 },
		16: { x: 200, y: 400 },
		15: { x: 250, y: 400 },
		14: { x: 300, y: 400 },
		13: { x: 350, y: 400 },
		12: { x: 400, y: 400 },
		11: { x: 450, y: 400 },

		1: { x: 0, y: 450 },
		2: { x: 50, y: 450 },
		3: { x: 100, y: 450 },
		4: { x: 150, y: 450 },
		5: { x: 200, y: 450 },
		6: { x: 250, y: 450 },
		7: { x: 300, y: 450 },
		8: { x: 350, y: 450 },
		9: { x: 400, y: 450 },
		10: { x: 450, y: 450 },
	},
	medium: {
		100: { x: 0, y: 0 },
		99: { x: 40, y: 0 },
		98: { x: 80, y: 0 },
		97: { x: 120, y: 0 },
		96: { x: 160, y: 0 },
		95: { x: 200, y: 0 },
		94: { x: 240, y: 0 },
		93: { x: 280, y: 0 },
		92: { x: 320, y: 0 },
		91: { x: 360, y: 0 },

		81: { x: 0, y: 40 },
		82: { x: 40, y: 40 },
		83: { x: 80, y: 40 },
		84: { x: 120, y: 40 },
		85: { x: 160, y: 40 },
		86: { x: 200, y: 40 },
		87: { x: 240, y: 40 },
		88: { x: 280, y: 40 },
		89: { x: 320, y: 40 },
		90: { x: 360, y: 40 },

		80: { x: 0, y: 80 },
		79: { x: 40, y: 80 },
		78: { x: 80, y: 80 },
		77: { x: 120, y: 80 },
		76: { x: 160, y: 80 },
		75: { x: 200, y: 80 },
		74: { x: 240, y: 80 },
		73: { x: 280, y: 80 },
		72: { x: 320, y: 80 },
		71: { x: 360, y: 80 },

		61: { x: 0, y: 120 },
		62: { x: 40, y: 120 },
		63: { x: 80, y: 120 },
		64: { x: 120, y: 120 },
		65: { x: 160, y: 120 },
		66: { x: 200, y: 120 },
		67: { x: 240, y: 120 },
		68: { x: 280, y: 120 },
		69: { x: 320, y: 120 },
		70: { x: 360, y: 120 },

		60: { x: 0, y: 160 },
		59: { x: 40, y: 160 },
		58: { x: 80, y: 160 },
		57: { x: 120, y: 160 },
		56: { x: 160, y: 160 },
		55: { x: 200, y: 160 },
		54: { x: 240, y: 160 },
		53: { x: 280, y: 160 },
		52: { x: 320, y: 160 },
		51: { x: 360, y: 160 },

		41: { x: 0, y: 200 },
		42: { x: 40, y: 200 },
		43: { x: 80, y: 200 },
		44: { x: 120, y: 200 },
		45: { x: 160, y: 200 },
		46: { x: 200, y: 200 },
		47: { x: 240, y: 200 },
		48: { x: 280, y: 200 },
		49: { x: 320, y: 200 },
		50: { x: 360, y: 200 },

		40: { x: 0, y: 240 },
		39: { x: 40, y: 240 },
		38: { x: 80, y: 240 },
		37: { x: 120, y: 240 },
		36: { x: 160, y: 240 },
		35: { x: 200, y: 240 },
		34: { x: 240, y: 240 },
		33: { x: 280, y: 240 },
		32: { x: 320, y: 240 },
		31: { x: 360, y: 240 },

		21: { x: 0, y: 280 },
		22: { x: 40, y: 280 },
		23: { x: 80, y: 280 },
		24: { x: 120, y: 280 },
		25: { x: 160, y: 280 },
		26: { x: 200, y: 280 },
		27: { x: 240, y: 280 },
		28: { x: 280, y: 280 },
		29: { x: 320, y: 280 },
		30: { x: 360, y: 280 },

		20: { x: 0, y: 320 },
		19: { x: 40, y: 320 },
		18: { x: 80, y: 320 },
		17: { x: 120, y: 320 },
		16: { x: 160, y: 320 },
		15: { x: 200, y: 320 },
		14: { x: 240, y: 320 },
		13: { x: 280, y: 320 },
		12: { x: 320, y: 320 },
		11: { x: 360, y: 320 },

		1: { x: 0, y: 360 },
		2: { x: 40, y: 360 },
		3: { x: 80, y: 360 },
		4: { x: 120, y: 360 },
		5: { x: 160, y: 360 },
		6: { x: 200, y: 360 },
		7: { x: 240, y: 360 },
		8: { x: 280, y: 360 },
		9: { x: 320, y: 360 },
		10: { x: 360, y: 360 },
	},
	small: {
		root: {
			100: { x: 0, y: 0 },
			99: { x: 29, y: 0 },
			98: { x: 58, y: 0 },
			97: { x: 87, y: 0 },
			96: { x: 116, y: 0 },
			95: { x: 145, y: 0 },
			94: { x: 174, y: 0 },
			93: { x: 203, y: 0 },
			92: { x: 232, y: 0 },
			91: { x: 261, y: 0 },

			81: { x: 0, y: 29 },
			82: { x: 29, y: 29 },
			83: { x: 58, y: 29 },
			84: { x: 87, y: 29 },
			85: { x: 116, y: 29 },
			86: { x: 145, y: 29 },
			87: { x: 174, y: 29 },
			88: { x: 203, y: 29 },
			89: { x: 232, y: 29 },
			90: { x: 261, y: 29 },

			80: { x: 0, y: 58 },
			79: { x: 29, y: 58 },
			78: { x: 58, y: 58 },
			77: { x: 87, y: 58 },
			76: { x: 116, y: 58 },
			75: { x: 145, y: 58 },
			74: { x: 174, y: 58 },
			73: { x: 203, y: 58 },
			72: { x: 232, y: 58 },
			71: { x: 261, y: 58 },

			61: { x: 0, y: 87 },
			62: { x: 29, y: 87 },
			63: { x: 58, y: 87 },
			64: { x: 87, y: 87 },
			65: { x: 116, y: 87 },
			66: { x: 145, y: 87 },
			67: { x: 174, y: 87 },
			68: { x: 203, y: 87 },
			69: { x: 232, y: 87 },
			70: { x: 261, y: 87 },

			60: { x: 0, y: 116 },
			59: { x: 29, y: 116 },
			58: { x: 58, y: 116 },
			57: { x: 87, y: 116 },
			56: { x: 116, y: 116 },
			55: { x: 145, y: 116 },
			54: { x: 174, y: 116 },
			53: { x: 203, y: 116 },
			52: { x: 232, y: 116 },
			51: { x: 261, y: 116 },

			41: { x: 0, y: 145 },
			42: { x: 29, y: 145 },
			43: { x: 58, y: 145 },
			44: { x: 87, y: 145 },
			45: { x: 116, y: 145 },
			46: { x: 145, y: 145 },
			47: { x: 174, y: 145 },
			48: { x: 203, y: 145 },
			49: { x: 232, y: 145 },
			50: { x: 261, y: 145 },

			40: { x: 0, y: 174 },
			39: { x: 29, y: 174 },
			38: { x: 58, y: 174 },
			37: { x: 87, y: 174 },
			36: { x: 116, y: 174 },
			35: { x: 145, y: 174 },
			34: { x: 174, y: 174 },
			33: { x: 203, y: 174 },
			32: { x: 232, y: 174 },
			31: { x: 261, y: 174 },

			21: { x: 0, y: 203 },
			22: { x: 29, y: 203 },
			23: { x: 58, y: 203 },
			24: { x: 87, y: 203 },
			25: { x: 116, y: 203 },
			26: { x: 145, y: 203 },
			27: { x: 174, y: 203 },
			28: { x: 203, y: 203 },
			29: { x: 232, y: 203 },
			30: { x: 261, y: 203 },

			20: { x: 0, y: 232 },
			19: { x: 29, y: 232 },
			18: { x: 58, y: 232 },
			17: { x: 87, y: 232 },
			16: { x: 116, y: 232 },
			15: { x: 145, y: 232 },
			14: { x: 174, y: 232 },
			13: { x: 203, y: 232 },
			12: { x: 232, y: 232 },
			11: { x: 261, y: 232 },

			1: { x: 0, y: 261 },
			2: { x: 32, y: 261 },
			3: { x: 58, y: 261 },
			4: { x: 87, y: 261 },
			5: { x: 116, y: 261 },
			6: { x: 145, y: 261 },
			7: { x: 174, y: 261 },
			8: { x: 203, y: 261 },
			9: { x: 232, y: 261 },
			10: { x: 261, y: 261 },
		},
		xs: {
			100: { x: 0, y: 0 },
			99: { x: 27, y: 0 },
			98: { x: 54, y: 0 },
			97: { x: 81, y: 0 },
			96: { x: 108, y: 0 },
			95: { x: 135, y: 0 },
			94: { x: 162, y: 0 },
			93: { x: 189, y: 0 },
			92: { x: 216, y: 0 },
			91: { x: 243, y: 0 },

			81: { x: 0, y: 27 },
			82: { x: 27, y: 27 },
			83: { x: 54, y: 27 },
			84: { x: 81, y: 27 },
			85: { x: 108, y: 27 },
			86: { x: 135, y: 27 },
			87: { x: 162, y: 27 },
			88: { x: 189, y: 27 },
			89: { x: 216, y: 27 },
			90: { x: 243, y: 27 },

			80: { x: 0, y: 54 },
			79: { x: 27, y: 54 },
			78: { x: 54, y: 54 },
			77: { x: 81, y: 54 },
			76: { x: 108, y: 54 },
			75: { x: 135, y: 54 },
			74: { x: 162, y: 54 },
			73: { x: 189, y: 54 },
			72: { x: 216, y: 54 },
			71: { x: 243, y: 54 },

			61: { x: 0, y: 81 },
			62: { x: 27, y: 81 },
			63: { x: 54, y: 81 },
			64: { x: 81, y: 81 },
			65: { x: 108, y: 81 },
			66: { x: 135, y: 81 },
			67: { x: 162, y: 81 },
			68: { x: 189, y: 81 },
			69: { x: 216, y: 81 },
			70: { x: 243, y: 81 },

			60: { x: 0, y: 108 },
			59: { x: 27, y: 108 },
			58: { x: 54, y: 108 },
			57: { x: 81, y: 108 },
			56: { x: 108, y: 108 },
			55: { x: 135, y: 108 },
			54: { x: 162, y: 108 },
			53: { x: 189, y: 108 },
			52: { x: 216, y: 108 },
			51: { x: 243, y: 108 },

			41: { x: 0, y: 135 },
			42: { x: 27, y: 135 },
			43: { x: 54, y: 135 },
			44: { x: 81, y: 135 },
			45: { x: 108, y: 135 },
			46: { x: 135, y: 135 },
			47: { x: 162, y: 135 },
			48: { x: 189, y: 135 },
			49: { x: 216, y: 135 },
			50: { x: 243, y: 135 },

			40: { x: 0, y: 162 },
			39: { x: 27, y: 162 },
			38: { x: 54, y: 162 },
			37: { x: 81, y: 162 },
			36: { x: 108, y: 162 },
			35: { x: 135, y: 162 },
			34: { x: 162, y: 162 },
			33: { x: 189, y: 162 },
			32: { x: 216, y: 162 },
			31: { x: 243, y: 162 },

			21: { x: 0, y: 189 },
			22: { x: 27, y: 189 },
			23: { x: 54, y: 189 },
			24: { x: 81, y: 189 },
			25: { x: 108, y: 189 },
			26: { x: 135, y: 189 },
			27: { x: 162, y: 189 },
			28: { x: 189, y: 189 },
			29: { x: 216, y: 189 },
			30: { x: 243, y: 189 },

			20: { x: 0, y: 216 },
			19: { x: 27, y: 216 },
			18: { x: 54, y: 216 },
			17: { x: 81, y: 216 },
			16: { x: 108, y: 216 },
			15: { x: 135, y: 216 },
			14: { x: 162, y: 216 },
			13: { x: 189, y: 216 },
			12: { x: 216, y: 216 },
			11: { x: 243, y: 216 },

			1: { x: 0, y: 243 },
			2: { x: 27, y: 243 },
			3: { x: 54, y: 243 },
			4: { x: 81, y: 243 },
			5: { x: 108, y: 243 },
			6: { x: 135, y: 243 },
			7: { x: 162, y: 243 },
			8: { x: 189, y: 243 },
			9: { x: 216, y: 243 },
			10: { x: 243, y: 243 },
		}, // < 320px
		sm: {
			100: { x: 0, y: 0 },
			99: { x: 31, y: 0 },
			98: { x: 62, y: 0 },
			97: { x: 93, y: 0 },
			96: { x: 124, y: 0 },
			95: { x: 155, y: 0 },
			94: { x: 186, y: 0 },
			93: { x: 217, y: 0 },
			92: { x: 248, y: 0 },
			91: { x: 279, y: 0 },

			81: { x: 0, y: 31 },
			82: { x: 31, y: 31 },
			83: { x: 62, y: 31 },
			84: { x: 93, y: 31 },
			85: { x: 124, y: 31 },
			86: { x: 155, y: 31 },
			87: { x: 186, y: 31 },
			88: { x: 217, y: 31 },
			89: { x: 248, y: 31 },
			90: { x: 279, y: 31 },

			80: { x: 0, y: 62 },
			79: { x: 31, y: 62 },
			78: { x: 62, y: 62 },
			77: { x: 93, y: 62 },
			76: { x: 124, y: 62 },
			75: { x: 155, y: 62 },
			74: { x: 186, y: 62 },
			73: { x: 217, y: 62 },
			72: { x: 248, y: 62 },
			71: { x: 279, y: 62 },

			61: { x: 0, y: 93 },
			62: { x: 31, y: 93 },
			63: { x: 62, y: 93 },
			64: { x: 93, y: 93 },
			65: { x: 124, y: 93 },
			66: { x: 155, y: 93 },
			67: { x: 186, y: 93 },
			68: { x: 217, y: 93 },
			69: { x: 248, y: 93 },
			70: { x: 279, y: 93 },

			60: { x: 0, y: 124 },
			59: { x: 31, y: 124 },
			58: { x: 62, y: 124 },
			57: { x: 93, y: 124 },
			56: { x: 124, y: 124 },
			55: { x: 155, y: 124 },
			54: { x: 186, y: 124 },
			53: { x: 217, y: 124 },
			52: { x: 248, y: 124 },
			51: { x: 279, y: 124 },

			41: { x: 0, y: 155 },
			42: { x: 31, y: 155 },
			43: { x: 62, y: 155 },
			44: { x: 93, y: 155 },
			45: { x: 124, y: 155 },
			46: { x: 155, y: 155 },
			47: { x: 186, y: 155 },
			48: { x: 217, y: 155 },
			49: { x: 248, y: 155 },
			50: { x: 279, y: 155 },

			40: { x: 0, y: 186 },
			39: { x: 31, y: 186 },
			38: { x: 62, y: 186 },
			37: { x: 93, y: 186 },
			36: { x: 124, y: 186 },
			35: { x: 155, y: 186 },
			34: { x: 186, y: 186 },
			33: { x: 217, y: 186 },
			32: { x: 248, y: 186 },
			31: { x: 279, y: 186 },

			21: { x: 0, y: 217 },
			22: { x: 31, y: 217 },
			23: { x: 62, y: 217 },
			24: { x: 93, y: 217 },
			25: { x: 124, y: 217 },
			26: { x: 155, y: 217 },
			27: { x: 186, y: 217 },
			28: { x: 217, y: 217 },
			29: { x: 248, y: 217 },
			30: { x: 279, y: 217 },

			20: { x: 0, y: 248 },
			19: { x: 31, y: 248 },
			18: { x: 62, y: 248 },
			17: { x: 93, y: 248 },
			16: { x: 124, y: 248 },
			15: { x: 155, y: 248 },
			14: { x: 186, y: 248 },
			13: { x: 217, y: 248 },
			12: { x: 248, y: 248 },
			11: { x: 279, y: 248 },

			1: { x: 0, y: 279 },
			2: { x: 31, y: 279 },
			3: { x: 62, y: 279 },
			4: { x: 93, y: 279 },
			5: { x: 124, y: 279 },
			6: { x: 155, y: 279 },
			7: { x: 186, y: 279 },
			8: { x: 217, y: 279 },
			9: { x: 248, y: 279 },
			10: { x: 279, y: 279 },
		}, // 320px -  380px
		// md: {
		// 	100: { x: 0, y: 0 },
		// 	99: { x: 33, y: 0 },
		// 	98: { x: 66, y: 0 },
		// 	97: { x: 99, y: 0 },
		// 	96: { x: 132, y: 0 },
		// 	95: { x: 165, y: 0 },
		// 	94: { x: 198, y: 0 },
		// 	93: { x: 231, y: 0 },
		// 	92: { x: 264, y: 0 },
		// 	91: { x: 297, y: 0 },

		// 	81: { x: 0, y: 33 },
		// 	82: { x: 33, y: 33 },
		// 	83: { x: 66, y: 33 },
		// 	84: { x: 99, y: 33 },
		// 	85: { x: 132, y: 33 },
		// 	86: { x: 165, y: 33 },
		// 	87: { x: 198, y: 33 },
		// 	88: { x: 231, y: 33 },
		// 	89: { x: 264, y: 33 },
		// 	90: { x: 297, y: 33 },

		// 	80: { x: 0, y: 66 },
		// 	79: { x: 33, y: 66 },
		// 	78: { x: 66, y: 66 },
		// 	77: { x: 99, y: 66 },
		// 	76: { x: 132, y: 66 },
		// 	75: { x: 165, y: 66 },
		// 	74: { x: 198, y: 66 },
		// 	73: { x: 231, y: 66 },
		// 	72: { x: 264, y: 66 },
		// 	71: { x: 297, y: 66 },

		// 	61: { x: 0, y: 99 },
		// 	62: { x: 33, y: 99 },
		// 	63: { x: 66, y: 99 },
		// 	64: { x: 99, y: 99 },
		// 	65: { x: 132, y: 99 },
		// 	66: { x: 165, y: 99 },
		// 	67: { x: 198, y: 99 },
		// 	68: { x: 231, y: 99 },
		// 	69: { x: 264, y: 99 },
		// 	70: { x: 297, y: 99 },

		// 	60: { x: 0, y: 132 },
		// 	59: { x: 33, y: 132 },
		// 	58: { x: 66, y: 132 },
		// 	57: { x: 99, y: 132 },
		// 	56: { x: 132, y: 132 },
		// 	55: { x: 165, y: 132 },
		// 	54: { x: 198, y: 132 },
		// 	53: { x: 231, y: 132 },
		// 	52: { x: 264, y: 132 },
		// 	51: { x: 297, y: 132 },

		// 	41: { x: 0, y: 165 },
		// 	42: { x: 33, y: 165 },
		// 	43: { x: 66, y: 165 },
		// 	44: { x: 99, y: 165 },
		// 	45: { x: 132, y: 165 },
		// 	46: { x: 165, y: 165 },
		// 	47: { x: 198, y: 165 },
		// 	48: { x: 231, y: 165 },
		// 	49: { x: 264, y: 165 },
		// 	50: { x: 297, y: 165 },

		// 	40: { x: 0, y: 198 },
		// 	39: { x: 33, y: 198 },
		// 	38: { x: 66, y: 198 },
		// 	37: { x: 99, y: 198 },
		// 	36: { x: 132, y: 198 },
		// 	35: { x: 165, y: 198 },
		// 	34: { x: 198, y: 198 },
		// 	33: { x: 231, y: 198 },
		// 	32: { x: 264, y: 198 },
		// 	31: { x: 297, y: 198 },

		// 	21: { x: 0, y: 231 },
		// 	22: { x: 33, y: 231 },
		// 	23: { x: 66, y: 231 },
		// 	24: { x: 99, y: 231 },
		// 	25: { x: 132, y: 231 },
		// 	26: { x: 165, y: 231 },
		// 	27: { x: 198, y: 231 },
		// 	28: { x: 231, y: 231 },
		// 	29: { x: 264, y: 231 },
		// 	30: { x: 297, y: 231 },

		// 	20: { x: 0, y: 264 },
		// 	19: { x: 33, y: 264 },
		// 	18: { x: 66, y: 264 },
		// 	17: { x: 99, y: 264 },
		// 	16: { x: 132, y: 264 },
		// 	15: { x: 165, y: 264 },
		// 	14: { x: 198, y: 264 },
		// 	13: { x: 231, y: 264 },
		// 	12: { x: 264, y: 264 },
		// 	11: { x: 297, y: 264 },

		// 	1: { x: 0, y: 297 },
		// 	2: { x: 33, y: 297 },
		// 	3: { x: 66, y: 297 },
		// 	4: { x: 99, y: 297 },
		// 	5: { x: 132, y: 297 },
		// 	6: { x: 165, y: 297 },
		// 	7: { x: 198, y: 297 },
		// 	8: { x: 231, y: 297 },
		// 	9: { x: 264, y: 297 },
		// 	10: { x: 297, y: 297 },
		// }, // 380px - 390px
		// xl: {
		// 	100: { x: 0, y: 0 },
		// 	99: { x: 35, y: 0 },
		// 	98: { x: 70, y: 0 },
		// 	97: { x: 105, y: 0 },
		// 	96: { x: 140, y: 0 },
		// 	95: { x: 175, y: 0 },
		// 	94: { x: 210, y: 0 },
		// 	93: { x: 245, y: 0 },
		// 	92: { x: 280, y: 0 },
		// 	91: { x: 315, y: 0 },

		// 	81: { x: 0, y: 33 },
		// 	82: { x: 35, y: 35 },
		// 	83: { x: 70, y: 35 },
		// 	84: { x: 105, y: 35 },
		// 	85: { x: 140, y: 35 },
		// 	86: { x: 175, y: 35 },
		// 	87: { x: 210, y: 35 },
		// 	88: { x: 245, y: 35 },
		// 	89: { x: 280, y: 35 },
		// 	90: { x: 315, y: 35 },

		// 	80: { x: 0, y: 70 },
		// 	79: { x: 35, y: 70 },
		// 	78: { x: 70, y: 70 },
		// 	77: { x: 105, y: 70 },
		// 	76: { x: 140, y: 70 },
		// 	75: { x: 175, y: 70 },
		// 	74: { x: 210, y: 70 },
		// 	73: { x: 245, y: 70 },
		// 	72: { x: 280, y: 70 },
		// 	71: { x: 315, y: 70 },

		// 	61: { x: 0, y: 105 },
		// 	62: { x: 35, y: 105 },
		// 	63: { x: 70, y: 105 },
		// 	64: { x: 105, y: 105 },
		// 	65: { x: 140, y: 105 },
		// 	66: { x: 175, y: 105 },
		// 	67: { x: 210, y: 105 },
		// 	68: { x: 245, y: 105 },
		// 	69: { x: 280, y: 105 },
		// 	70: { x: 315, y: 105 },

		// 	60: { x: 0, y: 140 },
		// 	59: { x: 35, y: 140 },
		// 	58: { x: 70, y: 140 },
		// 	57: { x: 105, y: 140 },
		// 	56: { x: 140, y: 140 },
		// 	55: { x: 175, y: 140 },
		// 	54: { x: 210, y: 140 },
		// 	53: { x: 245, y: 140 },
		// 	52: { x: 280, y: 140 },
		// 	51: { x: 315, y: 140 },

		// 	41: { x: 0, y: 175 },
		// 	42: { x: 35, y: 175 },
		// 	43: { x: 70, y: 175 },
		// 	44: { x: 105, y: 175 },
		// 	45: { x: 140, y: 175 },
		// 	46: { x: 175, y: 175 },
		// 	47: { x: 210, y: 175 },
		// 	48: { x: 245, y: 175 },
		// 	49: { x: 280, y: 175 },
		// 	50: { x: 315, y: 175 },

		// 	40: { x: 0, y: 210 },
		// 	39: { x: 35, y: 210 },
		// 	38: { x: 70, y: 210 },
		// 	37: { x: 105, y: 210 },
		// 	36: { x: 140, y: 210 },
		// 	35: { x: 175, y: 210 },
		// 	34: { x: 210, y: 210 },
		// 	33: { x: 245, y: 210 },
		// 	32: { x: 280, y: 210 },
		// 	31: { x: 315, y: 210 },

		// 	21: { x: 0, y: 245 },
		// 	22: { x: 35, y: 245 },
		// 	23: { x: 70, y: 245 },
		// 	24: { x: 105, y: 245 },
		// 	25: { x: 140, y: 245 },
		// 	26: { x: 175, y: 245 },
		// 	27: { x: 210, y: 245 },
		// 	28: { x: 245, y: 245 },
		// 	29: { x: 280, y: 245 },
		// 	30: { x: 315, y: 245 },

		// 	20: { x: 0, y: 280 },
		// 	19: { x: 35, y: 280 },
		// 	18: { x: 70, y: 280 },
		// 	17: { x: 105, y: 280 },
		// 	16: { x: 140, y: 280 },
		// 	15: { x: 175, y: 280 },
		// 	14: { x: 210, y: 280 },
		// 	13: { x: 245, y: 280 },
		// 	12: { x: 280, y: 280 },
		// 	11: { x: 315, y: 280 },

		// 	1: { x: 0, y: 315 },
		// 	2: { x: 35, y: 315 },
		// 	3: { x: 70, y: 315 },
		// 	4: { x: 105, y: 315 },
		// 	5: { x: 140, y: 315 },
		// 	6: { x: 175, y: 315 },
		// 	7: { x: 210, y: 315 },
		// 	8: { x: 245, y: 315 },
		// 	9: { x: 280, y: 315 },
		// 	10: { x: 315, y: 315 },
		// }, // 390px - 480px
		// xxl: {
		// 	100: { x: 0, y: 0 },
		// 	99: { x: 35, y: 0 },
		// 	98: { x: 70, y: 0 },
		// 	97: { x: 105, y: 0 },
		// 	96: { x: 140, y: 0 },
		// 	95: { x: 175, y: 0 },
		// 	94: { x: 210, y: 0 },
		// 	93: { x: 245, y: 0 },
		// 	92: { x: 280, y: 0 },
		// 	91: { x: 315, y: 0 },

		// 	81: { x: 0, y: 33 },
		// 	82: { x: 35, y: 35 },
		// 	83: { x: 70, y: 35 },
		// 	84: { x: 105, y: 35 },
		// 	85: { x: 140, y: 35 },
		// 	86: { x: 175, y: 35 },
		// 	87: { x: 210, y: 35 },
		// 	88: { x: 245, y: 35 },
		// 	89: { x: 280, y: 35 },
		// 	90: { x: 315, y: 35 },

		// 	80: { x: 0, y: 70 },
		// 	79: { x: 35, y: 70 },
		// 	78: { x: 70, y: 70 },
		// 	77: { x: 105, y: 70 },
		// 	76: { x: 140, y: 70 },
		// 	75: { x: 175, y: 70 },
		// 	74: { x: 210, y: 70 },
		// 	73: { x: 245, y: 70 },
		// 	72: { x: 280, y: 70 },
		// 	71: { x: 315, y: 70 },

		// 	61: { x: 0, y: 105 },
		// 	62: { x: 35, y: 105 },
		// 	63: { x: 70, y: 105 },
		// 	64: { x: 105, y: 105 },
		// 	65: { x: 140, y: 105 },
		// 	66: { x: 175, y: 105 },
		// 	67: { x: 210, y: 105 },
		// 	68: { x: 245, y: 105 },
		// 	69: { x: 280, y: 105 },
		// 	70: { x: 315, y: 105 },

		// 	60: { x: 0, y: 140 },
		// 	59: { x: 35, y: 140 },
		// 	58: { x: 70, y: 140 },
		// 	57: { x: 105, y: 140 },
		// 	56: { x: 140, y: 140 },
		// 	55: { x: 175, y: 140 },
		// 	54: { x: 210, y: 140 },
		// 	53: { x: 245, y: 140 },
		// 	52: { x: 280, y: 140 },
		// 	51: { x: 315, y: 140 },

		// 	41: { x: 0, y: 175 },
		// 	42: { x: 35, y: 175 },
		// 	43: { x: 70, y: 175 },
		// 	44: { x: 105, y: 175 },
		// 	45: { x: 140, y: 175 },
		// 	46: { x: 175, y: 175 },
		// 	47: { x: 210, y: 175 },
		// 	48: { x: 245, y: 175 },
		// 	49: { x: 280, y: 175 },
		// 	50: { x: 315, y: 175 },

		// 	40: { x: 0, y: 210 },
		// 	39: { x: 35, y: 210 },
		// 	38: { x: 70, y: 210 },
		// 	37: { x: 105, y: 210 },
		// 	36: { x: 140, y: 210 },
		// 	35: { x: 175, y: 210 },
		// 	34: { x: 210, y: 210 },
		// 	33: { x: 245, y: 210 },
		// 	32: { x: 280, y: 210 },
		// 	31: { x: 315, y: 210 },

		// 	21: { x: 0, y: 245 },
		// 	22: { x: 35, y: 245 },
		// 	23: { x: 70, y: 245 },
		// 	24: { x: 105, y: 245 },
		// 	25: { x: 140, y: 245 },
		// 	26: { x: 175, y: 245 },
		// 	27: { x: 210, y: 245 },
		// 	28: { x: 245, y: 245 },
		// 	29: { x: 280, y: 245 },
		// 	30: { x: 315, y: 245 },

		// 	20: { x: 0, y: 280 },
		// 	19: { x: 35, y: 280 },
		// 	18: { x: 70, y: 280 },
		// 	17: { x: 105, y: 280 },
		// 	16: { x: 140, y: 280 },
		// 	15: { x: 175, y: 280 },
		// 	14: { x: 210, y: 280 },
		// 	13: { x: 245, y: 280 },
		// 	12: { x: 280, y: 280 },
		// 	11: { x: 315, y: 280 },

		// 	1: { x: 0, y: 315 },
		// 	2: { x: 35, y: 315 },
		// 	3: { x: 70, y: 315 },
		// 	4: { x: 105, y: 315 },
		// 	5: { x: 140, y: 315 },
		// 	6: { x: 175, y: 315 },
		// 	7: { x: 210, y: 315 },
		// 	8: { x: 245, y: 315 },
		// 	9: { x: 280, y: 315 },
		// 	10: { x: 315, y: 315 },
		// }, // 390px - 480px
	},
};

function generateArea(value) {
	let gridSize = 10;
	let total = value * (gridSize - 1);

	let area = {};
	let wall = 100;

	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			if (wall <= 10 || (wall <= 30 && wall >= 21) || (wall <= 50 && wall >= 41) || (wall <= 70 && wall >= 61) || (wall <= 90 && wall >= 81)) {
				area[wall--] = { x: Math.abs(j * value - total), y: i * value };
			} else {
				area[wall--] = { x: j * value, y: i * value };
			}
		}
	}

	return area;
}

const diceBorderColor = (color) => {
	switch (color) {
		case "r": {
			return "red";
		}
		case "y": {
			return "yellow";
		}

		default: {
			return "black";
		}
	}
};
const player = (color) => {
	switch (color) {
		case "r": {
			return "player1";
		}
		case "y": {
			return "player2";
		}

		default: {
			return "black";
		}
	}
};
export { generateArea, cordinate, snakes, ladder, diceBorderColor, initBoardPosition, player, snakeCordinate };
