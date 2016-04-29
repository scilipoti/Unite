//inital citizens
var intTotalCitizens = 5;
var intHunters = 1;
var intGatherers = 1;
var intFarmers = 1;

//make main screen visible and opening invisible
function openMainScreen() {
  $("#openingScreen").fadeOut(3000);
  $("#mainScreen").fadeIn(3000);
}

//updates distribution bar
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
