
// THIS CODE IS INCREDIBLY REDUNDANT. FIX IT AS SOON AS YOU FIGURE OUT HOW.

function addFarmer() {
    intUsedCitizens = intHunters + intGatherers + intFarmers + intWoodcutters + intTrappers + intMiners + intWoodsmiths + intTailors + intBlacksmiths;
    if (intUsedCitizens < intTotalCitizens) { //if there are free citizens
        if (intFree == 1) { //disables job buttons if there's only one free citizen - essentially reserves it for this function
          $(".addJobButton").addClass("disabled");
        }
        $("#addFarmerButton").addClass("addJobDisabled");
        var farmerProgress = 0;
        var farmerProgressTotalTime = 5000; //you ALSO need to adjust this to change time it takes
        var farmerProgressTimeElapsed = 0;
        var timesRun = 0; //function runs every 50ms, so after 100 runs 5 seconds will elapse and function will end
        var timeout = setInterval(function() {
          timesRun += 1; //increments the count of timesRun. this is important
          if(timesRun >= 100){ // ALSO change this to adjust time it takes to train citizen
            clearInterval(timeout); //break interval
            intFarmers++; //increment citizen job
            updateDistribution();
            document.getElementById("addFarmerProgress").style.width = "0%";
            $("#addFarmerButton").removeClass("addJobDisabled");
          } else {}
          farmerProgressTimeElapsed = farmerProgressTimeElapsed + 50; //necessary for calculating percentage
          farmerProgress = ((farmerProgressTotalTime - farmerProgressTimeElapsed) / farmerProgressTotalTime) * 100; //calculate bar percentage
          document.getElementById("addFarmerProgress").style.width = farmerProgress + "%"; //set percentage
        }, 50);
    } else {
        alert("addFarmer went to else statement. No more free citizens, can't add more jobs")
    }
}

function addHunter() {
    intUsedCitizens = intHunters + intGatherers + intFarmers + intWoodcutters + intTrappers + intMiners + intWoodsmiths + intTailors + intBlacksmiths;
    if (intUsedCitizens < intTotalCitizens) { //if there are free citizens
        if (intFree == 1) { //disables job buttons if there's only one free citizen - essentially reserves it for this function
          $(".addJobButton").addClass("disabled");
        }
        $("#addHunterButton").addClass("addJobDisabled");
        var hunterProgress = 0;
        var hunterProgressTotalTime = 5000; //you ALSO need to adjust this to change time it takes
        var hunterProgressTimeElapsed = 0;
        var timesRun = 0; //function runs every 50ms, so after 100 runs 5 seconds will elapse and function will end
        var timeout = setInterval(function() {
          timesRun += 1; //increments the count of timesRun. this is important
          if(timesRun >= 100){ // ALSO change this to adjust time it takes to train citizen
            clearInterval(timeout); //break interval
            intHunters++; //increment citizen job
            updateDistribution();
            document.getElementById("addHunterProgress").style.width = "0%";
            $("#addHunterButton").removeClass("addJobDisabled");
          } else {}
          hunterProgressTimeElapsed = hunterProgressTimeElapsed + 50; //necessary for calculating percentage
          hunterProgress = ((hunterProgressTotalTime - hunterProgressTimeElapsed) / hunterProgressTotalTime) * 100; //calculate bar percentage
          document.getElementById("addHunterProgress").style.width = hunterProgress + "%"; //set percentage
        }, 50);
    } else {
        alert("addHunter went to else statement. No more free citizens, can't add more jobs")
    }
}

