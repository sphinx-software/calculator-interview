const chai = require('chai');
const assert = chai.assert;

const Calculator = require('./../src/calculator');

describe('Calculator test suite', () => {
    
    let calculator = null;
    
    beforeEach(() => {
        calculator = new Calculator();
    });

    it('can do add', () => {
        let result = calculator.add(1, 2);

        assert.equal(3, result);
    });

    it('can do substract', () => {
        let result = calculator.substract(2, 1);

        assert.equal(1, result);
    });

    it('can do multiply', () => {
        let result = calculator.multiply(2, 3);

        assert.equal(6, result);
    });

    it('can do divide', () => {
        let result = calculator.divide(6, 3);

        assert.equal(2, result);
    });

    it('must throw division by zero exception when it does', () => {
        // TODO your code here!
        throw new Error('You should implement this test');
    });

    it('can add other 2 sides operator as well', function () {
        let powOperator = null;

        // TODO populate the pow operator here!

        calculator.add('^', powOperator);

        let result = calculator.run('^', 2, 10);

        assert.equal(1024, result);
    })
});
