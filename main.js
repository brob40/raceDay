let raceNumber = Math.floor(Math.random() * 1000); 

var earlyRegister = true;
let age = 19;

if(age >= 18 && earlyRegister === true) {
    raceNumber +=1000;
    console.log(`Runner ${raceNumber}, you will be starting at 9:30AM`);
}else if (age >= 18 && earlyRegister === false){
    console.log(`Runner ${raceNumber}, you will be starting at 11:00 AM`);
}else if (age < 18){
    console.log(`Runnner ${raceNumber}, you will be starting at 12:30 PM`);
}
