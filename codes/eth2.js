import { Wallet } from 'ethers';  
import { randomBytes } from 'crypto';

function gen(){
    var id = randomBytes(32).toString('hex');
    var privateKey = "0x"+id;
    console.log("SAVE BUT DO NOT SHARE THIS:", privateKey);
    var wallet = new Wallet(privateKey);
    console.log("Address: " + wallet.address);
}

for (var i = 0; i < 10; i++) {
    gen();
}