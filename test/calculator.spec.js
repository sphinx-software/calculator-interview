const chai = require('chai');
const assert = chai.assert;

const Calculator = require('./../src/calculator');

describe('Calculator test suite', () => {
    
    let calculator = null;
    
    beforeEach(() => {
        calculator = new Calculator();
    });

    it('can do addition', () => {
        let result = calculator.add(1, 2);

        assert.equal(3, result);
    });

    it('can do subtraction', () => {
        let result = calculator.subtract(2, 1);

        assert.equal(1, result);
    });

    it('can do multiplication', () => {
        let result = calculator.multiply(2, 3);

        assert.equal(6, result);
    });

    it('can do division', () => {
        let result = calculator.divide(6, 3);

        assert.equal(2, result);
    });
});
