function updateTooltipDelay() {

  $('#addHunterButton').tooltip({title: "+" + hunterFoodRate + " food/sec and " + "+" + hunterFursRate + " furs/sec", delay: {show: tooltipDelay, hide: 0}, placement: "right"});
  $('#addGathererButton').tooltip({title: "+" + gathererFoodRate + " food/sec and " + "+" + gathererWoodRate + " wood/sec", delay: {show: tooltipDelay, hide: 0}, placement: "right"});
  $('#addFarmerButton').tooltip({title: "+" + farmerFoodRate + " food/sec", delay: {show: tooltipDelay, hide: 0}, placement: "right"});
  $('#addWoodcutterButton').tooltip({title: "+" + woodcutterWoodRate + " wood/sec", delay: {show: tooltipDelay, hide: 0}, placement: "right"});
  $('#addTrapperButton').tooltip({title: "+" + trapperFursRate + " furs/sec", delay: {show: tooltipDelay, hide: 0}, placement: "right"});
  $('#addMinerButton').tooltip({title: "+" + minerOreRate + " ore/sec", delay: {show: tooltipDelay, hide: 0}, placement: "right"});
  $('#addWoodsmithButton').tooltip({title: woodsmithWoodRate + " wood/sec and " + "+" + woodsmithLumberRate + " lumber/sec", delay: {show: tooltipDelay, hide: 0}, placement: "right"});
  $('#addTailorButton').tooltip({title: tailorFursRate + " furs/sec and " + "+" + tailorClothRate + " cloth/sec", delay: {show: tooltipDelay, hide: 0}, placement: "right"});
  $('#addBlacksmithButton').tooltip({title: blacksmithOreRate + " ore/sec and " + "+" + blacksmithMetalRate + " metal/sec", delay: {show: tooltipDelay, hide: 0}, placement: "right"});

  $('#addHutButton').tooltip({title: "+2 beds", delay: {show: tooltipDelay, hide: 0}, placement: "right"});

  $('#foodCount').tooltip({title: "+" + (farmerFoodRate * intFarmers) + "/sec from farmers, +" + (gathererFoodRate * intGatherers) + "/sec from gatherers, +" + (hunterFoodRate * intHunters) + "/sec from hunters, -" + intTotalCitizens + "/sec from consumption"})
  $('#woodCount').tooltip({title: "+" + (gathererWoodRate * intGatherers) + "/sec from gatherers, +" + (woodcutterWoodRate * intWoodcutters) + "/sec from woodcutters, " + (woodsmithWoodRate * intWoodsmiths) + "/sec from woodsmiths"})
  $('#fursCount').tooltip({title: "+" + (hunterFursRate * intHunters) + "/sec from hunters, +" + (trapperFursRate * intTrappers) + "/sec from trappers, " + (tailorFursRate * intTailors) + "/sec from tailors"})
  $('#oreCount').tooltip({title: "+" + (minerOreRate * intMiners) + "/sec from miners, " + (blacksmithOreRate * intBlacksmiths) + "/sec from blacksmiths"})
  $('#lumberCount').tooltip({title: "+" + (woodsmithLumberRate * intWoodsmiths) + "/sec from woodsmiths"})
  $('#clothCount').tooltip({title: "+" + (tailorClothRate * intTailors) + "/sec from tailors"})
  $('#metalCount').tooltip({title: "+" + (blacksmithMetalRate * intBlacksmiths) + "/sec from blacksmiths"})

}
