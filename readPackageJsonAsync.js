const { promisify } = require('util');
const readFileAsync = promisify(require('fs').readFile);

async function readPackageJsonAsync() {
    const data = await readFileAsync("package.json", "utf8");
    return data;
}

module.exports = readPackageJsonAsync; 