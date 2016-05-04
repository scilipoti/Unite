//inital citizen count
var intMaxPop = 5;
var intTotalCitizens = 5;
var intUsedCitizens = 4;
var intFree = 1;

var intHunters = 1;
var intGatherers = 1;
var intFarmers = 2;
var intWoodcutters = 0;
var intTrappers = 0;
var intMiners = 0;

var intWoodsmiths = 0;
var intTailors = 0;
var intBlacksmiths = 0;

//total resources
var totalFood = 10;
var totalWood = 10;
var totalFurs = 10;
var totalOre = 10;

var totalLumber = 0;
var totalCloth = 0;
var totalMetal = 0;

//citizen production rates
var hunterFoodRate = 1;
var hunterFursRate = 1;
var gathererFoodRate = 1;
var gathererWoodRate = 1;
var farmerFoodRate = 2;
var woodcutterWoodRate = 2;
var trapperFursRate = 2;
var minerOreRate = 2;

var woodsmithWoodRate = -2;
var woodsmithLumberRate = 1;
var tailorFursRate = -2;
var tailorClothRate = 1;
var blacksmithOreRate = -2;
var blacksmithMetalRate = 1;

//resource production rates
var foodRate = 3.5;
var woodRate = 0;
var fursRate = 0;
var oreRate = 0;

var lumberRate = 0;
var clothRate = 0;
var metalRate = 0;

//limit so only one citizen will be killed at a time
var killingCitizen = false;

//village and leader names
var villageName = "LANNISPORT";
var leaderName = "TYWIN LANNISTER";

//custom tooltip delay
var tooltipDelay = 1000;

//tooltips
var hunterFoodRateTooltip;
var gathererFoodRateTooltip;
var farmerFoodRateTooltip;
var citizenFoodRateTooltip;

var gathererWoodRateTooltip;
var woodcutterWoodRateTooltip;
var woodsmithWoodRateTooltip;

var hunterFursRateTooltip;
var trapperFursRateTooltip;
var tailorFursRateTooltip;

var minerOreRateTooltip;
var blacksmithOreRateTooltip;

var woodsmithLumberRateTooltip;

var tailorClothRateTooltip;

var blacksmithMetalRateTooltip;


//opens settings window
function openSettings() {
  $("#settingsContainer").toggle(true); //sets display true
  $("#settingsLink").addClass("disabledLink");
  $("#saveLink").addClass("disabledLink"); //need to disable save so it doesn't open multiple windows
}

//close settings window
function closeSettings() {
  $("#settingsContainer").toggle(false); //sets display false
  $("#settingsLink").removeClass("disabledLink");
  $("#saveLink").removeClass("disabledLink"); //need to disable save so it doesn't open multiple windows
}

//opens save window
function openSave() {
  alert("save is not supported in this version");
}

//updates village and leader ranks
function updateVillageRank() {

  //check to see how many citizens there are and set villageRank accordingly
  if (intTotalCitizens >= 0 && intTotalCitizens < 10) {
    villageRank = 0;
  } else if (intTotalCitizens >= 10 && intTotalCitizens < 50) {
    villageRank = 1;
  } else if (intTotalCitizens >= 50 && intTotalCitizens < 200) {
    villageRank = 2;
  } else if (intTotalCitizens >= 200 && intTotalCitizens < 1000) {
    villageRank = 3;
  } else if (intTotalCitizens >= 1000) {
    villageRank = 4;
  }

  //check which rank village is and write
  if (villageRank == 0) {
    document.getElementById("villageRank").innerHTML = "HAMLET";
    document.getElementById("leaderRank").innerHTML = "CHIEF";
  } else if (villageRank == 1) {
    document.getElementById("villageRank").innerHTML = "VILLAGE";
    document.getElementById("leaderRank").innerHTML = "CHIEF";
  } else if (villageRank == 2) {
    document.getElementById("villageRank").innerHTML = "TOWNSHIP";
    document.getElementById("leaderRank").innerHTML = "MAYOR";
  } else if (villageRank == 3) {
    document.getElementById("villageRank").innerHTML = "TOWN";
    document.getElementById("leaderRank").innerHTML = "MAYOR";
  } else if (villageRank == 4) {
    document.getElementById("villageRank").innerHTML = "CITY";
    document.getElementById("leaderRank").innerHTML = "MAYOR";
  } else {alert("villageRank is too high or too low, beep boop crash")}

  //write village and leader name
  document.getElementById("villageName").innerHTML = villageName;
  document.getElementById("leaderName").innerHTML = leaderName;

}

