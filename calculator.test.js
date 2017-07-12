const calculator = require('./calculator');
const assert = require('assert');

before(() => {
    console.log("RUNNING");
})

after(() => {
    console.log("END RUNNING");
})

describe('Calculator', () => {
    describe('#add', () => {
        it("should return 3 when 1 + 2", () => {
            const r = new calculator().add(1, 2);
            assert.equal(3, r);
        })
    });

    describe('#subtract', () => {
        it("should return 8 when 10 - 2", () => {
            const r = new calculator().subtract(10, 2);
            assert.equal(8, r);
        })
    });

})