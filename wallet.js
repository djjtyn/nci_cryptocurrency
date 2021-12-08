const WALLET = require("ethereumjs-wallet").default;
const KECCAK256 = require("keccak256");

const GETWALLETDETAILS = async() => {
    console.log("Getting wallet details");
    const myWallet = WALLET.generate();
    console.log("Wallet generated");
    console.log("Wallet public key: " + myWallet.getPublicKeyString());
    console.log("Wallet private key: " + myWallet.getPrivateKeyString())
}

GETWALLETDETAILS();