//1. Make a clock to tick

function myTimer() {
    var text = document.getElementById('time');
    text.innerHTML = new Date().toLocaleTimeString();
    // or console.log(${today.getHours()});
}

setInterval(myTimer, 1000);
//-------------------------------------------------------------------

//2. manipulate font-size with input field
const input = document.getElementById('font-size');

input.addEventListener('input', updateValue);

function updateValue(e) {
    var text = document.getElementById("time") //edit
    // log.textContent = e.target.value;
    text.style.fontSize = e.target.value + "px";
    // console.log(e.target.value);
    // console.log(text);
};

//----------------------------------------------------------------------

//3. icon color

//----------------------------------------------------------------------

// 4. switch toggle to show date
var days = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
};

var months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
};

const checkBox = document.getElementById("checkBox")

checkBox.addEventListener("change", displayDate);

function displayDate() {
  var currentDate = document.getElementById("date");
  if (checkBox.checked) {
    currentDate.innerHTML = `${days[new Date().getDay()]}, ${months[new Date().getMonth()]} ${new Date().getDate()}`;
    currentDate.style.display = "block";
  } else {
    currentDate.style.display = "none";
  } 
}

//---------------------------------------------------------
// 5. switch toggle for 12 hrs


//--------------------------------------------------------------------




//--------------------------------------------------------------------
//https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick

//if else with event listener
//https://stackoverflow.com/questions/27731812/simple-if-else-onclick-then-do

//awesome video for Event Listener
//https://www.youtube.com/watch?v=EaRrmOtPYTM&list=PLyuRouwmQCjnEupVi5lpP6VrLg-eO-Zcp

//research on toggle
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_dark_mode
//https://codepen.io/nevan/pen/kBItz

//research on setting font size for time
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
//https://www.youtube.com/watch?v=F3odgpghXzY

//access the dom
//https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript

//display visibility: hidden
//https://stackoverflow.com/questions/4929310/why-isnt-css-visibility-working
//https://tympanus.net/codrops/css_reference/visibility/