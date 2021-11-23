//Read the accounts.txt file
let fs = require("fs");  //file system library (npm install fs)
let bigNumber = require("big-number")

let method = require('./method.js')
let contract = require('./contract.js');
const BigNumber = require("big-number/big-number");

require('dotenv').config();
infuraToken = process.env.INFURA_TOKEN;
contractAddress =  process.env.CONTRACT_ADDRESS;
ownerAddress = process.env.OWNER_ADDRESS;
privateKey = Buffer.from(process.env.SUPER_SECRET_PRIVATE_KEY, 'hex')

const distribute = async() => {
    // read the accounts.txt file
    let distributionAddresses = fs.readFileSync('accounts.txt', 'utf8').split('\r\n');

    // get the balance of the owner
    let ownerBalance = await contract.getBalanceOfOwner(ownerAddress);
    let bigNumber = new BigNumber(ownerBalance);
    console.log(`Owner balance is ${bigNumber}`);

    // Get 5% of owner balance
    let fivePerCent = bigNumber.div(20);
    console.log(`5% of owner blance is ${fivePerCent}`);

    // Divide the 5% by the amount of addresses to get distroAmount
    let distributionAmount = fivePerCent.div(distributionAddresses.length);
    console.log(`Distribution amount per address is ${distributionAmount}`)

    // Get the token symbol
    let tokenSymbol = await contract.getSymbol();

    // loop through the addresses in distributionAddresses array
    for(i = 0;i<distributionAddresses.length;i++) {
        console.log(`About to distribute ${distributionAmount}  ${tokenSymbol} to address ${distributionAddresses[i]}`)
        // Transfer token amount
        let returnValue = await method.transferToken(distributionAddresses[i], distributionAmount);
    }
}

distribute();

//builtinModules.export = {distribute}

//put the N accounts into an array