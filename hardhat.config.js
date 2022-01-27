module.exports = {
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    mumbai: {
      url: "", //Alchemy key here
      accounts: [
        "",
        ""
      ] //Two private keys here
    },
  }
  };