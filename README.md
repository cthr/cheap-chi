## cheap-chi
an automated minter for the [chi](https://blog.1inch.io/1inch-introduces-chi-gastoken-d0bd5bb0f92b?gi=375644d358b0) gas token on the cheapeth blockchain.

### install

```bash
npm install
```

### compile

```bash
npm run compile
```

### use

first you will need to create a file named `.chi` in your home directory, this file should contain a private key to an account loaded with an amount of cheapeth.
```bash
npm run mint
```

### configure

configure amount of chi minted per block inside `scripts/minter.js`. the maximum amount of chi that can be currently minted is 219, this takes up almost 100% of the cheapeth block gas limit.
```javascript
var chiPerBlock = 219;
```

configure the gas price used inside `hardhat.config.js`, the current default is 1 gwei (1000000000 wei).
```javascript
cheapeth: {
  url: "https://rpc.cheapeth.org/rpc",
  accounts: [chiKey],
  gasPrice: 1000000000
}
```  