const snakes = {
	8: [8, 9, 12, 13, 14, 16, 17, 4],
	18: [18, 2, 1],
	26: [26, 27, 13, 10],
	39: [39, 38, 37, 24, 17, 4, 5],
	51: [51, 50, 31, 32, 33, 28, 13, 7, 6],
	54: [54, 47, 33, 27, 35, 36],
	56: [56, 57, 44, 36, 25, 17, 18, 19, 1],
	60: [60, 59, 42, 40, 21, 19, 23],

	75: [75, 74, 73, 68, 53, 47, 34, 28],

	90: [90, 72, 70, 52, 49, 48],
	85: [85, 77, 64, 57, 58, 59],
	83: [83, 84, 77, 63, 58, 43, 44, 45],
	92: [92, 93, 88, 73, 69, 52, 53, 46, 35, 25],
	97: [97, 84, 85, 95, 94, 87],
	99: [99, 81, 79, 78, 63],
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
	3: [3, 20],
	6: [6, 14],
	11: [11, 28],
	15: [15, 34],
	17: [17, 36, 55, 74],
	22: [22, 37],
	38: [38, 59],
	49: [49, 53, 67],
	57: [57, 76],
	61: [61, 78],
	73: [73, 86],
	88: [88, 91],
	81: [81, 98],
};

const initBoardPosition = [
	100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 80, 79, 78, 77,
	76, 75, 74, 73, 72, 71, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 60, 59, 58, 57, 56, 55, 54, 53,
	52, 51, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 21, 22,
	23, 24, 25, 26, 27, 28, 29, 30, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9,
	10,
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
		100: { x: 0, y: 0 },
		99: { x: 35, y: 0 },
		98: { x: 70, y: 0 },
		97: { x: 105, y: 0 },
		96: { x: 140, y: 0 },
		95: { x: 175, y: 0 },
		94: { x: 210, y: 0 },
		93: { x: 245, y: 0 },
		92: { x: 280, y: 0 },
		91: { x: 315, y: 0 },

		81: { x: 0, y: 35 },
		82: { x: 35, y: 35 },
		83: { x: 70, y: 35 },
		84: { x: 105, y: 35 },
		85: { x: 140, y: 35 },
		86: { x: 175, y: 35 },
		87: { x: 210, y: 35 },
		88: { x: 245, y: 35 },
		89: { x: 280, y: 35 },
		90: { x: 315, y: 35 },

		80: { x: 0, y: 70 },
		79: { x: 35, y: 70 },
		78: { x: 70, y: 70 },
		77: { x: 105, y: 70 },
		76: { x: 140, y: 70 },
		75: { x: 175, y: 70 },
		74: { x: 210, y: 70 },
		73: { x: 245, y: 70 },
		72: { x: 280, y: 70 },
		71: { x: 315, y: 70 },

		61: { x: 0, y: 105 },
		62: { x: 35, y: 105 },
		63: { x: 70, y: 105 },
		64: { x: 105, y: 105 },
		65: { x: 140, y: 105 },
		66: { x: 175, y: 105 },
		67: { x: 210, y: 105 },
		68: { x: 245, y: 105 },
		69: { x: 280, y: 105 },
		70: { x: 315, y: 105 },

		60: { x: 0, y: 140 },
		59: { x: 35, y: 140 },
		58: { x: 70, y: 140 },
		57: { x: 105, y: 140 },
		56: { x: 140, y: 140 },
		55: { x: 175, y: 140 },
		54: { x: 210, y: 140 },
		53: { x: 245, y: 140 },
		52: { x: 280, y: 140 },
		51: { x: 315, y: 140 },

		41: { x: 0, y: 175 },
		42: { x: 35, y: 175 },
		43: { x: 70, y: 175 },
		44: { x: 105, y: 175 },
		45: { x: 140, y: 175 },
		46: { x: 175, y: 175 },
		47: { x: 210, y: 175 },
		48: { x: 245, y: 175 },
		49: { x: 280, y: 175 },
		50: { x: 315, y: 175 },

		40: { x: 0, y: 210 },
		39: { x: 35, y: 210 },
		38: { x: 70, y: 210 },
		37: { x: 105, y: 210 },
		36: { x: 140, y: 210 },
		35: { x: 175, y: 210 },
		34: { x: 210, y: 210 },
		33: { x: 245, y: 210 },
		32: { x: 280, y: 210 },
		31: { x: 315, y: 210 },

		21: { x: 0, y: 245 },
		22: { x: 35, y: 245 },
		23: { x: 70, y: 245 },
		24: { x: 105, y: 245 },
		25: { x: 140, y: 245 },
		26: { x: 175, y: 245 },
		27: { x: 210, y: 245 },
		28: { x: 245, y: 245 },
		29: { x: 280, y: 245 },
		30: { x: 315, y: 245 },

		20: { x: 0, y: 280 },
		19: { x: 35, y: 280 },
		18: { x: 70, y: 280 },
		17: { x: 105, y: 280 },
		16: { x: 140, y: 280 },
		15: { x: 175, y: 280 },
		14: { x: 210, y: 280 },
		13: { x: 245, y: 280 },
		12: { x: 280, y: 280 },
		11: { x: 315, y: 280 },

		1: { x: 0, y: 315 },
		2: { x: 35, y: 315 },
		3: { x: 70, y: 315 },
		4: { x: 105, y: 315 },
		5: { x: 140, y: 315 },
		6: { x: 175, y: 315 },
		7: { x: 210, y: 315 },
		8: { x: 245, y: 315 },
		9: { x: 280, y: 315 },
		10: { x: 315, y: 315 },
	},
};
function generateGrid(value) {
	let grid = {};
	let count = 100;

	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			if (
				count <= 10 ||
				(count <= 30 && count >= 21) ||
				(count <= 50 && count >= 41) ||
				(count <= 70 && count >= 61) ||
				(count <= 90 && count >= 81)
			) {
				grid[count--] = { x: Math.abs(j * value - 315), y: i * value };
			} else {
				grid[count--] = { x: j * value, y: i * value };
			}
		}
	}

	return grid;
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
export {
	generateGrid,
	snakes,
	ladder,
	diceBorderColor,
	initBoardPosition,
	player,
	cordinate,
	snakeCordinate,
};
