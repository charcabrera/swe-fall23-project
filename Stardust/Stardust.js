
// TODO Refactor building/upgrade terminology
// TODO Add costs to the building upgrades
// TODO Add prestige system
// TODO Add more buildings/upgrades

// The stuff you need to play the game
let protons = 0;
let electrons = 0; 
let neutrons = 0;

// Production values (upgradeable values)
let maxProtons = 1;
let maxElectrons = 1;
let maxNeutrons = 1;
let grabPower = 1;
let particlesPerSecond = 0;

// Value by which each upgrade alters the production values
let protonUpgrade1BaseVal = 1;
let protonUpgrade1MultVal = 1;
let electronUpgrade1BaseVal = 1;
let electronUpgrade1MultVal = 1;
let neutronUpgrade1BaseVal = 1;
let neutronUpgrade1MultVal = 1;


// Cost of all the upgrades duh
let protonUpgradeCost = 10;
let electronUpgradeCost = 10;
let neutronUpgradeCost = 10;
let grabPowerUpgradeCost = 100;
let weakGravityUpgradeCost = 20;
let strongGravityUpgradeCost = 150;
let protonUpgradeUpgradeCost = 0;
let electronUpgradeUpgradeCost = 0;
let neutronUpgradeUpgradeCost = 0;

// Holds the Interval object(tick counter, timer, whatever you want to call it)
let timerInterval; 

// When the button is clicked, generates a random amount of each particle based on the production values
const clicked = () => {
    let gainedProtons = Math.floor(Math.random() * (1 + maxProtons) * grabPower);
    let gainedElectrons = Math.floor(Math.random() * (1 + maxElectrons) * grabPower);
    let gainedNeutrons = Math.floor(Math.random() * (1 + maxNeutrons) * grabPower);
    protons += gainedProtons;
    electrons += gainedElectrons;
    neutrons += gainedNeutrons;
    document.getElementById("gained-protons").innerHTML = gainedProtons + " Protons";
    document.getElementById("gained-electrons").innerHTML = gainedElectrons + " Electrons";
    document.getElementById("gained-neutrons").innerHTML = gainedNeutrons + " Neutrons";
    updateParticleCount();
}

/*-------- Clicker Upgrades -------*/

// Each of the particle upgrades increments the base amount of possible particles per click for their respective particle
const protonUpgrade = () => {
    if(protons >= protonUpgradeCost){
        protons -= protonUpgradeCost;
        protonUpgradeCost = Math.ceil(protonUpgradeCost * 1.7);
        protonUpgrade1BaseVal++;
        updateParticleVals();
        updateParticleCount();
        document.getElementById("proton-cost").innerHTML = "Cost: " + protonUpgradeCost + " protons";
    }
}
const electronUpgrade = () => {
    if(electrons >= electronUpgradeCost){
        electrons -= electronUpgradeCost;
        electronUpgradeCost = Math.ceil(electronUpgradeCost * 1.7);
        electronUpgrade1BaseVal++;
        updateParticleVals();
        updateParticleCount();
        document.getElementById("electron-cost").innerHTML = "Cost: " + electronUpgradeCost + " electrons";
    }
}
const neutronUpgrade = () => {
    if(neutrons >= neutronUpgradeCost){
        neutrons -= neutronUpgradeCost;
        neutronUpgradeCost = Math.ceil(neutronUpgradeCost * 1.7);
        neutronUpgrade1BaseVal++;
        updateParticleVals();
        updateParticleCount();
        document.getElementById("neutron-cost").innerHTML = "Cost: " + neutronUpgradeCost + " neutrons";
    }
}

// This upgrade doubles the amount of possble particles per click
const grabPowerUpgrade = () => {
    if(protons >= grabPowerUpgradeCost && neutrons >= grabPowerUpgradeCost && electrons >= grabPowerUpgradeCost){
        protons -= grabPowerUpgradeCost;
        electrons -= grabPowerUpgradeCost;
        neutrons -= grabPowerUpgradeCost;
        grabPower *= 2;
        grabPowerUpgradeCost = Math.pow(grabPower, 2) * 100;
        document.getElementById("grab-cost").innerHTML = "Cost: " + grabPowerUpgradeCost + " of each particle";
        updateParticleCount();
    }
}


/*-------- Idle Upgrades ----------*/

