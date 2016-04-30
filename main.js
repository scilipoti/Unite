//inital citizen vars
var intTotalCitizens = 5;
var intHunters = 1;
var intGatherers = 1;
var intFarmers = 1;

//resource vars
var totalFood = 0;
var totalWood = 0;
var totalFurs = 0;

//citizen production rate vars
var hunterFoodRate = 1;
var gathererFoodRate = 0;
var gathererWoodRate = 1;
var gathererFursRate = 1;
var farmerFoodRate = 2;

//total resource vars
var foodRate = 3.5;
var woodRate = 0;
var fursRate = 0;

//make main screen visible and opening invisible
function openMainScreen() {
    $("#openingScreen").fadeOut(3000);
    $("#mainScreen").fadeIn(3000);
}

//updating resource count and rate
window.setInterval(function() {
    foodRate = (hunterFoodRate * intHunters) + (gathererFoodRate * intGatherers) + (farmerFoodRate * intFarmers);
    totalFood = totalFood + foodRate;
    woodRate = (gathererWoodRate * intGatherers);
    totalWood = totalWood + woodRate;
    fursRate = (gathererFursRate * intGatherers);
    totalFurs = totalFurs + fursRate;
}, 1000);

//writing resource count
window.setInterval(function() {
    document.getElementById('totalFood').innerHTML = totalFood + " food " + foodRate + " food/sec";
    document.getElementById('totalWood').innerHTML = totalWood + " wood " + woodRate + " wood/sec";
    document.getElementById('totalFurs').innerHTML = totalFurs + " furs " + fursRate + " furs/sec";
}, 1000);

//updating distribution bar
function updateDistribution() {

    //citizen population variables
    intUsedCitizens = intHunters + intGatherers + intFarmers;
    intFree = intTotalCitizens - intUsedCitizens;

    //distribution percentages
    distributionHunters = ( intHunters / intTotalCitizens ) * 100;
    distributionGatherers = ( intGatherers / intTotalCitizens ) * 100;
    distributionFarmers = ( intFarmers / intTotalCitizens ) * 100;
    distributionFree = 100 - distributionHunters - distributionGatherers - distributionFarmers;

    //sizing the bar to the percentages
    document.getElementById('distributionHunters').style.width = distributionHunters + "%";
    document.getElementById('distributionGatherers').style.width = distributionGatherers + "%";
    document.getElementById('distributionFarmers').style.width = distributionFarmers + "%";
    document.getElementById('distributionFree').style.width = distributionFree + "%";

    //writing citizen numbers in the distribution bar
    document.getElementById('distributionHunters').innerHTML = intHunters + " Hunters";
    document.getElementById('distributionGatherers').innerHTML = intGatherers + " Gatherers";
    document.getElementById('distributionFarmers').innerHTML = intFarmers + " Farmers";
    document.getElementById('distributionFree').innerHTML = intFree + " Free";

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

/*
//naming the house and writing to opening screen (needs to be fixed)
function nameHouse() {
    var houseName = Math.floor(Math.random() * 10 + 1)
    document.getElementById('houseName').innerHTML = houseName;
}
*/
