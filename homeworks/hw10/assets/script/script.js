// s1 outfit
let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");
let s3 = document.getElementById("s3");
let s4 = document.getElementById("s4");
let s5 = document.getElementById("s5");

/* the process: */
s1.onclick = s1_function;
function s1_function() {
	document.getElementById("body").style.display = "none";
	hideOutfits();
	document.getElementById("o1").style.display = "block";
}

// s2 outfit
s2.onclick = s2_function;
function s2_function() {
	document.getElementById("body").style.display = "none";
	hideOutfits();
	document.getElementById("o2").style.display = "block";
}

// s3 outfit
s3.onclick = s3_function;
function s3_function() {
	document.getElementById("body").style.display = "none";
	hideOutfits();
	document.getElementById("o3").style.display = "block";
}

// s4 outfit
s4.onclick = s4_function;
function s4_function() {
	document.getElementById("body").style.display = "none";
	hideOutfits();
	document.getElementById("o4").style.display = "block";
}

// s5 outfit
s5.onclick = s5_function; 
function s5_function() {
	document.getElementById("body").style.display = "none";
	hideOutfits();
	document.getElementById("o5").style.display = "block";
}

// strip outfit
let strip = document.getElementById("strip-button")
strip.onclick = function() {
	document.getElementById("body").style.display = "block";
	hideOutfits();
};

function hideOutfits() {
	let outfits = document.getElementsByClassName("outfit");
	for (let i = 0; i < outfits.length; i++) {
		outfits[i].style.display = "none";
	}
	

}
