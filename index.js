// Code your solution in this file!
let drivers = []

const returnFirstTwoDrivers = (drivers) => {
   let firstTwoDrivers = drivers.slice(0, 2)
    return firstTwoDrivers
}

const returnLastTwoDrivers = (drivers) => {
    let lastTwoDrivers = drivers.slice(drivers.length - 2)
    return lastTwoDrivers
}

const selectingDrivers = []

selectingDrivers.push(returnFirstTwoDrivers, returnLastTwoDrivers)



const createFareMultiplier = (multiplier) => {
    const calcFare = (fare) => ( parseInt(fare)) * (parseInt(multiplier))
        return calcFare
    } 

    const fareDoubler = (fare) => {
        return createFareMultiplier(2)(fare) 
    }

    const fareTripler = (fare) => {
        return createFareMultiplier(3)(fare)
    }

    const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
        
        return returnFirstTwoDrivers(drivers) || returnLastTwoDrivers(drivers)
    
       
    }