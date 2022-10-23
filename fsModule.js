const { fs, fsProm, path, rl, log } = require('./modules/coreModules.js')

const cmd = rl.createInterface(process.stdin, process.stdout)
cmd.question('Enter file content: ', data => {
    fileOps(data, ifDirExists());
})

const ifDirExists = () => {
    const dirPath = path.join(__dirname, 'files')
    if (!fs.existsSync(dirPath)) {
        fs.mkdir(dirPath, (e) => {
            if (e) console.log(e)
            else {
                console.log(`Dir created`);
            }
        })
    }

    return dirPath

}
const fileOps = async (fileContent, dirPath) => {
    try {
        await fsProm.writeFile(path.join(dirPath, 'sample.txt'), fileContent)

        const data = await fsProm.readFile(path.join(dirPath, 'sample.txt'), { encoding: 'utf-8' })

        console.log(`Data inserted: ${data}`);

        cmd.close();

    } catch (error) {
        console.log(error);
    }
}



cmd.on('close', function () {
    console.log(`Bye Bye`);
    process.exit(0);
});



/*fs.appendFile(path.join(dirPath, 'sample.txt'), badText, { encoding: 'utf-8' }, e => {
    if (e) console.log(e)
    else console.log(`Append succeded`);
})

*/

