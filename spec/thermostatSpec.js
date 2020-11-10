'use strict';

describe('Thermostat', function () {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('get current temperature', function() {
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it('turns down the temperatrue', function() {
    thermostat.up();
    expect(thermostat.currentTemperature()).toEqual(21);
  });

  it('turns down the temperatrue', function() {
    thermostat.down();
    expect(thermostat.currentTemperature()).toEqual(19);
  });
});
