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

    it('checks if power saving mode is on', () => {
      const thermostat = new Thermostat();
      thermostat.setPowerSavingMode(true);
      expect(thermostat.mode).toBeTruthy();
    })

    it('the maximum temperature is 25 degrees, when power saving mode is on', () => {
      const thermostat = new Thermostat();
      thermostat.setPowerSavingMode(true);
      for(let i = 0 ; i < 20 ; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toEqual(25)
    });

    it('if power saving mode is off then max temperature is 32', () => {
      const thermostat = new Thermostat();
      thermostat.setPowerSavingMode(false);
      for(let i = 0 ; i < 20 ; i++) {
        thermostat.up();
      }
      expect(thermostat.getTemperature()).toEqual(32)
    });
  });
  describe('./reset', () => {
    it('resets the temperature back to default', () => {
      const thermostat = new Thermostat();
      thermostat.up()
      thermostat.reset()
      expect(thermostat.getTemperature()).toEqual(20)
    });
  });
  describe('./getCurrentUsage', () => {
    it('returns "low-usage" if the temp is < 18', () => {
      const thermostat = new Thermostat();
      for(let i = 0 ; i < 3 ; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentUsage()).toEqual("low-usage")
      expect(thermostat.getTemperature()).toEqual(17)
    });

    it('returns "medium-usage" if the temp is <= 25', () => {
      const thermostat = new Thermostat();
      for(let i = 0 ; i < 4 ; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentUsage()).toEqual("medium-usage")
      expect(thermostat.getTemperature()).toEqual(24)
    });

    it('returns "high-usage" if the temp is > 25', () => {
      const thermostat = new Thermostat();
      thermostat.setPowerSavingMode(false);
      for(let i = 0 ; i < 10 ; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentUsage()).toEqual("high-usage")
      expect(thermostat.getTemperature()).toEqual(30)
    });
  });
});
