/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

const INFURA_URL='https://sepolia.infura.io/v3/8f1731cd93db4080975a98e49e8df802';

module.exports = {
  solidity: "0.8.18",
  networks:{
    sepolia:{
      url:INFURA_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};
