const chai = require('chai');
const assert = chai.assert;

const Calculator = require('./../src/calculator');

describe('Calculator test suite', () => {
    
    let calculator = null;
    
    beforeEach(function () {
        calculator = new Calculator();
    });

    it('can do add', function () {
        let result = calculator.add(1, 2);

        assert.equal(3, result);
    });

    it('can do substract', function () {
        let result = calculator.substract(2, 1);

        assert.equal(1, result);
    });

    it('can do multiply', function () {
        let result = calculator.multiply(2, 3);

        assert.equal(6, result);
    });

    it('can do divide', function () {
        let result = calculator.divide(6, 3);

        assert.equal(2, result);
    });
});
