const path = require('path');
console.log("Dictory Name::",__dirname);
console.log(path.basename(__dirname+"/library.js"));
console.log("Full Path::",path.resolve(__dirname, 'library.js'));