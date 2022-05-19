var ethers = require('ethers');  
var crypto = require('crypto');
var fs = require('fs');

var addresses = [];

for (i =0; i<400; i++ ){
    var id = crypto.randomBytes(32).toString('hex');
    var privateKey = "0x"+id;
    var wallet = new ethers.Wallet(privateKey);
    addresses.push(wallet.address);
}

fs.writeFileSync('addresses.csv', addresses.join('\n'));