// Increases particles per second by 1
const weakGravityUpgrade = () => {
    if(protons >= weakGravityUpgradeCost && neutrons >= weakGravityUpgradeCost && electrons >= weakGravityUpgradeCost){
        protons -= weakGravityUpgradeCost;
        electrons -= weakGravityUpgradeCost;
        neutrons -= weakGravityUpgradeCost;
        particlesPerSecond++;
        weakGravityUpgradeCost = Math.ceil(weakGravityUpgradeCost * 1.2);
        document.getElementById("wg-cost").innerHTML = "Cost: " + weakGravityUpgradeCost + " of each particle";
        resetTimer();
        updatePPS();
        updateParticleCount();
    }
}

// Increases particles per second by 7
const strongGravityUpgrade = () => {
    if(protons >= strongGravityUpgradeCost && neutrons >= strongGravityUpgradeCost && electrons >= strongGravityUpgradeCost){
        protons -= strongGravityUpgradeCost;
        electrons -= strongGravityUpgradeCost;
        neutrons -= strongGravityUpgradeCost;
        particlesPerSecond += 7;
        strongGravityUpgradeCost = Math.ceil(strongGravityUpgradeCost * 1.4);
        document.getElementById("sg-cost").innerHTML = "Cost: " + strongGravityUpgradeCost + " of each particle";
        resetTimer();
        updatePPS();
        updateParticleCount();
    }
}

/*-------- Building Upgrades -----------*/

// Increases multiplier for protonUpgrade1
const protonUpgradeUpgrade = () => {
    if(protons >= protonUpgradeUpgradeCost){
        protons -= protonUpgradeUpgradeCost;
        protonUpgrade1MultVal++;
        document.getElementById("puu-cost").innerHTML = "Cost: " + protonUpgradeUpgradeCost + " protons";
        updateParticleVals();
        updateParticleCount();
    }
}

//Increases multiplier for electronUpgrade1
const electronUpgradeUpgrade = () => {
    if(electrons >= electronUpgradeUpgradeCost){
        electrons -= electronUpgradeUpgradeCost;
        electronUpgrade1MultVal++;
        document.getElementById("euu-cost").innerHTML = "Cost: " + electronUpgradeUpgradeCost + " electrons";
        updateParticleVals();
        updateParticleCount();
    }
}

//Increases multiplier for neutronUpgrade1
const neutronUpgradeUpgrade = () => {
    if(neutrons >= neutronUpgradeUpgradeCost){
        neutrons -= neutronUpgradeUpgradeCost;
        neutronUpgrade1MultVal++;
        document.getElementById("nuu-cost").innerHTML = "Cost: " + neutronUpgradeUpgradeCost + " neutrons";
        updateParticleVals();
        updateParticleCount();
    }
}

/*--------- Helper/Other Functions ----------*/

// Increases each particle by particlesPerSecond -- Called by timerInterval
const idleGain = () => {
    protons += particlesPerSecond;
    electrons += particlesPerSecond;
    neutrons += particlesPerSecond;
    updateParticleCount();
}

// Updates max particle values
const updateParticleVals = () => {
    maxProtons = protonUpgrade1BaseVal * protonUpgrade1MultVal;
    maxElectrons = electronUpgrade1BaseVal * electronUpgrade1MultVal;
    maxNeutrons = neutronUpgrade1BaseVal * neutronUpgrade1MultVal;
}

// Updates tick counter with new particlesPerSecond value
const resetTimer = () => {
    clearInterval(timerInterval);
    timerInterval = setInterval(idleGain, 1000);
    updateParticleCount();
}

// Starts the tick counter so that "idleness" can happen
const startGame = () => {
    timerInterval = setInterval(idleGain, 1000);
    updateParticleCount();
}

// Updates the webpage to show the current value of particles
const updateParticleCount = () => {
    document.getElementById("proton-count").innerHTML = "Total protons: " + protons;
    document.getElementById("electron-count").innerHTML = "Total electrons: " + electrons;
    document.getElementById("neutron-count").innerHTML = "Total neutrons: " + neutrons;
}

// Updates the Particles Per Second label on the webpage
const updatePPS = () => {
    document.getElementById("pps").innerHTML = "Particles per second: " + particlesPerSecond;
}


// This is just here to initialize the tick counter at game launch
startGame();