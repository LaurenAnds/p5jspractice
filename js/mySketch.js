//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
background("gray")
randomSentence();
	noLoop();
}

// write a function randomSentence which generates a string 
// using three lists - noun, adj and verb
//can use random(myArray)
// create the three lists 
// create the function which picks from them 
// "The" adj noun verb "the" adj noun verb 

function randomSentence() {
	
	const nouns = [
    "AI",
    "basketball",
    "beat",
    "bicycle",
    "book",
    "car",
    "chair",
    "chef",
    "demon",
    "doll",
    "dream",
    "engineer",
    "fire",
    "goliath",
    "grizzly",
    "head-of-state",
    "heartbreak",
    "helicopter",
    "horror",
    "house",
    "jungle",
    "linter",
    "magic",
    "meeple",
    "monster",
    "musing",
    "ninja",
    "ocean",
    "painting",
    "pilot",
    "pirate",
    "poison",
    "program",
    "quarter-back",
    "rhyme",
    "robot",
    "romance",
    "shadow",
    "silence",
    "skeleton",
    "space-trader",
    "star",
    "steak",
    "sunset",
    "tarantula",
    "teacher",
    "teleporter",
    "tempest",
    "time-travel",
    "train",
    "tune",
    "whisper",
    "witch",
    "wizard",
];

const verbs = [
    "ate",
    "awakened",
    "chastised",
    "conquered",
    "cooked",
    "cradled",
    "created",
    "destroyed",
    "dispelled",
    "embraced",
    "enveloped",
    "fought",
    "ignited",
    "illuminated",
    "inspired",
    "pursued",
    "revealed",
    "schooled",
];

const adjectives = [
    "3d",
    "aggressive",
    "agnostic",
    "ai",
    "angelic",
    "animated",
    "anime",
    "blubbering",
    "candy",
    "captivating",
    "castaway",
    "dead",
    "enchanting",
    "ephemeral",
    "ethereal",
    "euro",
    "evil",
    "grizzly",
    "haunted",
    "heartbroken",
    "hell-bound",
    "intergalactic",
    "lovestruck",
    "magical",
    "mechanised",
    "mind-blown",
    "mystical",
    "mythical",
    "norse",
    "painted",
    "pious",
    "pirate",
    "planetary",
    "radiant",
    "resplendent",
    "revolutionary",
    "runaway",
    "sci-fi",
    "serene",
    "ship-wrecked",
    "smelly",
    "space-opera",
    "space-punk",
    "star-crossed",
    "sun-bound",
    "sunburnt",
    "time-travelling",
    "transcendent",
    "typescript",
    "underground",
    "underwater",
    "victorian",
    "war-time",
    "whimsical",
];

	textAlign(CENTER);
	textSize(20);
	text("The " + random(adjectives) + " " + random(nouns) + " "+ random(verbs) + " " + "the " + random(adjectives) + " " + random(nouns) + " " + random(verbs) + ".", width/2, height/2)
}

function mousePressed(){
	
redraw();
}