function addGatherer() {
    intUsedCitizens = intHunters + intGatherers + intFarmers + intWoodcutters + intTrappers + intMiners + intWoodsmiths + intTailors + intBlacksmiths;
    if (intUsedCitizens < intTotalCitizens) { //if there are free citizens
        if (intFree == 1) { //disables job buttons if there's only one free citizen - essentially reserves it for this function
          $(".addJobButton").addClass("disabled");
        }
        $("#addGathererButton").addClass("addJobDisabled");
        var gathererProgress = 0;
        var gathererProgressTotalTime = 5000; //you ALSO need to adjust this to change time it takes
        var gathererProgressTimeElapsed = 0;
        var timesRun = 0; //function runs every 50ms, so after 100 runs 5 seconds will elapse and function will end
        var timeout = setInterval(function() {
          timesRun += 1; //increments the count of timesRun. this is important
          if(timesRun >= 100){ // ALSO change this to adjust time it takes to train citizen
            clearInterval(timeout); //break interval
            intGatherers++; //increment citizen job
            updateDistribution();
            document.getElementById("addGathererProgress").style.width = "0%";
            $("#addGathererButton").removeClass("addJobDisabled");
          } else {}
          gathererProgressTimeElapsed = gathererProgressTimeElapsed + 50; //necessary for calculating percentage
          gathererProgress = ((gathererProgressTotalTime - gathererProgressTimeElapsed) / gathererProgressTotalTime) * 100; //calculate bar percentage
          document.getElementById("addGathererProgress").style.width = gathererProgress + "%"; //set percentage
        }, 50);
    } else {
        alert("addGatherer went to else statement. No more free citizens, can't add more jobs")
    }
}

function addWoodcutter() {
  intUsedCitizens = intHunters + intGatherers + intFarmers + intWoodcutters + intTrappers + intMiners + intWoodsmiths + intTailors + intBlacksmiths;
  if (intUsedCitizens < intTotalCitizens) { //if there are free citizens
      if (intFree == 1) { //disables job buttons if there's only one free citizen - essentially reserves it for this function
        $(".addJobButton").addClass("disabled");
      }
      $("#addWoodcutterButton").addClass("addJobDisabled");
      var woodcutterProgress = 0;
      var woodcutterProgressTotalTime = 5000; //you ALSO need to adjust this to change time it takes
      var woodcutterProgressTimeElapsed = 0;
      var timesRun = 0; //function runs every 50ms, so after 100 runs 5 seconds will elapse and function will end
      var timeout = setInterval(function() {
        timesRun += 1; //increments the count of timesRun. this is important
        if(timesRun >= 100){ // ALSO change this to adjust time it takes to train citizen
          clearInterval(timeout); //break interval
          intWoodcutters++; //increment citizen job
          updateDistribution();
          document.getElementById("addWoodcutterProgress").style.width = "0%";
          $("#addWoodcutterButton").removeClass("addJobDisabled");
        } else {}
        woodcutterProgressTimeElapsed = woodcutterProgressTimeElapsed + 50; //necessary for calculating percentage
        woodcutterProgress = ((woodcutterProgressTotalTime - woodcutterProgressTimeElapsed) / woodcutterProgressTotalTime) * 100; //calculate bar percentage
        document.getElementById("addWoodcutterProgress").style.width = woodcutterProgress + "%"; //set percentage
      }, 50);
  } else {
      alert("addWoodcutter went to else statement. No more free citizens, can't add more jobs")
  }
}

