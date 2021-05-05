var Web3 = require('web3');
var w3 = new Web3("https://rpc.cheapeth.org/rpc");

let sleep = require('util').promisify(setTimeout);

async function main() {
    // get chi token contract - same contract as on eth mainnet
    var Chi = await ethers.getContractAt("ChiToken", "0x0000000000004946c0e9f43f4dee607b0ef1fa1c");
    var currentBlock = (await w3.eth.getBlock("latest")).number;
    
    // max number of chi that can be minted per block is 219 (almost 8m gas)
    var chiPerBlock = 219;

    console.log("starting...");

    while(1) {
        console.log("block: " + currentBlock);

        // if new block then mint some chi
        if(currentBlock !== (await w3.eth.getBlock("latest")).number) {
            console.log("minting...");
            // call mint() in chi contract
            const ret = await Chi.mint(chiPerBlock);
            console.log(ret['hash']);

            currentBlock = (await w3.eth.getBlock("latest")).number;
        }

        // zzzZzzzZZZzz
        await sleep(100);
    }
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});