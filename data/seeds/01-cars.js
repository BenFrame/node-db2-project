// STRETCH
const cars = [
    {
        vin: 'WBAET37404NJ42149', 
        make: 'toyota', 
        model: 'prius', 
        mileage: 215000, 
        title: 'clean', 
        transmission: 'manual',
    },
    {
        vin: '2G4WD582391176443', 
        make: 'toyota', 
        model: 'corola', 
        mileage: 115000, 
        title: 'salvage', 
        
    },
    {
        vin: '1G1PC5SB2D7146892', 
        make: 'ford', 
        model: 'focus', 
        mileage: 15000, 
        
    }
]
exports.seed = function(knex) {
    return knex('cars').truncate().then(()=>{
        return knex('cars').insert(cars)
    })
}
// exports.seed = async function(knex){
//     await knex('cars').truncate()
//     await knex('cars').insert(cars)
// }