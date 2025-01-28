// VARIABLE DECLARATIONS
/* STEP 1: Declare and initialize variables */
var customName = document.getElementById("customname");
var randomize = document.querySelector(".randomize");
var story = document.querySelector(".story");

/* STEP 3: Create the variable that contains the story string */
var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

/* STEP 4: Create arrays with random values */
var insertX = ["Donald Trump", "Jackie Chan", "Santa Claus"];
var insertY = ["Area 51", "Death Valley", "Aruba"];
var insertZ = ["spontaneously combusted", "rapidly sublimated", "evaporated instantly"];

// FUNCTIONS

/* STEP 2: Randomly pick an item from an array */
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/* STEP 6: Define the result() function to generate the random story */
function result() {
    // STEP 7: Create a new variable called newStory and copy storyText
    var newStory = storyText;

    // STEP 8: Pick random values for xItem, yItem, and zItem
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    // STEP 9: Replace placeholders in the story with the random values
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

    // STEP 10: Replace 'Bob' with the custom name if entered
    if (customName.value) {
        newStory = newStory.replace("Bob", customName.value);
    }

    // STEP 11: Convert to metric units if the radio button is checked
    if (document.getElementById("metric").checked) {
        // STEP 11a: Convert 300lbs to kg (1lb = 0.453592kg)
        var weight = Math.round(300 * 0.453592);

        // STEP 11b: Replace pounds with weight in kg
        newStory = newStory.replace("300 pounds", weight + " kilograms");

        // STEP 12a: Convert 94°F to °C
        var temp = Math.round((94 - 32) * 5 / 9);

        // STEP 12b: Replace fahrenheit with the temperature in °C
        newStory = newStory.replace("94 farenheit", temp + " celsius");
    }

    // STEP 13: Set the new story as the paragraph's text
    story.textContent = newStory;

    // Make the paragraph visible
    story.style.visibility = "visible";
}

// EVENT LISTENERS
/* STEP 5: Add event listener to the button */
randomize.addEventListener("click", result);
