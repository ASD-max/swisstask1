require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x043cffeadb4d0326e24c76845cbc1bfd5ded742727a10b16180aa906a503dbe4"], //Your private key starting with "0x"
    },
  },
};