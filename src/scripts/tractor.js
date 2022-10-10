import { createPlan } from "./plan.js"
import { addPlant, usePlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

export const plantSeeds = (plan) => {
    for (const row of plan) {
         for (const seed of row) {
            if (seed === 'asparagus') {
                let asparagusSeeds = createAsparagus()
                addPlant(asparagusSeeds)
            }
            else if (seed === 'corn') {
                let cornSeeds = createCorn()
                addPlant(cornSeeds)
            }
            else if (seed === 'potato') {
                let potatoSeeds = createPotato()
                addPlant(potatoSeeds)
            }
            else if (seed === 'soybean') {
                let soybeanSeeds = createSoybean()
                addPlant(soybeanSeeds)
            }
            else if (seed === 'sunflower') {
                let sunflowerSeeds = createSunflower()
                addPlant(sunflowerSeeds)
            }
            else if (seed === 'wheat') {
                let wheatSeeds = createWheat()
                addPlant(wheatSeeds)
            }
    }
}
}
