const Thermostat = require('./thermostat')

/* write a first test file named thermostat.test.js and 
write a simple unit test for the Thermostat class. 
A new instance of this class should be initialised with a 
property temperature set to 20. You may have a getTemperature 
method on this instance to retrieve this value. 
This is the method you should test. */

describe('thermostat', () => {
  describe('./getTemperature', () => {
    it('returns a temperature of 20', () => {
      const thermostat = new Thermostat();
      expect(thermostat.getTemperature()).toEqual(20)
    });
  });

  describe('./up', () => { 
    it('increases the temperature', () => {
      const thermostat = new Thermostat();
      thermostat.up()
      thermostat.up()
      expect(thermostat.getTemperature()).toEqual(22)
    });
  });

  describe('./down', () => {
    it('decreses the temperature', () => {
      const thermostat = new Thermostat();
      thermostat.down()
      expect(thermostat.getTemperature()).toEqual(19)
    });

    it('it keeps the temperature above 10', () => {
      const thermostat = new Thermostat();
      for (let i = 0 ; i < 10 ; i++) {
        thermostat.down();
      }
      expect(thermostat.getTemperature()).toEqual(10)
    });
  });
  describe('./getPowerSavingMode', () => {
    it('power saving mode is on by default', () => {
      const thermostat = new Thermostat();
      for(let i = 0 ; i < 10 ; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toEqual(25)
    });
  });
});
