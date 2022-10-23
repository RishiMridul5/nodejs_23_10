const { constants } = require('buffer');
const { dir } = require('console');
const { create } = require('domain');
const fs = require('fs')
const fsProm = require('fs').promises
const http = require('http')
const path = require('path')
const log = console.log


const dirPath = path.join(__dirname, 'files')
if (!fs.existsSync(dirPath)) {
    fs.mkdir(dirPath, (e) => {
        if (e) console.log(e)
        else {
            console.log(`Dir created`);
        }
    })
}
else {
    console.log(`Directory already exits`);
}

const performSomething = async () => {
    try {
        let fileContent = `Hell world...`
        fsProm.writeFile(path.join(dirPath, 'sample.txt'), fileContent)
        fsProm.readFile(path.join(dirPath, 'sample.txt'))


    } catch (error) {
        console.log(error);
    }

}

performSomething()

