//inital citizen count
var intMaxPop = 5;
var intTotalCitizens = 5;
var intUsedCitizens = 4;
var intHunters = 1;
var intGatherers = 1;
var intFarmers = 2;

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

//make main screen visible and opening invisible
function openMainScreen() {
    $("#openingScreen").fadeOut(3000);
    $("#mainScreen").fadeIn(3000);
}

//initialize tooltips
$(document).ready(function() {
    $('#addHunterButton').tooltip({title: "+" + hunterFoodRate + " food/sec", delay: {show: 1000, hide: 0}, placement: "right"});
    $('#addGathererButton').tooltip({title: "+" + gathererWoodRate + " wood/sec and " + "+" + gathererFursRate + " furs/sec", delay: {show: 1000, hide: 0}, placement: "right"});
    $('#addFarmerButton').tooltip({title: "+" + farmerFoodRate + " food/sec", delay: {show: 1000, hide: 0}, placement: "right"});
    $('#addHutButton').tooltip({title: "+2 beds", delay: {show: 1000, hide: 0}, placement: "right"});
});

//add citizens  when there is free population
window.setInterval(function() {
    if (intMaxPop > intTotalCitizens) {
      intTotalCitizens++;
      updateDistribution();
    } else {}
//once per minute
}, 60000);

/*
//add hunter cooldown
function addHunterCooldown() {
    $("#addHunterButton").addClass("cooling").width(function(i, w) { return w - 20});
}
*/

//updating resource count and rate
window.setInterval(function() {
    //adds together food production and subtracts citizen consumption for net rate
    foodRate = ((hunterFoodRate * intHunters) + (gathererFoodRate * intGatherers) + (farmerFoodRate * intFarmers)) - intTotalCitizens;
    //adds foodRate to total
    totalFood = totalFood + foodRate;
    woodRate = (gathererWoodRate * intGatherers);
    totalWood = totalWood + woodRate;
    fursRate = (gathererFursRate * intGatherers);
    totalFurs = totalFurs + fursRate;
//once per second
}, 1000);

//writing resource count
window.setInterval(function() {

    //update the numbers
    document.getElementById('totalFood').innerHTML = totalFood + " food " + foodRate + " food/sec";
    document.getElementById('totalWood').innerHTML = totalWood + " wood " + woodRate + " wood/sec";
    document.getElementById('totalFurs').innerHTML = totalFurs + " furs " + fursRate + " furs/sec";

    //change color to red if negative
    if (foodRate < 0) {
      document.getElementById('totalFood').style.color = "red";
    } else {
      document.getElementById('totalFood').style.color = "white";
    }
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
    document.getElementById('distributionFree').innerHTML = intFree + " Free";
    document.getElementById('distributionMaxPop').innerHTML = (intMaxPop - intTotalCitizens) + " Empty Beds";

}

//setting citizens to jobs
function addHunter() {
    if (intUsedCitizens < intTotalCitizens) {
        intHunters++;
    } else {
        alert("addHunter went to else statement. No more free citizens, can't add more jobs")
    }
}

function addGatherer() {
    intUsedCitizens = intHunters + intGatherers + intFarmers
    if (intUsedCitizens < intTotalCitizens) {
        intGatherers++;
    } else {alert("addGatherer went to else statement. No more free citizens, can't add more jobs")}
}

function addFarmer() {
    intUsedCitizens = intHunters + intGatherers + intFarmers
    if (intUsedCitizens < intTotalCitizens) {
        intFarmers++;
    } else {alert("addFarmer went to else statement. No more free citizens, can't add more jobs")}
}

//adding buildings
function addHut() {
    intMaxPop = intMaxPop + 2;
    updateDistribution();
}

/*
//naming the house and writing to opening screen (needs to be fixed)
function nameHouse() {
    var houseName = Math.floor(Math.random() * 10 + 1)
    document.getElementById('houseName').innerHTML = houseName;
}
*/
