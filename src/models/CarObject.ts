/*
* Category: sedan, hatchback, suv, coupe, convertible, wagon, van, pickup, minivan
* fuelType: diesel, gasoline, hybrid, electric
* engine ->  engineType: inline, v, boxer, rotary
* transmission: manual, automatic, cvt, dsg, smg
* year: manufactured year
* country: country of origin
* torque: torque in Nm
* horsePower: horse power in hp
*/

export interface CarObject {
    brand:string,
    color:string,
    model:string,
    category:string ,
    engine:string ,
    year:number,
    fuelType:string ,
    cylinderCapacity:number,
    torque:number,
    horsePower:number,
    country:string ,
    transmission:string 
}