function addTrapper() {
  intUsedCitizens = intHunters + intGatherers + intFarmers + intWoodcutters + intTrappers + intMiners + intWoodsmiths + intTailors + intBlacksmiths;
  if (intUsedCitizens < intTotalCitizens) { //if there are free citizens
      if (intFree == 1) { //disables job buttons if there's only one free citizen - essentially reserves it for this function
        $(".addJobButton").addClass("disabled");
      }
      $("#addTrapperButton").addClass("addJobDisabled");
      var trapperProgress = 0;
      var trapperProgressTotalTime = 5000; //you ALSO need to adjust this to change time it takes
      var trapperProgressTimeElapsed = 0;
      var timesRun = 0; //function runs every 50ms, so after 100 runs 5 seconds will elapse and function will end
      var timeout = setInterval(function() {
        timesRun += 1; //increments the count of timesRun. this is important
        if(timesRun >= 100){ // ALSO change this to adjust time it takes to train citizen
          clearInterval(timeout); //break interval
          intTrappers++; //increment citizen job
          updateDistribution();
          document.getElementById("addTrapperProgress").style.width = "0%";
          $("#addTrapperButton").removeClass("addJobDisabled");
        } else {}
        trapperProgressTimeElapsed = trapperProgressTimeElapsed + 50; //necessary for calculating percentage
        trapperProgress = ((trapperProgressTotalTime - trapperProgressTimeElapsed) / trapperProgressTotalTime) * 100; //calculate bar percentage
        document.getElementById("addTrapperProgress").style.width = trapperProgress + "%"; //set percentage
      }, 50);
  } else {
      alert("addTrapper went to else statement. No more free citizens, can't add more jobs")
  }
}

function addMiner() {
  intUsedCitizens = intHunters + intGatherers + intFarmers + intWoodcutters + intTrappers + intMiners + intWoodsmiths + intTailors + intBlacksmiths;
  if (intUsedCitizens < intTotalCitizens) { //if there are free citizens
      if (intFree == 1) { //disables job buttons if there's only one free citizen - essentially reserves it for this function
        $(".addJobButton").addClass("disabled");
      }
      $("#addMinerButton").addClass("addJobDisabled");
      var minerProgress = 0;
      var minerProgressTotalTime = 5000; //you ALSO need to adjust this to change time it takes
      var minerProgressTimeElapsed = 0;
      var timesRun = 0; //function runs every 50ms, so after 100 runs 5 seconds will elapse and function will end
      var timeout = setInterval(function() {
        timesRun += 1; //increments the count of timesRun. this is important
        if(timesRun >= 100){ // ALSO change this to adjust time it takes to train citizen
          clearInterval(timeout); //break interval
          intMiners++; //increment citizen job
          updateDistribution();
          document.getElementById("addMinerProgress").style.width = "0%";
          $("#addMinerButton").removeClass("addJobDisabled");
        } else {}
        minerProgressTimeElapsed = minerProgressTimeElapsed + 50; //necessary for calculating percentage
        minerProgress = ((minerProgressTotalTime - minerProgressTimeElapsed) / minerProgressTotalTime) * 100; //calculate bar percentage
        document.getElementById("addMinerProgress").style.width = minerProgress + "%"; //set percentage
      }, 50);
  } else {
      alert("addMiner went to else statement. No more free citizens, can't add more jobs")
  }
}

function addWoodsmith() {
  intUsedCitizens = intHunters + intGatherers + intFarmers + intWoodcutters + intTrappers + intMiners + intWoodsmiths + intTailors + intBlacksmiths;
  if (intUsedCitizens < intTotalCitizens) { //if there are free citizens
      if (intFree == 1) { //disables job buttons if there's only one free citizen - essentially reserves it for this function
        $(".addJobButton").addClass("disabled");
      }
      $("#addWoodsmithButton").addClass("addJobDisabled");
      var woodsmithProgress = 0;
      var woodsmithProgressTotalTime = 5000; //you ALSO need to adjust this to change time it takes
      var woodsmithProgressTimeElapsed = 0;
      var timesRun = 0; //function runs every 50ms, so after 100 runs 5 seconds will elapse and function will end
      var timeout = setInterval(function() {
        timesRun += 1; //increments the count of timesRun. this is important
        if(timesRun >= 100){ // ALSO change this to adjust time it takes to train citizen
          clearInterval(timeout); //break interval
          intWoodsmiths++; //increment citizen job
          updateDistribution();
          document.getElementById("addWoodsmithProgress").style.width = "0%";
          $("#addWoodsmithButton").removeClass("addJobDisabled");
        } else {}
        woodsmithProgressTimeElapsed = woodsmithProgressTimeElapsed + 50; //necessary for calculating percentage
        woodsmithProgress = ((woodsmithProgressTotalTime - woodsmithProgressTimeElapsed) / woodsmithProgressTotalTime) * 100; //calculate bar percentage
        document.getElementById("addWoodsmithProgress").style.width = woodsmithProgress + "%"; //set percentage
      }, 50);
  } else {
      alert("addWoodsmith went to else statement. No more free citizens, can't add more jobs")
  }
}

