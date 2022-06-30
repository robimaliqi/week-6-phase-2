class Thermostat {
  constructor(){
  this.temperature = 20;
  this.mode = true;
  }

  up(){
     if (this.mode == true && this.temperature < 25){
      this.temperature += 1;
    } else if (this.mode == false && this.temperature < 32){
      this.temperature +=1;
    }
  }

  down(){
    if(this.temperature > 10){
     this.temperature -=1;
    }
  }

  setPowerSavingMode(mode){
    this.mode = mode
  }

  reset(){
    this.temperature = 20
  }

  getTemperature(){
    return this.temperature
  }

  getCurrentUsage(){
    if (this.temperature < 18) {
      return "low-usage"
    } else if (this.temperature <= 25) {
      return "medium-usage"
    } else if (this.temperature > 26) {
      return "high-usage"
    }
  }
}

const thermostat = new Thermostat();

console.log(thermostat.getTemperature()); // should return 20
console.log(thermostat.up());
console.log(thermostat.up());
console.log(thermostat.getTemperature()); // should now return 22
console.log(thermostat.down());
console.log(thermostat.getTemperature()); // should now return 21
console.log(thermostat.setPowerSavingMode(true)); // PSM is now on, max temperature is 25

for (let i = 0 ; i < 10 ; i++) {
  thermostat.up();
}

console.log(thermostat.getTemperature()); // should be 25 (max reached)
console.log(thermostat.setPowerSavingMode(false)); // PSM is now off, max temperature is no more 25
console.log(thermostat.up());
console.log(thermostat.getTemperature()); // should now return 26
console.log(thermostat.reset());
console.log(thermostat.getTemperature()); // should be back to 20

module.exports = Thermostat;