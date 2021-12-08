const WALLET = require("ethereumjs-wallet").default;
const KECCAK256 = require("keccak256");

const getWalletDetails = async() => {
    console.log("Getting wallet details");
    //Generate public/private keys
    const myWallet = WALLET.generate();
    console.log("Wallet generated");
    console.log(`Wallet public key: ${myWallet.getPublicKeyString()}`);
    console.log(`Wallet private key: ${myWallet.getPrivateKeyString()}`)


    const pubKey = myWallet.getPublicKey();
    const hashedPublicKey = KECCAK256(pubKey).toString('hex')
    console.log(`Hashed public key: 0X${pubKey.toString('hex')}`);

    let ethAddress = hashedPublicKey.substring(24);
    console.log(`Eth address is 0x${ethAddress}`);
}

getWalletDetails();

const bip39 = require('bip39');
const { hdkey } = require('ethereumjs-wallet');

const getHDWalletDetails = async() => {
    console.log("Getting HD wallet details...");
    // Takes a seed phrase
    const mnemonic = "Secret seed phrase goes here";
    //Converts the seed phrase into entropy
    let seed = await bip39.mnemonicToSeed(mnemonic);
    let hdWallet = hdkey.fromMasterSeed(seed);

    //Path to create a deterministic account
    const path = "m/44'/60'0'/0/0";
    //Create the wallet using the path and seed phrase
    const wallet = hdWallet.derivePath(path).getWallet();
    console.log(`Wallet is ${wallet}`);

}

getHDWalletDetails();