function addTailor() {
  intUsedCitizens = intHunters + intGatherers + intFarmers + intWoodcutters + intTrappers + intMiners + intWoodsmiths + intTailors + intBlacksmiths;
  if (intUsedCitizens < intTotalCitizens) { //if there are free citizens
      if (intFree == 1) { //disables job buttons if there's only one free citizen - essentially reserves it for this function
        $(".addJobButton").addClass("disabled");
      }
      $("#addTailorButton").addClass("addJobDisabled");
      var tailorProgress = 0;
      var tailorProgressTotalTime = 5000; //you ALSO need to adjust this to change time it takes
      var tailorProgressTimeElapsed = 0;
      var timesRun = 0; //function runs every 50ms, so after 100 runs 5 seconds will elapse and function will end
      var timeout = setInterval(function() {
        timesRun += 1; //increments the count of timesRun. this is important
        if(timesRun >= 100){ // ALSO change this to adjust time it takes to train citizen
          clearInterval(timeout); //break interval
          intTailors++; //increment citizen job
          updateDistribution();
          document.getElementById("addTailorsProgress").style.width = "0%";
          $("#addTailorButton").removeClass("addJobDisabled");
        } else {}
        tailorProgressTimeElapsed = tailorProgressTimeElapsed + 50; //necessary for calculating percentage
        tailorProgress = ((tailorProgressTotalTime - tailorProgressTimeElapsed) / tailorProgressTotalTime) * 100; //calculate bar percentage
        document.getElementById("addTailorProgress").style.width = tailorProgress + "%"; //set percentage
      }, 50);
  } else {
      alert("addTailor went to else statement. No more free citizens, can't add more jobs")
  }
}

function addBlacksmith() {
  intUsedCitizens = intHunters + intGatherers + intFarmers + intWoodcutters + intTrappers + intMiners + intWoodsmiths + intTailors + intBlacksmiths;
  if (intUsedCitizens < intTotalCitizens) { //if there are free citizens
      if (intFree == 1) { //disables job buttons if there's only one free citizen - essentially reserves it for this function
        $(".addJobButton").addClass("disabled");
      }
      $("#addBlacksmithButton").addClass("addJobDisabled");
      var backsmithProgress = 0;
      var blacksmithProgressTotalTime = 5000; //you ALSO need to adjust this to change time it takes
      var blacksmithProgressTimeElapsed = 0;
      var timesRun = 0; //function runs every 50ms, so after 100 runs 5 seconds will elapse and function will end
      var timeout = setInterval(function() {
        timesRun += 1; //increments the count of timesRun. this is important
        if(timesRun >= 100){ // ALSO change this to adjust time it takes to train citizen
          clearInterval(timeout); //break interval
          intBlacksmiths++; //increment citizen job
          updateDistribution();
          document.getElementById("addBlacksmithProgress").style.width = "0%";
          $("#addBlackmsithButton").removeClass("addJobDisabled");
        } else {}
        blacksmithProgressTimeElapsed = blacksmithProgressTimeElapsed + 50; //necessary for calculating percentage
        blacksmithProgress = ((blacksmithProgressTotalTime - blacksmithProgressTimeElapsed) / blacksmithProgressTotalTime) * 100; //calculate bar percentage
        document.getElementById("addBlacksmithProgress").style.width = blacksmithProgress + "%"; //set percentage
      }, 50);
  } else {
      alert("addBlacksmith went to else statement. No more free citizens, can't add more jobs")
  }
}
