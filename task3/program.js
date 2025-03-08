const fs = require('fs');

let txtIn = fs.readFileSync('./hello.txt',).toString();

console.log(txtIn);

fs.writeFileSync('./welcome.txt', 'hello node');
