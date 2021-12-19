//Read the accounts.txt file
let fs = require("fs");  //file system library (npm install fs)
let bigNumber = require("big-number")

let method = require('./method.js')
let contract = require('./contract.js');
const BigNumber = require("big-number/big-number");
const { Console } = require("console");

require('dotenv').config();
infuraToken = process.env.INFURA_TOKEN;
contractAddress =  process.env.CONTRACT_ADDRESS;
ownerAddress = process.env.OWNER_ADDRESS;
privateKey = Buffer.from(process.env.SUPER_SECRET_PRIVATE_KEY, 'hex')

const distribute = async() => {
    // Get the token symbol
    let tokenSymbol = await contract.getSymbol();

    // read the accounts.txt file and put addresses into array
    let distributionAddresses = fs.readFileSync('accounts.txt', 'utf8').split('\r\n');
    
    // get the balance of the owner
    let ownerBalance = await contract.getBalanceOfOwner(ownerAddress);
    let bigNumberOwnerBalance = new BigNumber(ownerBalance);
    console.log(`Ramaining tokens/owner balance is ${bigNumberOwnerBalance}.`)

    let fivePerCent = bigNumberOwnerBalance.div(20);
    //let bigNumberFivePerCent = new BigNumber(fivePerCent);
    console.log(`5% of ${ownerBalance} is ${fivePerCent}.`);
    console.log(`There are ${distributionAddresses.length} addresses to send tokens to`)

    // Divide the 5% by the amount of addresses to get distroAmount
    let distributionAmount = fivePerCent.div(distributionAddresses.length);
    console.log(`Each address will receive ${distributionAmount}.`);

    // loop through the addresses in distributionAddresses array
    try{
        for(i = 0;i<distributionAddresses.length;i++) {
            console.log(`Transaction ${i+1} of ${distributionAddresses.length}: Distributing ${distributionAmount} ${tokenSymbol} tokens to address ${distributionAddresses[i]}`)
            // Transfer token amount
            let returnValue = await method.transferToken(distributionAddresses[i], distributionAmount);
        }
    } catch (err) {
        console.log(err);
        console.log("There was an issue distributing the transactions");
    }
}

distribute();