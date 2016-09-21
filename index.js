/* Array of bjects with planet name and gravity values */
var planets = [
  {planet: 'Sun', gravity: 27.9},
  {planet: 'Mercury', gravity: 0.377},
  {planet: 'Venus', gravity: 0.9032},
  {planet: 'Earth', gravity: 1},
  {planet: 'Moon', gravity: 0.1655},
  {planet: 'Mars', gravity: 0.3895},
  {planet: 'Jupiter', gravity: 2.640},
  {planet: 'Saturn', gravity: 1.139},
  {planet: 'Uranus', gravity: 0.917},
  {planet: 'Neptune', gravity: 1.148},
  {planet: 'Pluto', gravity: 0.06}
];

var select = document.getElementById("planet"); //Stores the full HTML element (that has an ID of planet) into the select variable 
var displayTitle = 'rotaluclaC thgieW ortsA';  //Title string that needs to be displayed in reverse order

/* 
calculateAndDisplayWeight() is an onClick function that is triggered when the
user clicks on the "Caculate" button. It calculates the persons weight based 
on the planet chosen and then writes the result directly to the p element with ID "result"

1) calculates how much a person weighs on a particular planet given
the person's weight and the planet/star's surface gravity

2) displays the calculated weight directly into the <p> element with id of test 

takes the weight value entered into the input textbox element
that has an ID of "weight", along with the  takes the 
value entered into the input element with id of "weight"
*/
function calculateAndDisplayWeight(){
  var weightEntered = document.getElementById("weight").value; //captures weight value entered by user
  var gravityOfPlanetSelected = document.getElementById("planet").value; //gets gravity value of planet selected
  var indexOfPlanetSelected = document.getElementById("planet").selectedIndex //gets array Index of planet selected
  var planetSelected = planets[indexOfPlanetSelected].planet; //gets name of planet based on Index obtained
  var weightOnPlanet = gravityOfPlanetSelected * weightEntered; //calculates weight on planet selected
  document.getElementById("result").innerHTML = "If you were on " + planetSelected + " you would weigh " + weightOnPlanet +"lbs"; //displays message to user telling them how much they weigh on the planet they selected
}

/* 
The reverseString(stringtoReverse) function takes a string, reverses it and stores it into
a new variable
*/
function reverseString(stringToReverse){
  var rerversedString = '';
  for (var i = stringToReverse.length -1; i >= 0; i--) {
    rerversedString += stringToReverse[i]; 
  }  
  return rerversedString;
}

/* 
This for loop creates the option elements for the select element on 
the HTML page
*/
for (var i = 0; i < planets.length; i++){
  var opt = document.createElement('option');
  opt.value = planets[i].gravity;
  opt.innerHTML = planets[i].planet;
  select.appendChild(opt);
}

document.getElementById("title").innerHTML = reverseString(displayTitle);
