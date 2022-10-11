export const catalog = (array) => {
    let HTMLstring = '<article class="harvestList">'
    for (const plant of array) {
        HTMLstring += `<section class="plant">${plant.type}</section>`
    }
    HTMLstring += '</article>'

    return HTMLstring
}