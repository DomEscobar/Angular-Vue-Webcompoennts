const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/ang10Component/runtime-es5.js',
'./dist/ang10Component/polyfills-es5.js',
'./dist/ang10Component/main-es5.js',
]
await fs.ensureDir('elements')
await concat(files, 'elements/custom-elements.js');
//await fs.copyFile('./dist/ang10Component/styles.css', 'elements/styles.css')
// await fs.copy('./dist/ang10Component/assets/', 'display-text/assets/' )
})()