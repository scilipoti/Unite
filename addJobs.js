function addHunter() {
    intUsedCitizens = intHunters + intGatherers + intFarmers + intWoodcutters + intTrappers + intMiners + intWoodsmiths + intTailors + intBlacksmiths;
    if (intUsedCitizens < intTotalCitizens) {
        intHunters++;
    } else {
        alert("addHunter went to else statement. No more free citizens, can't add more jobs")
    }
    updateDistribution();
}

function addGatherer() {
    intUsedCitizens = intHunters + intGatherers + intFarmers + intWoodcutters + intTrappers + intMiners + intWoodsmiths + intTailors + intBlacksmiths;
    if (intUsedCitizens < intTotalCitizens) {
        intGatherers++;
    } else {alert("addGatherer went to else statement. No more free citizens, can't add more jobs")}
    updateDistribution();
}

function addFarmer() {
    intUsedCitizens = intHunters + intGatherers + intFarmers + intWoodcutters + intTrappers + intMiners + intWoodsmiths + intTailors + intBlacksmiths;
    if (intUsedCitizens < intTotalCitizens) {
        intFarmers++;
    } else {alert("addFarmer went to else statement. No more free citizens, can't add more jobs")}
    updateDistribution();
}

function addWoodcutter() {
    intUsedCitizens = intHunters + intGatherers + intFarmers + intWoodcutters + intTrappers + intMiners + intWoodsmiths + intTailors + intBlacksmiths;
    if (intUsedCitizens < intTotalCitizens) {
        intWoodcutters++;
    } else {alert("addWoodcutter went to else statement. No more free citizens, can't add more jobs")}
    updateDistribution();
}

function addTrapper() {
    intUsedCitizens = intHunters + intGatherers + intFarmers + intWoodcutters + intTrappers + intMiners + intWoodsmiths + intTailors + intBlacksmiths;
    if (intUsedCitizens < intTotalCitizens) {
        intTrappers++;
    } else {alert("addTrapper went to else statement. No more free citizens, can't add more jobs")}
    updateDistribution();
}

function addMiner() {
    intUsedCitizens = intHunters + intGatherers + intFarmers + intWoodcutters + intTrappers + intMiners + intWoodsmiths + intTailors + intBlacksmiths;
    if (intUsedCitizens < intTotalCitizens) {
        intMiners++;
    } else {alert("addMiner went to else statement. No more free citizens, can't add more jobs")}
    updateDistribution();
}

function addWoodsmith() {
    intUsedCitizens = intHunters + intGatherers + intFarmers + intWoodcutters + intTrappers + intMiners + intWoodsmiths + intTailors + intBlacksmiths;
    if (intUsedCitizens < intTotalCitizens) {
        intWoodsmiths++;
    } else {alert("addWoodsmith went to else statement. No more free citizens, can't add more jobs")}
    updateDistribution();
}

function addTailor() {
    intUsedCitizens = intHunters + intGatherers + intFarmers + intWoodcutters + intTrappers + intMiners + intWoodsmiths + intTailors + intBlacksmiths;
    if (intUsedCitizens < intTotalCitizens) {
        intTailors++;
    } else {alert("addTailor went to else statement. No more free citizens, can't add more jobs")}
    updateDistribution();
}

function addBlacksmith() {
    intUsedCitizens = intHunters + intGatherers + intFarmers + intWoodcutters + intTrappers + intMiners + intWoodsmiths + intTailors + intBlacksmiths;
    if (intUsedCitizens < intTotalCitizens) {
        intBlacksmiths++;
    } else {alert("addBlacksmith went to else statement. No more free citizens, can't add more jobs")}
    updateDistribution();
}
