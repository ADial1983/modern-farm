console.log("Welcome to the main module")

import { createPlan } from "./plan.js"

//const yearlyPlan = createPlan()
//console.log(yearlyPlan)

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"
import { usePlant } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"

//let asparagusSeeds = createAsparagus()
// let cornSeeds = createCorn()
// let potatoSeeds = createPotato()
// let soybeanSeeds = createSoybean()
// let sunflowerSeeds = createSunflower()
// let wheatSeeds = createWheat()
//let addedCorn = addPlant(cornSeeds)
//let addedAsparagus = addPlant(asparagusSeeds)
//let addedPotato = addPlant(potatoSeeds)
//let addedSoybeans = addPlant(soybeanSeeds)
const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)
//console.log(plantedSeeds)
let plantedSeedsArray = usePlant()
//console.log(plantedSeedsArray)
const harvestedPlantsArray = harvestPlants(plantedSeedsArray)
console.log(harvestedPlantsArray)