// var text = document.getElementById('time')
// var today = new Date();

// text.innerText = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

// var myVar = 
// setInterval(myTimer, 1000);

// function myTimer() {
//   var today = new Date();
//   document.getElementById("time").innerHTML = today.toLocaleTimeString();
// }

// setInterval(myTimer, 1000);

// function myTimer() {
//   var d = new Date();
//   document.getElementById("demo").innerHTML = d.toLocaleTimeString();
// }

function myTimer() {
    var today = new Date();
    var text = document.getElementById("demo")
    text.innerHTML = today.toLocaleTimeString();
    // or console.log(${today.getHours()});
}

setInterval(myTimer, 1000);
//-------------------------------------------------------------------

//First input event - manipulate font-size
const input = document.getElementById('font-size');
//const log = document.getElementById('values');

input.addEventListener('input', updateValue);

function updateValue(e) {
    var text = document.getElementById("demo") //edit
    // log.textContent = e.target.value;
    text.style.fontSize = e.target.value;
    console.log(e.target.value);
    console.log(text)
};

//articles on changing font-size with px
//https://csscreator.com/node/386

//----------------------------------------------------------------------

//Do i need change type for font input


//----------------------------------------------------------------------

//Changeing theme with JS
//https://codepen.io/nevan/pen/kBItz



// just for fun //
//1.grab the target Object
// var button = document.querySelector('button')
//2. create a fx when the obj is triggered > console log (submit)
// function doSth() {
//     console.log("submit");
// }
// button.addEventListener("click", () => console.log("submit"));
// -------------------------

//**awesome video for Event Listener
//**https://www.youtube.com/watch?v=EaRrmOtPYTM&list=PLyuRouwmQCjnEupVi5lpP6VrLg-eO-Zcp

//research on toggle
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_dark_mode

//research on setting font size for time
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
//https://www.youtube.com/watch?v=F3odgpghXzY

//access the dom
//https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript


