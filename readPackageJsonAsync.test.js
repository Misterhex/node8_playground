const readPackageJsonAsync = require('./readPackageJsonAsync.js');
const assert = require('chai').assert;

describe('readPackageJsonAsync', () => {
    it("should read some text", async () => {
        const data = await readPackageJsonAsync();
        assert.isTrue(data.length > 0);
    });
});