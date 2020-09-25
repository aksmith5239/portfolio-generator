const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there is an error, reject the promise and send the error to the promises catch() method
            if(err) {
                reject(err);
                //return out of the function here to make sure the promise doesnt accidentally run the resolve method
                return;
            }
            // if all went well, resolve the promise and send the successful data to the .then() method
            resolve({
                ok: true, 
                message: 'File Created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            // if there is an error, reject the promise and send the error to the promises catch() method
            if(err) {
                reject(err);
                //return out of the function here to make sure the promise doesnt accidentally run the resolve method
                return;
            }
            // if all went well, resolve the promise and send the successful data to the .then() method
            resolve({
                ok: true, 
                message: 'Style sheet copied successfully!'
            });
        });
    });
};
module.exports = {
    writeFile: writeFile,
    copyFile: copyFile
  };