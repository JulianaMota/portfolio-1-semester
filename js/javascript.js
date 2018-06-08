let i = 0; 
let o = 0;
let images2 = [];
let images = [];
let time = 2500;

// Image List i
images[0] = "/images/prototype4_1366x768.png";
images[1] = "/images/prototype2_1366x768.png";
images[2] = "/images/prototype6_1366x768.png";
images[3] = "/images/prototype7_1366x768.png";
images[4] = "/images/prototype3_1366x768.png";
images[5] = "/images/prototype5_1366x768.png";
images[5] = "/images/prototype1_1366x768.png";

// Change Image
function changeImg(){
	document.slide1.src = images[i];
    
	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}	
}

// Run function every x seconds
setInterval(changeImg,time)

// Run function when page loads
window.onload=changeImg;


// Image List o
images2[0] = "/images/redesign1_1366x768.png";
images2[1] = "/images/prototype-rs_1366x768.png";

// Change Image2
function changeImg2(){
	document.slide2.src = images2[o];
    
	// Check If Index Is Under Max
	if(o < images2.length - 1){
	  // Add 1 to Index
	  o++; 
	} else { 
		// Reset Back To O
		o = 0;
	}	
}

// Run function every x seconds
setInterval(changeImg2,time)

// Run function when page loads
window.onload=changeImg2;



//Menu Animation

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("menu").style.top = "0";
  } else {
    document.getElementById("menu").style.top = "-50px";
  }
}
