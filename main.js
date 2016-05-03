//inital citizen count
var intMaxPop = 5;
var intTotalCitizens = 5;
var intUsedCitizens = 4;
var intHunters = 1;
var intGatherers = 1;
var intFarmers = 2;
var intFree = 1;

//total resources
var totalFood = 10;
var totalWood = 10;
var totalFurs = 10;

//citizen production rates
var hunterFoodRate = 1;
var gathererFoodRate = 0;
var gathererWoodRate = 1;
var gathererFursRate = 1;
var farmerFoodRate = 2;

//resource production rates
var foodRate = 3.5;
var woodRate = 0;
var fursRate = 0;

//limit so only one citizen will be killed at a time
var killingCitizen = false;


//make main screen visible and opening invisible and disable UNITE button
function openMainScreen() {
    $("#uniteButton").addClass("disabled");
    $("#openingScreen").fadeOut(3000);
    $("#mainScreen").fadeIn(3000);
}

//on document ready
$(document).ready(function() {

    //initialize tooltips
    $('#addHunterButton').tooltip({title: "+" + hunterFoodRate + " food/sec", delay: {show: 1000, hide: 0}, placement: "right"});
    $('#addGathererButton').tooltip({title: "+" + gathererWoodRate + " wood/sec and " + "+" + gathererFursRate + " furs/sec", delay: {show: 1000, hide: 0}, placement: "right"});
    $('#addFarmerButton').tooltip({title: "+" + farmerFoodRate + " food/sec", delay: {show: 1000, hide: 0}, placement: "right"});
    $('#addHutButton').tooltip({title: "+2 beds", delay: {show: 1000, hide: 0}, placement: "right"});

    updateDistribution();

    updateBuildingEnabler();

});

//add citizens when there is free population and food
window.setInterval(function() {
    if (intMaxPop > intTotalCitizens && foodRate > 0) {
      intTotalCitizens++;
      updateDistribution();
    }
//once per minute
}, 60000);

/*
//add hunter cooldown
function addHunterCooldown() {
    $("#addHunterButton").addClass("cooling").width(function(i, w) { return w - 20});
}
*/

function updateBuildingEnabler() {

    //enable/disable building hut
    if (totalWood - 10 >= 0 && $('#addHutButton').hasClass("disabled")) {
        $('#addHutButton').removeClass("disabled");
    } else if ((totalWood - 10 <= 0) && !$('#addHutButton').hasClass("disabled")) {
        $('#addHutButton').addClass("disabled");
    }

}


//once per second: updating and write resource count and rate, enabling/disabling building buttons
window.setInterval(function() {

    //adds together food production and subtracts citizen consumption for net rate
    foodRate = ((hunterFoodRate * intHunters) + (gathererFoodRate * intGatherers) + (farmerFoodRate * intFarmers)) - intTotalCitizens;
    //adds foodRate to total
    totalFood = totalFood + foodRate;
    woodRate = (gathererWoodRate * intGatherers);
    totalWood = totalWood + woodRate;
    fursRate = (gathererFursRate * intGatherers);
    totalFurs = totalFurs + fursRate;

    //start killing the worker if food runs out
    if (totalFood <= 0 && foodRate < 0) {
      totalFood = 0;
      killCitizenCountdown();
    }

    //update the total and rate
    document.getElementById('totalFood').innerHTML = totalFood + " food " + foodRate + " food/sec";
    document.getElementById('totalWood').innerHTML = totalWood + " wood " + woodRate + " wood/sec";
    document.getElementById('totalFurs').innerHTML = totalFurs + " furs " + fursRate + " furs/sec";

    //change color to red if negative
    if (foodRate < 0) {
      document.getElementById('totalFood').style.color = "red";
    } else {
      document.getElementById('totalFood').style.color = "white";
    }

    updateBuildingEnabler();

//once per second
}, 1000);

