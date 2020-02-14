// Get the modal
var BodyTypeAnalysis = document.getElementById("BodyTypeAnalysis");
var FoodModifications = document.getElementById("FoodModifications");
var LifestyleModifications = document.getElementById("LifestyleModifications");
var ChronicDiseases = document.getElementById("ChronicDiseases");

// Get the <span> elements that closes the modal
var span_bodyTypeAnalysis = document.getElementsByClassName("close")[0];
var span_foodModifications = document.getElementsByClassName("close")[1];
var span_lifestyleModifications = document.getElementsByClassName("close")[2];
var span_chronicDiseases = document.getElementsByClassName("close")[3];

// The functions that each button is calling
function display_BodyTypeAnalysis() {
    BodyTypeAnalysis.style.display = "block";
}

function display_FoodModifications() {
    FoodModifications.style.display = "block";
}

function display_LifestyleModifications() {
    LifestyleModifications.style.display = "block";
}

function display_ChronicDiseases() {
    ChronicDiseases.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span_bodyTypeAnalysis.onclick = function() {
    BodyTypeAnalysis.style.display = "none";
}
span_foodModifications.onclick = function() {
    FoodModifications.style.display = "none";
}
span_lifestyleModifications.onclick = function() {
    LifestyleModifications.style.display = "none";
}
span_chronicDiseases.onclick = function() {
    ChronicDiseases.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == BodyTypeAnalysis) {
        BodyTypeAnalysis.style.display = "none";
    } else if (event.target == FoodModifications) {
        FoodModifications.style.display = "none";
    } else if (event.target == LifestyleModifications) {
        LifestyleModifications.style.display = "none";
    } else if (event.target == ChronicDiseases) {
        ChronicDiseases.style.display = "none";
    }
}