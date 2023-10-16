function car(make,model,year){
    return {
        make, 
        model,
        year
    }
}
    let carData=car('BMW','BMW X7',2014)

    console.log('Properties');
    for(let data in carData){
        console.log(`${data} : ${carData[data]}`)
}
