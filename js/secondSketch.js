function setup() {
	createCanvas(windowWidth, windowHeight);
	background("gray");
	noLoop();
}


function draw() {
	background("gray")

	let colourPalette = [
		"#f6d76b",
		"#ff9036",
		"#d6254d",
		"#ff5475",
		"#fdeba9"
	]


	for (let test = 0; test < 6; test++) {
		let clusterCentreX = random(0, width);
		let clusterCentreY = random(0, height);
		fill(random(colourPalette))
		generateCluster(clusterCentreX, clusterCentreY);
		generateCluster(clusterCentreX, clusterCentreY);
		generateCluster(clusterCentreX, clusterCentreY);
		generateCluster(clusterCentreX, clusterCentreY);
		generateCluster(clusterCentreX, clusterCentreY);
	}
}



function generateCluster(clusterCentreX, clusterCentreY) {


	//choose locations for a cluster 
	//so we need an x and y location for it to start 
	//then need 5 or 10 random locations near that location
	//so x + random(number, number)
	//y + random(number, number)
	//then draw squares at these positions (random sizes)
	//then do the same for each cluster 



	let amountOfShapes = random(2, 10);

	for (let i = 0; i < amountOfShapes; i++);
	let x = clusterCentreX + random(-25, 25);
	let y = clusterCentreY + random(-25, 25);
	rectMode(CENTER);
	square(x, y, random(10, 100))



}

function mousePressed() {
	redraw();
}