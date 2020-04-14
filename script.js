//1. Make a clock to tick
let isMilitary = false;

let text = document.getElementById('time');


function myTimer() {
    if (isMilitary == true) {
      text.innerHTML = `${new Date().getHours()}:${new Date().getMinutes()}:${formatTime()}`
    } else {
      text.innerHTML = new Date().toLocaleTimeString();
    }
}

myTimer();
setInterval(myTimer, 1000);

function formatTime() {
  let second = new Date().getSeconds();
  if (second < 10) {
    return `0${second}`
  } else {
    return second;
  }
}

const input = document.getElementById('font-size');

input.addEventListener('input', updateValue);

function updateValue(e) {
    var text = document.getElementById("time")
    text.style.fontSize = e.target.value + "px";
};


var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Saturday",
];

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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

 
let checkboxMilitaryTime = document.getElementById('checkbox-military-time');
checkboxMilitaryTime.addEventListener('change', isMilitaryTimeChecked)

function isMilitaryTimeChecked() {
  isMilitary = checkboxMilitaryTime.checked
}







