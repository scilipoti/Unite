function updateTooltipDelay() {

  $('#addHunterButton').tooltip({html: true, title: "+" + hunterFoodRate + " food/sec" + "<br>" + "+" + hunterFursRate + " furs/sec", delay: {show: tooltipDelay, hide: 0}, placement: "right"});
  $('#addGathererButton').tooltip({html: true, title: "+" + gathererFoodRate + " food/sec" + "<br>" + "+" + gathererWoodRate + " wood/sec", delay: {show: tooltipDelay, hide: 0}, placement: "right"});
  $('#addFarmerButton').tooltip({html: true, title: "+" + farmerFoodRate + " food/sec", delay: {show: tooltipDelay, hide: 0}, placement: "right"});
  $('#addWoodcutterButton').tooltip({html: true, title: "+" + woodcutterWoodRate + " wood/sec", delay: {show: tooltipDelay, hide: 0}, placement: "right"});
  $('#addTrapperButton').tooltip({html: true, title: "+" + trapperFursRate + " furs/sec", delay: {show: tooltipDelay, hide: 0}, placement: "right"});
  $('#addMinerButton').tooltip({html: true, title: "+" + minerOreRate + " ore/sec", delay: {show: tooltipDelay, hide: 0}, placement: "right"});
  $('#addWoodsmithButton').tooltip({html: true, title: "+" + woodsmithLumberRate + " lumber/sec" + "<br>" + woodsmithWoodRate + " wood/sec", delay: {show: tooltipDelay, hide: 0}, placement: "right"});
  $('#addTailorButton').tooltip({html: true, title: "+" + tailorClothRate + " cloth/sec" + "<br>" + tailorFursRate + " furs/sec", delay: {show: tooltipDelay, hide: 0}, placement: "right"});
  $('#addBlacksmithButton').tooltip({html: true, title: "+" + blacksmithMetalRate + " metal/sec" + "<br>" + blacksmithOreRate + " ore/sec", delay: {show: tooltipDelay, hide: 0}, placement: "right"});

  $('#addHutButton').tooltip({title: "+2 beds", delay: {show: tooltipDelay, hide: 0}, placement: "right"});

  //resource tooltip variables calculated in updateDistribution()
  $('#foodCount').tooltip({html: true, delay: {show: 0, hide: 0}, placement: "right"}).attr('data-original-title', hunterFoodRateTooltip + "<br>" + gathererFoodRateTooltip + "<br>" + farmerFoodRateTooltip + "<br>" + citizenFoodRateTooltip).tooltip('fixTitle');
  $('#woodCount').tooltip({html: true, delay: {show: 0, hide: 0}, placement: "right"}).attr('data-original-title', gathererWoodRateTooltip + "<br>" + woodcutterWoodRateTooltip + "<br>" + woodsmithWoodRateTooltip).tooltip('fixTitle');
  $('#fursCount').tooltip({html: true, delay: {show: 0, hide: 0}, placement: "right"}).attr('data-original-title', hunterFursRateTooltip + "<br>" + trapperFursRateTooltip + "<br>" + tailorFursRateTooltip).tooltip('fixTitle');
  $('#oreCount').tooltip({html: true, delay: {show: 0, hide: 0}, placement: "right"}).attr('data-original-title', minerOreRateTooltip + "<br>" + blacksmithMetalRateTooltip).tooltip('fixTitle');
  $('#lumberCount').tooltip({html: true, delay: {show: 0, hide: 0}, placement: "right"}).attr('data-original-title', woodsmithLumberRateTooltip).tooltip('fixTitle');
  $('#clothCount').tooltip({html: true, delay: {show: 0, hide: 0}, placement: "right"}).attr('data-original-title', tailorClothRateTooltip).tooltip('fixTitle');
  $('#metalCount').tooltip({html: true, delay: {show: 0, hide: 0}, placement: "right"}).attr('data-original-title', blacksmithMetalRateTooltip).tooltip('fixTitle');

}
