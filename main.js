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

//village and leader names
var villageName = "LANNISPORT";
var leaderName = "TYWIN LANNISTER";

//custom tooltip delay, initially 1 second
var tooltipDelay = 1000;

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

    updateTooltipDelay();

    updateDistribution();

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

//update tooltip delay
function updateTooltipDelay() {
  $('#addHunterButton').tooltip({title: "+" + hunterFoodRate + " food/sec", delay: {show: tooltipDelay, hide: 0}, placement: "right"});
  $('#addGathererButton').tooltip({title: "+" + gathererWoodRate + " wood/sec and " + "+" + gathererFursRate + " furs/sec", delay: {show: tooltipDelay, hide: 0}, placement: "right"});
  $('#addFarmerButton').tooltip({title: "+" + farmerFoodRate + " food/sec", delay: {show: tooltipDelay, hide: 0}, placement: "right"});
  $('#addHutButton').tooltip({title: "+2 beds", delay: {show: tooltipDelay, hide: 0}, placement: "right"});
}

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

    foodRate = ((hunterFoodRate * intHunters) + (gathererFoodRate * intGatherers) + (farmerFoodRate * intFarmers)) - intTotalCitizens; //adds together food production and subtracts citizen consumption for net rate
    totalFood = totalFood + foodRate; //adds foodRate to total
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
    document.getElementById('totalFood').innerHTML = totalFood + " food";
    document.getElementById('totalWood').innerHTML = totalWood + " wood";
    document.getElementById('totalFurs').innerHTML = totalFurs + " furs";
    document.getElementById('foodRate').innerHTML = foodRate + "/sec";
    document.getElementById('woodRate').innerHTML = woodRate + "/sec";
    document.getElementById('fursRate').innerHTML = fursRate + "/sec";

    //change color to red if negative
    if (foodRate < 0) {
      document.getElementById('foodRate').style.color = "red";
    } else {
      document.getElementById('foodRate').style.color = "white";
    }

    updateBuildingEnabler();

}, 1000); //once per second

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

    updateVillageRank();

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