//updating distribution bar
function updateDistribution() {

    //citizen population variables
    intUsedCitizens = intHunters + intGatherers + intFarmers;
    intFree = intTotalCitizens - intUsedCitizens;

    //distribution percentages
    distributionHunters = ( intHunters / intMaxPop ) * 100;
    distributionGatherers = ( intGatherers / intMaxPop ) * 100;
    distributionFarmers = ( intFarmers / intMaxPop ) * 100;
    distributionFree = ( intFree / intMaxPop ) * 100;
    distributionMaxPop = 100 - distributionHunters - distributionGatherers - distributionFarmers - distributionFree;

    //sizing the bar to the percentages
    document.getElementById('distributionHunters').style.width = distributionHunters + "%";
    document.getElementById('distributionGatherers').style.width = distributionGatherers + "%";
    document.getElementById('distributionFarmers').style.width = distributionFarmers + "%";
    document.getElementById('distributionFree').style.width = distributionFree + "%";
    document.getElementById('distributionMaxPop').style.width = distributionMaxPop + "%";

    //writing citizen numbers in the distribution bar
    document.getElementById('distributionHunters').innerHTML = intHunters + " Hunters";
    document.getElementById('distributionGatherers').innerHTML = intGatherers + " Gatherers";
    document.getElementById('distributionFarmers').innerHTML = intFarmers + " Farmers";
    document.getElementById('distributionFree').innerHTML = intFree + " Unemployed";
    document.getElementById('distributionMaxPop').innerHTML = (intMaxPop - intTotalCitizens) + " Empty Beds";

    //disable training citizens if there are not more free citizens
    if (intFree <= 0) {
      $('#addHunterButton').addClass("disabled");
      $('#addGathererButton').addClass("disabled");
      $('#addFarmerButton').addClass("disabled");
    //if they are disabled and there are free citizens, enable them
    } else if (intFree > 0 && $('#addHunterButton').hasClass("disabled")) {
      $('#addHunterButton').removeClass("disabled");
      $('#addGathererButton').removeClass("disabled");
      $('#addFarmerButton').removeClass("disabled");
    }

}

//setting citizens to jobs
function addHunter() {
    intUsedCitizens = intHunters + intGatherers + intFarmers
    if (intUsedCitizens < intTotalCitizens) {
        intHunters++;
    } else {
        alert("addHunter went to else statement. No more free citizens, can't add more jobs")
    }
    updateDistribution();
}

function addGatherer() {
    intUsedCitizens = intHunters + intGatherers + intFarmers
    if (intUsedCitizens < intTotalCitizens) {
        intGatherers++;
    } else {alert("addGatherer went to else statement. No more free citizens, can't add more jobs")}
    updateDistribution();
}

function addFarmer() {
    intUsedCitizens = intHunters + intGatherers + intFarmers
    if (intUsedCitizens < intTotalCitizens) {
        intFarmers++;
    } else {alert("addFarmer went to else statement. No more free citizens, can't add more jobs")}
    updateDistribution();
}

//adding buildings
function addHut() {
    if (totalWood - 10 >= 0) {
        totalWood = totalWood - 10;
        intMaxPop = intMaxPop + 2;
        updateDistribution();
    } else {alert("not enough wood")}
    updateBuildingEnabler();
}

//start counting down to kill citizen
function killCitizenCountdown() {
    //so only one citizen will be killed at a time
    if (killingCitizen == true) {
    } else if (killingCitizen == false){
        //fifteen seconds
        setTimeout(killCitizen, 15000);
        killingCitizen = true;
    } else {alert("var killingCitizen is neither true nor false. this is a bug, please report it")}
}

//kill a citizen after 15 seconds
function killCitizen() {
    //kills one from total
    intTotalCitizens--;
    if (intFree > 0) {
        intFree--;
    } else if (intGatherers > 0) {
        intGatherers--;
    } else if (intHunters > 0) {
        intHunters--;
    } else if (intFarmers > 0) {
        intFarmers--;
    } else {alert("You don't have any more citizens")}
    updateDistribution();
    killingCitizen = false;
}

/*
//naming the house and writing to opening screen (needs to be fixed)
function nameHouse() {
    var houseName = Math.floor(Math.random() * 10 + 1)
    document.getElementById('houseName').innerHTML = houseName;
}
*/
