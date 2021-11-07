require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name riot noise hole inner profit army gate'; 
let testAccounts = [
"0x7b16dcc2c77a553ccb53ae20fcc44405c0d1de19f0b54ebde6f2cdbf9bc57952",
"0x12de6571306e1c51b8b493c5170320787905d5f3abe7b4b0b0ee78479b4445e3",
"0x71ff4293a6d5cbbff6f9f9e34ca011eb942d1999519d7cab6a412395ec5b22e0",
"0x80f9d9aa35cb032072482082200f37814a986a1ae8a3b92d63474fe2783af0cf",
"0xcac5f0caa1c7501e7d20d11b38b6ca01c3e9cdb54298e74ad9e55bfa128880c6",
"0xa12dd74c2e6d44a0d9dbaea9344f7431ea4c59e248aa5c5d9b3a0898d130e677",
"0xb0c6f0d20c47a2a735629373449e527c8d7fba2a1095f5867e1a0d7bb3bbf805",
"0xf2ef59d86e8c1db69738e155b577b359df8dabb6339dc42e8552ffe77c35b216",
"0x6f466331d50d474cc81646b3d8cc38339f969fa31e718a9b1a55475005a17d3c",
"0x938bceca8b4f4d2a418c968d550a8f0887ac44accbf4828b518de4c88e358a8f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


