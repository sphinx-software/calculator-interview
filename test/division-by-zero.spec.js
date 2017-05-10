const chai = require('chai');
const assert = chai.assert;

const Calculator = require('./../src/calculator');

describe('Calculator division by zero test suite', () => {

    let calculator = null;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it('must throw division by zero exception when it does', () => {
        // TODO your code here!
        throw new Error('You should implement this test');
    });

});
