const fs = require('fs');
const JSZip = require('jszip');

const { css } = require('./src/input/css');
const { html } = require('./src/input/html');

try {
    fs.writeFileSync('./src/output/index.html', html)
    //file written successfully
} catch (err) {
    console.error(err)
}

try {
    fs.writeFileSync('./src/output/style.css', css)
    //file written successfully
} catch (err) {
    console.error(err)
}

const zip = new JSZip();

try {
    const htmldata = fs.readFileSync('./src/output/index.html');
    const cssdata = fs.readFileSync('./src/output/style.css');

    zip.file("index.html", htmldata);
    zip.file("index.html", cssdata);

    zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
        .pipe(fs.createWriteStream(`./src/output/output.zip`))
        .on('finish', function () {
            console.log("output.zip written.");
        });

} catch (err) {
    console.error(err)
}