//make main screen visible and opening invisible and disable UNITE button
function openMainScreen() {
    $("#uniteButton").addClass("disabled");
    $("#openingScreen").fadeOut(3000);
    $("#mainScreen").fadeIn(3000);
}

//on document ready
$(document).ready(function() {

    updateDistribution();

    updateTooltipDelay();

    updateBuildingEnabler();

    updateVillageRank();

    //renaming village
    $("#renameVillageInput").keypress(function (e) { //watches for keypress
        if (e.which === 13) {  //checks whether the pressed key is "Enter"
          var workingVillageName = document.getElementById('renameVillageInput').value; //set workingVillageName to input from text box
          villageName = workingVillageName.toUpperCase(); //set actual leaderName to upper case workingVillageName
          updateVillageRank(); //update the display
        }
    });

    //renaming leader
    $("#renameLeaderInput").keypress(function (e) { //watches for keypress
        if (e.which === 13) {  //checks whether the pressed key is "Enter"
          var workingLeaderName = document.getElementById('renameLeaderInput').value; //set workingLeaderName to input from text box
          leaderName = workingLeaderName.toUpperCase(); //set actual leaderName to upper case workingLeaderName
          updateVillageRank(); //update the display
        }
    });

});

//add citizens when there is free population and food
window.setInterval(function() {
    if (intMaxPop > intTotalCitizens && foodRate > 0) {
      intTotalCitizens++;
      updateDistribution();
    }
}, 60000); //once per minute

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

    totalFood = totalFood + foodRate;
    totalWood = totalWood + woodRate;
    totalFurs = totalFurs + fursRate;
    totalOre = totalOre + oreRate;

    totalLumber = totalLumber + lumberRate;
    totalCloth = totalCloth + clothRate;
    totalMetal = totalMetal + metalRate;

    //start killing the worker if food runs out
    if (totalFood <= 0 && foodRate < 0) {
      totalFood = 0;
      killCitizenCountdown();
    }

    //update the total and rate of resources
    document.getElementById('totalFood').innerHTML = totalFood + " food";
    document.getElementById('totalWood').innerHTML = totalWood + " wood";
    document.getElementById('totalFurs').innerHTML = totalFurs + " furs";
    document.getElementById('totalOre').innerHTML = totalOre + " ore";

    document.getElementById('foodRate').innerHTML = foodRate + "/sec";
    document.getElementById('woodRate').innerHTML = woodRate + "/sec";
    document.getElementById('fursRate').innerHTML = fursRate + "/sec";
    document.getElementById('oreRate').innerHTML = oreRate + "/sec";

    //commodities
    document.getElementById('totalLumber').innerHTML = totalLumber + " lumber";
    document.getElementById('totalCloth').innerHTML = totalCloth + " cloth";
    document.getElementById('totalMetal').innerHTML = totalMetal + " metal";

    document.getElementById('lumberRate').innerHTML = lumberRate + "/sec";
    document.getElementById('clothRate').innerHTML = clothRate + "/sec";
    document.getElementById('metalRate').innerHTML = metalRate + "/sec";

    //change color to red if negative
    if (foodRate < 0) {
      document.getElementById('foodRate').style.color = "red";
    } else {
      document.getElementById('foodRate').style.color = "white";
    }

    updateBuildingEnabler();

}, 1000); //once per second

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
    if (killingCitizen == true) { //so only one citizen will be killed at a time
    } else if (killingCitizen == false){
        setTimeout(killCitizen, 15000); //fifteen seconds
        killingCitizen = true;
    } else {alert("var killingCitizen is neither true nor false. this is a bug, please report it")}
}

//kill a citizen after 15 seconds
function killCitizen() {
    intTotalCitizens--; //kills one from total
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
