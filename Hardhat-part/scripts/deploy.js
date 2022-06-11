const { ethers } = require("hardhat");
//added for NFT contract 
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

//Commented out because whitelist contract has already been deployed in the previous step

// async function main() {
//   /*
//   A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
//   so whitelistContract here is a factory for instances of our Whitelist contract.
//   */
//   const whitelistContract = await ethers.getContractFactory("Whitelist");

//   // here we deploy the contract
//   const deployedWhitelistContract = await whitelistContract.deploy(10);
//   // 10 is the Maximum number of whitelisted addresses allowed
  
//   // Wait for it to finish deploying
//   await deployedWhitelistContract.deployed();

//   // print the address of the deployed contract
//   console.log(
//     "Whitelist Contract Address:",
//     deployedWhitelistContract.address
//   );
// }

//added for deployong NFT contract
async function main() {
  // Address of the whitelist contract that you deployed in the previous module
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  // URL from where we can extract the metadata for a Crypto Dev NFT
  const metadataURL = METADATA_URL;
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so cryptoDevsContract here is a factory for instances of our CryptoDevs contract.
  */
  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

  // deploy the contract
  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
    metadataURL,
    whitelistContract
  );

  // print the address of the deployed contract
  console.log(
    "Crypto Devs Contract Address:",
    deployedCryptoDevsContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  //Goerli Whitelist contract address- 0x39FcC466e5cc90d218D4DFb02F30384388e2Fa5C
  //Goerli Crypto Devs Contract Address: 0x8a13c03Ab37a04D05f1C24c64a3aE617BFd8E706