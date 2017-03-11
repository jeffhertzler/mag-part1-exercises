var E = require('./compose_exercises');
var assert = require("chai").assert;

describe("Compose Exercises", function(){
  var CARS = E.CARS

  it('Exercise 1', function(){
    assert.equal(E.isLastInStock(CARS), false);
  });

  it('Exercise 2', function(){
    assert.equal(E.nameOfFirstCar(CARS), "Ferrari FF");
  });

  it.skip('Exercise 3', function(){
    assert.equal(E.averageDollarValue(CARS), 790700);
  });

  it.skip('Exercise 4', function(){
    assert.deepEqual(E.sanitizeNames(CARS), ['ferrari_ff', 'spyker_c12_zagato', 'jaguar_xkr_s', 'audi_r8', 'aston_martin_one_77', 'pagani_huayra']);
  });

  it.skip('Bonus 1', function(){
    assert.equal(E.availablePrices(CARS), '$700,000.00, $1,850,000.00');
  });

  it.skip('Bonus 2', function(){
    assert.equal(E.fastestCar(CARS), 'Aston Martin One-77 is the fastest');
  });
});
