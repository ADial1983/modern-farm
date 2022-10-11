export const harvestPlants = (plantsArray) => {
    let harvestedPlants = []
    for (const plant of plantsArray) {
        let output = 0
        if (plant.type === 'corn') {
            output = plant.output / 2
        } else {
            output = plant.output
        }
        for (let i = 0; i < output; i++) {
            harvestedPlants.push(plant)
        }
    }
    return harvestedPlants
}