//**************************************************************/
// fb_io.mjs
// Generalised firebase routines
// Written by <Your Name Here>, Term 2 202?
//
// All variables & function begin with fb_  all const with FB_
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
const firebaseConfig = {
    apiKey: "AIzaSyBNDhyKyF4h86o_xE3AY_e51-vB6gAUX1g",
    authDomain: "comp-2025-joshua-k-h.firebaseapp.com",
    databaseURL: "https://comp-2025-joshua-k-h-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "comp-2025-joshua-k-h",
    storageBucket: "comp-2025-joshua-k-h.firebasestorage.app",
    messagingSenderId: "695585659485",
    appId: "1:695585659485:web:a965ad296454cd022f0bb4",
    measurementId: "G-BZX0JJYC05"
  };

const ATTACK_CONFIG = {
    apiKey: "AIzaSyAC9lbREKwJJ95pZUJ7Wy3hI_QfivE2a34",
    authDomain: "comp-firebaseskills.firebaseapp.com",
    databaseURL: "https://comp-firebaseskills-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "comp-firebaseskills",
    storageBucket: "comp-firebaseskills.firebasestorage.app",
    messagingSenderId: "634491601796",
    appId: "1:634491601796:web:1c48be8af741f25bd353d1"
};

console.log('%c fb_io.mjs initialised',
            'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";
/**************************************************************/
// Import all the methods you want to call from the firebase modules


/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/
export {fb_initialise, /*unlockHavock,*/ ATTACK_CONFIG, firebaseConfig};

/**************************************************************/
// function fb_initialise()
// Written by Joshua Kessell-Haak, Term 1 2025
// Initialises the database
/**************************************************************/
function fb_initialise(config) {
    console.log('%c fb_initialise(): ', 
                'color: ' + COL_C + '; background-color: ' + COL_B + ';');
    // Initialize Firebase
    const FB_GAMEAPP = initializeApp(config);
    //const FB_ANALYTICS = getAnalytics(FB_GAMEAPP);
    const FB_DATABASE = getDatabase(FB_GAMEAPP);
    console.log(FB_GAMEAPP) //DIAG
    console.log(FB_DATABASE) //DIAG
    window.FB_GAMEAPP = FB_GAMEAPP;
    window.FB_DATABASE = FB_DATABASE;
    //let allButtons = document.getElementsByTagName("button");
    //console.log(allButtons)
    //for(let i=0;i<allButtons.length;i++) {
      //allButtons[i].removeAttribute("disabled")
    //}
    //document.getElementById("fb_HAVOCK").setAttribute("disabled","true")
    //document.getElementById("fb_initButton").innerHTML= "Initialised";
    //document.getElementById("fb_initButton").setAttribute("disabled","true")
};

//function unlockHavock() {
  //document.getElementById("fb_HAVOCK").removeAttribute("disabled");
  //document.getElementById("fb_HAVOCK").innerHTML = "<strong>WREAK HAVOCK</strong>"
//}

/**************************************************************/
// END OF CODE
/**************************************************************/