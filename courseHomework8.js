//Задача №1

function generateArray() {
	let ArrayLength = 3;
	let ArrayOne = [];
	ArrayOne = new Array(ArrayLength);
	for (i = 0; i < ArrayOne.length; i++) {
		ArrayOne[i] = Math.floor((Math.random() * 20));
	}
	return ArrayOne;
}
let ArrayMember = generateArray();


function MaxArray() {
	let max = [];
	for (j = 0; j < arguments.length; j++) {
		max[j] = maxNumber(arguments[j]);
	}
	return max.join(',');
}
console.log(MaxArray(ArrayMember, generateArray()));


function maxNumber(a) {
	console.log(a);
	let number = a[0];
	for (k = 0; k < a.length; k++) {
		if (a[k] > number) {
			number = a[k];
		}
	}

	return number;
}


// console.log(ArrayMember)
// console.log(maxNumber(ArrayMember));




// function MaxArray() {
// 	// console.log(arguments);
// 	let max = [];
// 	for (j = 0; j < arguments.length; j++) {
// 		max[j] = arguments[j][0];
// 		console.log(arguments[j]);
// 		for (c = 0; c < arguments[j].length; c++) {
// 			if (arguments[j][c] > max[j]) {
// 				max[j] = arguments[j][c];
// 			}
// 		}
// 	}
// 	return max;
// }

// console.log(MaxArray(ArrayMember), generateArray());