/*jshint esversion: 6 */

class Tile {
	constructor(x, y, state) {
		this.x = x * rez;
		this.y = y * rez;
		this.state = state;
		this.col = state * 255;
	}

	render() {
		fill(this.col);
		noStroke();
		rect(this.x, this.y, this.x + rez, this.y + rez);
	}

	checkState(y, x) {
		let wallCount = 0;
		let floorCount = 0;

		for (i = -1; i < 2; i++) {
			let nY = y + i;
			if (nY >= 0 && nY <= rows) {
				for (j = -1; j < 2; j++) {
					let nX = x + j;
					console.log(nX, nY)
					if (!(i == 0 && j == 0)) {
						if (nX >= 0 && nX <= cols) {
							if (field[nY][nX].state == 1) {
								wallCount += 1;
								console.log(wallCount);
							} else if (field[nY][nX].state == 0) {
								floorCount += 1;
								console.log(floorCount);
							}
						}
					}
				}
			}
		}
		if (this.state == 1 && floorCount >= 4) {
			this.state = 0;
		}

		if (this.state == 0 && wallCount >= 3) {
			this.state = 1;
		}
	}

	getState() {
		return this.state;
	}
}