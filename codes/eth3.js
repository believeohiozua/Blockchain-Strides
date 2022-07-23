import { ethers } from 'ethers';
import Web3 from 'web3';
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

for (var i = 0; i < 10; i++) {
    const randomMnemonic = ethers.Wallet.createRandom().mnemonic;
    const wallet = ethers.Wallet.fromMnemonic(randomMnemonic.phrase);
    console.log(
        "\nwallet : ",wallet._signingKey(), 
        );
}