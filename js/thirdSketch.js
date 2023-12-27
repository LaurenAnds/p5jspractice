let x, y
let rectWidth, rectHeight
let diameter = 5
let circlePositionX = 20
let circlePositionY = 10

function setup() {
	createCanvas(600, 600);
	background("gray");
	noLoop();
}


function draw() {

	drawWallOfBricks();
	// 	while (y < height) {
	// 	// drawRowOfBricks(y);
			
	// 		y = y + 50;
	// }
	

}



function drawWallOfBricks() {
	// // for (let y = 0; y <= width; y += 50) {
	// drawRowOfBricks(0);
	
	let y = 0
	
	while (y < height) {
		drawRowOfBricks(y);
		y = y + 50;
	}

	// drawRowOfBricks(50);
	// drawRowOfBricks(100);
	// drawRowOfBricks(150);


}

function drawRowOfBricks(y) {
	
	const colourPalette = [
  "#312736",
  "#d4838f",
  "#d6abb1",
  "#d9d9d9",
  "#c4ffeb"
]
	
	let x = 0
	//while x not at end of canvas
	//    bw = random
	//		draw brick
	//		update x
	while (x < width) {
		let bw = random(20, 100);
		fill(random(colourPalette));
		rect(x, y, bw, 50);
		x = x + bw;
	}



}