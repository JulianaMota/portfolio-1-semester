let i = 0;
let o = 0;
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let images7 = [];
let images6 = [];
let images5 = [];
let images4 = [];
let images3 = [];
let images2 = [];
let images = [];
let time = 2500;

//Menu Animation

window.onscroll = function () {
    scrollFunction()
};


function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("menu").style.top = "0";
    } else {
        document.getElementById("menu").style.top = "-50px";
    }
}




// Image List i
images[0] = "./images/prototype4_1366x768.png";
images[1] = "./images/prototype2_1366x768.png";
images[2] = "./images/prototype6_1366x768.png";
images[3] = "./images/prototype7_1366x768.png";
images[4] = "./images/prototype3_1366x768.png";
images[5] = "./images/prototype5_1366x768.png";
images[5] = "./images/prototype1_1366x768.png";

// Change Image
function changeImg() {
    document.slide1.src = images[i];

    // Check If Index Is Under Max
    if (i < images.length - 1) {
        // Add 1 to Index
        i++;
    } else {
        // Reset Back To O
        i = 0;
    }
}

// Run function every x seconds
setInterval(changeImg, time)

// Run function when page loads
window.onload = changeImg;


// Image List o
images2[0] = "./images/redesign1_1366x768.png";
images2[1] = "./images/redesign2_1366x768.png";
images2[2] = "./images/redesign3_1366x768.png";
images2[3] = "./images/redesign4_1366x768.png";

// Change Image2
function changeImg2() {
    document.slide2.src = images2[o];

    // Check If Index Is Under Max
    if (o < images2.length - 1) {
        // Add 1 to Index
        o++;
    } else {
        // Reset Back To O
        o = 0;
    }
}

// Run function every x seconds
setInterval(changeImg2, time)

// Run function when page loads
window.onload = changeImg2;



// Image List a
images3[0] = "./images/flower-video2_1366x768.png";
images3[1] = "./images/flower-video3_1366x768.png";
images3[2] = "./images/flower-video4_1366x768.png";
images3[3] = "./images/flower-video5_1366x768.png";
images3[4] = "./images/flower-video6_1366x768.png";
images3[5] = "./images/flower-video7_1366x768.png";
images3[6] = "./images/flower-video8_1366x768.png";
images3[7] = "./images/flower-video_1366x768.png";

// Change Image3
function changeImg3() {
    document.slide3.src = images3[a];

    // Check If Index Is Under Max
    if (a < images3.length - 1) {
        // Add 1 to Index
        a++;
    } else {
        // Reset Back To O
        a = 0;
    }
}

// Run function every x seconds
setInterval(changeImg3, time)

// Run function when page loads
window.onload = changeImg3;



// Image List b
images4[0] = "./images/bike-video_1366x768.png";
images4[1] = "./images/bike-video2_1366x768.png";
images4[2] = "./images/bike-video3_1366x768.png";
images4[3] = "./images/bike-video4_1366x768.png";
images4[4] = "./images/bike-video5_1366x768.png";
images4[5] = "./images/bike-video6_1366x768.png";
images4[6] = "./images/bike-video7_1366x768.png";
images4[7] = "./images/bike-video8_1366x768.png";
images4[8] = "./images/bike-video9_1366x768.png";
images4[9] = "./images/bike-video10_1366x768.png";
images4[10] = "./images/bike-video11_1366x768.png";

// Change Image4
function changeImg4() {
    document.slide4.src = images4[b];

    // Check If Index Is Under Max
    if (b < images4.length - 1) {
        // Add 1 to Index
        b++;
    } else {
        // Reset Back To O
        b = 0;
    }
}

// Run function every x seconds
setInterval(changeImg4, time)

// Run function when page loads
window.onload = changeImg4;



// Image List c
images5[0] = "./images/totoro-animation_1366x768.png";
images5[1] = "./images/totoro-animation2_1366x768.png";
images5[2] = "./images/totoro-animation3_1366x768.png";
images5[3] = "./images/totoro-animation4_1366x768.png";
images5[4] = "./images/totoro-animation5_1366x768.png";

// Change Image5
function changeImg5() {
    document.slide5.src = images5[c];

    // Check If Index Is Under Max
    if (c < images5.length - 1) {
        // Add 1 to Index
        c++;
    } else {
        // Reset Back To O
        c = 0;
    }
}

// Run function every x seconds
setInterval(changeImg5, time)

// Run function when page loads
window.onload = changeImg5;



// Image List d
images6[0] = "./images/ineractive-animation_1366x768.png";
images6[1] = "./images/ineractive-animation2_1366x768.png";
images6[2] = "./images/ineractive-animation3_1366x768.png";
images6[3] = "./images/ineractive-animation4_1366x768.png";

// Change Image6
function changeImg6() {
    document.slide6.src = images6[d];

    // Check If Index Is Under Max
    if (d < images6.length - 1) {
        // Add 1 to Index
        d++;
    } else {
        // Reset Back To O
        d = 0;
    }
}

// Run function every x seconds
setInterval(changeImg6, time)

// Run function when page loads
window.onload = changeImg6;


// Image List e
images7[0] = "./images/prototype-rs_1366x768.png";
images7[1] = "./images/prototype-app-1_1366x768.png";
images7[2] = "./images/prototype-app-2_1366x768.png";
images7[3] = "./images/prototype-app-3_1366x768.png";
images7[4] = "./images/prototype-app-4_1366x768.png";



// Change Image7
function changeImg7() {
    document.slide7.src = images7[e];

    // Check If Index Is Under Max
    if (e < images7.length - 1) {
        // Add 1 to Index
        e++;
    } else {
        // Reset Back To O
        e = 0;
    }
}

// Run function every x seconds
setInterval(changeImg7, time)

// Run function when page loads
window.onload = changeImg7;