/*jshint esversion: 6 */

var rez = 20;
var field = [];
var cols;
var rows;

function setup() {
	createCanvas(400, 200);

	cols = width / rez;
	console.log(cols);
	rows = height / rez;
	console.log(rows);
	for (i = 0; i < rows; i++) {
		let k = [];
		for (j = 0; j < cols; j++) {
			rState = random(1);
			if (rState >= 0.5) {
				k.push(new Tile(j, i, 1));
			} else {
				k.push(new Tile(j, i, 0));
			}
			//console.log("created tile")
		}
		field.push(k);
	}

	smoothMap()
	//field[5][5].checkState(5, 5);

	for (i = 0; i < rows; i++) {
		for (j = 0; j < cols; j++) {
			field[i][j].render();
		}
	}
}

function draw() {

}

function smoothMap() {
	for (i = 0; i < rows; i++) {
		for (j = 0; j < cols; j++) {
			field[i][j].checkState(i, j);
		}
	}
}