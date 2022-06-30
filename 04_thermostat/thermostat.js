class Thermostat {
  constructor(){
  this.temperature = 20;
  }

  up(){
     if (this.temperature < 25){
    this.temperature += 1;
    }
  }

  down(){
    if(this.temperature > 10){
     this.temperature -=1;
    }
  }

  getTemperature(){
    return this.temperature
  }
}

const thermostat = new Thermostat();

console.log(thermostat.getTemperature()); // should return 20
console.log(thermostat.up());
console.log(thermostat.up());
console.log(thermostat.getTemperature()); // should now return 22
console.log(thermostat.down());
console.log(thermostat.getTemperature()); // should now return 21

// thermostat.setPowerSavingMode(true); // PSM is now on, max temperature is 25

// for (let i = 0 ; i < 10 ; i++) {
//   thermostat.up();
// }

// thermostat.getTemperature(); // should be 25 (max reached)

// thermostat.setPowerSavingMode(false); // PSM is now off, max temperature is no more 25

// thermostat.up();
// thermostat.getTemperature(); // should now return 26

// thermostat.reset();
// thermostat.getTemperature(); // should be back to 20

module.exports = Thermostat;