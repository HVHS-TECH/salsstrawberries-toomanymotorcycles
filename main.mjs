import {fb_initialise} from "./fb_io.mjs";
import {fb_login,fb_logout,fb_authCheck} from "./fb_authhandler.mjs";
import { fb_write } from "./fb_readwrite.mjs";

window.fb_login = fb_login;
window.fb_logout = fb_logout;
window.fb_authCheck = fb_authCheck;

function fb_submit() {
    fb_write("/userData/"+window.user.uid+"/name",document.getElementById("name").value);
    fb_write("/userData/"+window.user.uid+"/favouriteFruit",document.getElementById("favoriteFruit").value);
    fb_write("/userData/"+window.user.uid+"/servingsPerWeek",document.getElementById("fruitQuantity").value);
}

function instant_seizure() {
    //document.getElementsByTagName("body")[0].style.background = #ffffff;
};

window.fb_submit = fb_submit;

fb_initialise({
    apiKey: "AIzaSyBNDhyKyF4h86o_xE3AY_e51-vB6gAUX1g",
    authDomain: "comp-2025-joshua-k-h.firebaseapp.com",
    databaseURL: "https://comp-2025-joshua-k-h-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "comp-2025-joshua-k-h",
    storageBucket: "comp-2025-joshua-k-h.firebasestorage.app",
    messagingSenderId: "695585659485",
    appId: "1:695585659485:web:a965ad296454cd022f0bb4",
    measurementId: "G-BZX0JJYC05"
})

fb_authCheck()