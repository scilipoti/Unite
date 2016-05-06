//disables/enables jobs
function toggleFarmers() {
  if (farmersProducing == true) {
    farmersProducing = false;
    document.getElementById('toggleFarmers').innerHTML = "enable";
    document.getElementById('totalFarmers').style.color = "grey";
    updateDistribution();
  } else if (farmersProducing == false) {
    farmersProducing = true;
    document.getElementById('toggleFarmers').innerHTML = "disable";
    document.getElementById('totalFarmers').style.color = "white";
    updateDistribution();
  }
}

function toggleGatherers() {
  if (gatherersProducing == true) {
    gatherersProducing = false;
    document.getElementById('toggleGatherers').innerHTML = "enable";
    document.getElementById('totalGatherers').style.color = "grey";
    updateDistribution();
  } else if (gatherersProducing == false) {
    gatherersProducing = true;
    document.getElementById('toggleGatherers').innerHTML = "disable";
    document.getElementById('totalGatherers').style.color = "white";
    updateDistribution();
  }
}

function toggleHunters() {
  if (huntersProducing == true) {
    huntersProducing = false;
    document.getElementById('toggleHunters').innerHTML = "enable";
    document.getElementById('totalHunters').style.color = "grey";
    updateDistribution();
  } else if (huntersProducing == false) {
    huntersProducing = true;
    document.getElementById('toggleHunters').innerHTML = "disable";
    document.getElementById('totalHunters').style.color = "white";
    updateDistribution();
  }
}

function toggleMiners() {
  if (minersProducing == true) {
    minersProducing = false;
    document.getElementById('toggleMiners').innerHTML = "enable";
    document.getElementById('totalMiners').style.color = "grey";
    updateDistribution();
  } else if (minersProducing == false) {
    minersProducing = true;
    document.getElementById('toggleMiners').innerHTML = "disable";
    document.getElementById('totalMiners').style.color = "white";
    updateDistribution();
  }
}

function toggleWoodsmiths() {
  if (woodsmithsProducing == true) {
    woodsmithsProducing = false;
    document.getElementById('toggleWoodsmiths').innerHTML = "enable";
    document.getElementById('totalWoodsmiths').style.color = "grey";
    updateDistribution();
  } else if (woodsmithsProducing == false) {
    woodsmithsProducing = true;
    document.getElementById('toggleWoodsmiths').innerHTML = "disable";
    document.getElementById('totalWoodsmiths').style.color = "white";
    updateDistribution();
  }
}

function toggleTailors() {
  if (tailorsProducing == true) {
    tailorsProducing = false;
    document.getElementById('toggleTailors').innerHTML = "enable";
    document.getElementById('totalTailors').style.color = "grey";
    updateDistribution();
  } else if (tailorsProducing == false) {
    tailorsProducing = true;
    document.getElementById('toggleTailors').innerHTML = "disable";
    document.getElementById('totalTailors').style.color = "white";
    updateDistribution();
  }
}

function toggleBlacksmiths() {
  if (blacksmithsProducing == true) {
    blacksmithsProducing = false;
    document.getElementById('toggleBlacksmiths').innerHTML = "enable";
    document.getElementById('totalBlacksmiths').style.color = "grey";
    updateDistribution();
  } else if (blacksmithsProducing == false) {
    blacksmithsProducing = true;
    document.getElementById('toggleBlacksmiths').innerHTML = "disable";
    document.getElementById('totalBlacksmiths').style.color = "white";
    updateDistribution();
  }
}
