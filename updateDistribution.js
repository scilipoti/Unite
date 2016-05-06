function updateDistribution() {

    //resource rates
    if (woodsmithsProducing == true) {
      woodsmithLumberRate = 1;
      woodsmithWoodRate = -2;
      lumberRate = (woodsmithLumberRate * intWoodsmiths);
    } else  if (woodsmithsProducing == false){
      woodsmithWoodRate = 0;
      woodsmithLumberRate = 0;
      lumberRate = (woodsmithLumberRate * intWoodsmiths);
    }

    if (tailorsProducing == true) {
      tailorClothRate = 1;
      tailorFursRate = -2;
      clothRate = (tailorClothRate * intTailors);
    } else  if (tailorsProducing == false){
      tailorClothRate = 0;
      tailorFursRate = 0;
      clothRate = (tailorClothRate * intTailors);
    }

    if (blacksmithsProducing == true) {
      blacksmithMetalRate = 1;
      blacksmithOreRate = -2;
      metalRate = (blacksmithMetalRate * intBlacksmiths);
    } else  if (blacksmithsProducing == false){
      blacksmithMetalRate = 0;
      blacksmithOreRate = 0;
      metalRate = (blacksmithMetalRate * intBlacksmiths);
    }

    if (huntersProducing == true) {
      hunterFoodRate = 1;
      hunterFursRate = 1;
      fursRate = ((hunterFursRate * intHunters) + (trapperFursRate * intTrappers)) + (tailorFursRate * intTailors);
    } else  if (farmersProducing == false) {
      hunterFoodRate = 0;
      hunterFursRate = 0;
      fursRate = ((hunterFursRate * intHunters) + (trapperFursRate * intTrappers)) + (tailorFursRate * intTailors);
    }

    if (gatherersProducing == true) {
      gathererFoodRate = 1;
      gathererWoodRate = 1;
      woodRate = ((gathererWoodRate * intGatherers) + (woodcutterWoodRate * intWoodcutters)) + (woodsmithWoodRate * intWoodsmiths);
    } else  if (gatherersProducing == false) {
      gathererFoodRate = 0;
      gathererWoodRate = 0;
      woodRate = ((gathererWoodRate * intGatherers) + (woodcutterWoodRate * intWoodcutters)) + (woodsmithWoodRate * intWoodsmiths);
    }

    if (minersProducing == true) {
      minerOreRate = 2;
      oreRate = (minerOreRate * intMiners) + (blacksmithOreRate * intBlacksmiths);
    } else  if (gatherersProducing == false) {
      minerOreRate = 2;
      oreRate = (minerOreRate * intMiners) + (blacksmithOreRate * intBlacksmiths);
    }

    if (farmersProducing == true) {
      farmerFoodRate = 2;
      foodRate = ((hunterFoodRate * intHunters) + (gathererFoodRate * intGatherers) + (farmerFoodRate * intFarmers)) - intTotalCitizens;
    } else  if (farmersProducing == false) {
      farmerFoodRate = 0;
      foodRate = ((hunterFoodRate * intHunters) + (gathererFoodRate * intGatherers) + (farmerFoodRate * intFarmers)) - intTotalCitizens;
    }

    //citizen population variables
    intUsedCitizens = intHunters + intGatherers + intFarmers + intWoodcutters + intTrappers + intMiners + intWoodsmiths + intTailors + intBlacksmiths;
    intFree = intTotalCitizens - intUsedCitizens;

    //distribution percentages
    distributionHunters = ( intHunters / intMaxPop ) * 100;
    distributionGatherers = ( intGatherers / intMaxPop ) * 100;
    distributionFarmers = ( intFarmers / intMaxPop ) * 100;
    distributionWoodcutters = ( intWoodcutters / intMaxPop ) * 100;
    distributionTrappers = ( intTrappers / intMaxPop ) * 100;
    distributionMiners = ( intMiners / intMaxPop ) * 100;
    distributionWoodsmiths = ( intWoodsmiths / intMaxPop ) * 100;
    distributionTailors = ( intTailors / intMaxPop ) * 100;
    distributionBlacksmiths = ( intBlacksmiths / intMaxPop ) * 100;
    distributionFree = ( intFree / intMaxPop ) * 100;
    distributionMaxPop = 100 - distributionHunters - distributionGatherers - distributionFarmers - distributionWoodcutters - distributionTrappers - distributionMiners - distributionWoodsmiths - distributionTailors - distributionBlacksmiths - distributionFree;

    //sizing the bar to the percentages
    document.getElementById('distributionHunters').style.width = distributionHunters + "%";
    document.getElementById('distributionGatherers').style.width = distributionGatherers + "%";
    document.getElementById('distributionFarmers').style.width = distributionFarmers + "%";
    document.getElementById('distributionWoodcutters').style.width = distributionWoodcutters + "%";
    document.getElementById('distributionTrappers').style.width = distributionTrappers + "%";
    document.getElementById('distributionMiners').style.width = distributionMiners + "%";
    document.getElementById('distributionWoodsmiths').style.width = distributionWoodsmiths + "%";
    document.getElementById('distributionTailors').style.width = distributionTailors + "%";
    document.getElementById('distributionBlacksmiths').style.width = distributionBlacksmiths + "%";
    document.getElementById('distributionFree').style.width = distributionFree + "%";
    document.getElementById('distributionMaxPop').style.width = distributionMaxPop + "%";

    //writing citizen numbers in the distribution bar
    document.getElementById('distributionHunters').innerHTML = intHunters + " Hunters";
    document.getElementById('distributionGatherers').innerHTML = intGatherers + " Gatherers";
    document.getElementById('distributionFarmers').innerHTML = intFarmers + " Farmers";
    document.getElementById('distributionWoodcutters').innerHTML = intWoodcutters + " Woodcutters";
    document.getElementById('distributionTrappers').innerHTML = intTrappers + " Trappers";
    document.getElementById('distributionMiners').innerHTML = intMiners + " Miners";
    document.getElementById('distributionWoodsmiths').innerHTML = intWoodsmiths + " Woodsmiths";
    document.getElementById('distributionTailors').innerHTML = intTailors + " Tailors";
    document.getElementById('distributionBlacksmiths').innerHTML = intBlacksmiths + " Blacksmiths";
    document.getElementById('distributionFree').innerHTML = intFree + " Unemployed";
    document.getElementById('distributionMaxPop').innerHTML = (intMaxPop - intTotalCitizens) + " Empty Beds";

    //setting resource rate display
    document.getElementById('foodRate').innerHTML = foodRate + "/sec";
    document.getElementById('woodRate').innerHTML = woodRate + "/sec";
    document.getElementById('fursRate').innerHTML = fursRate + "/sec";
    document.getElementById('oreRate').innerHTML = oreRate + "/sec";
    document.getElementById('lumberRate').innerHTML = lumberRate + "/sec";
    document.getElementById('clothRate').innerHTML = clothRate + "/sec";
    document.getElementById('metalRate').innerHTML = metalRate + "/sec";

    //writing citizens to the citizen resource panel
    document.getElementById('totalFarmers').innerHTML = intFarmers + " farmers";
    document.getElementById('totalGatherers').innerHTML = intGatherers + " gatherers";
    document.getElementById('totalHunters').innerHTML = intHunters + " hunters";
    document.getElementById('totalWoodcutters').innerHTML = intWoodcutters + " woodcutters";
    document.getElementById('totalTrappers').innerHTML = intTrappers + " trappers";
    document.getElementById('totalMiners').innerHTML = intMiners + " miners";
    document.getElementById('totalWoodsmiths').innerHTML = intWoodsmiths + " woodsmiths";
    document.getElementById('totalTailors').innerHTML = intTailors + " tailors";
    document.getElementById('totalBlacksmiths').innerHTML = intBlacksmiths + " blacksmiths";

    //disable training citizens if there are not more free citizens
    if (intFree <= 0) {
      $('.addJobButton').addClass("disabled");
    //if they are disabled and there are free citizens, enable them
    } else if (intFree > 0 && $('#addHunterButton').hasClass("disabled")) {
      $('.addJobButton').removeClass("disabled");
    }

    hunterFoodRateTooltip = (hunterFoodRate * intHunters) + "/sec from hunters";
    gathererFoodRateTooltip = (gathererFoodRate * intGatherers) + "/sec from gatherers";
    farmerFoodRateTooltip = (farmerFoodRate * intFarmers) + "/sec from farmers";
    citizenFoodRateTooltip = (intTotalCitizens * -1) + "/sec from consumption"; //total citizen consumption

    gathererWoodRateTooltip = (gathererWoodRate * intGatherers) + "/sec from gatherers";
    woodcutterWoodRateTooltip = (woodcutterWoodRate * intWoodcutters) + "/sec from woodcutters";
    woodsmithWoodRateTooltip = (woodsmithWoodRate * intWoodsmiths) + "/sec from woodsmiths";

    hunterFursRateTooltip = (hunterFursRate * intHunters) + "/sec from hunters";
    trapperFursRateTooltip = (trapperFursRate * intTrappers) + "/sec from trappers";
    tailorFursRateTooltip = (tailorFursRate * intTailors) + "/sec from tailors";

    minerOreRateTooltip = (minerOreRate * intMiners) + "/sec from miners";
    blacksmithOreRateTooltip = (blacksmithOreRate * intBlacksmiths) + "/sec from blacksmiths";

    woodsmithLumberRateTooltip = (woodsmithLumberRate * intWoodsmiths) + "/sec from woodsmiths";

    tailorClothRateTooltip = (tailorClothRate * intTailors) + "/sec from tailors";

    blacksmithMetalRateTooltip = (blacksmithMetalRate * intBlacksmiths) + "/sec from blacksmiths";

    updateTooltipDelay();

    updateVillageRank();

}
