const WALLET = require("ethereumjs-wallet").default;
const KECCAK256 = require("keccak256");

const GETWALLETDETAILS = async() => {
    console.log("Getting wallet details");
    //Generate public/private keys
    const myWallet = WALLET.generate();
    console.log("Wallet generated");
    console.log("Wallet public key: " + myWallet.getPublicKeyString());
    console.log("Wallet private key: " + myWallet.getPrivateKeyString())

    const pubKey = myWallet.getPublicKey();
    const hashedPublicKey = KECCAK256(pubKey).toString('hex')
    console.log("Hashed public key: 0X" + pubKey.toString('hex'));

    let ethAddress = hashedPublicKey.substring(24);
    console.log("Eth address is 0x" + ethAddress);
}

GETWALLETDETAILS();