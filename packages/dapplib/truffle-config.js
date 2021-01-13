require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle food main rifle payment unique hunt ghost army giggle'; 
let testAccounts = [
"0x636d5c05dfc8660384789db5027051cc8eb7b8a8524b6377d15d7445ee96ad73",
"0x0c14720944d9d78dd51b92f4718f343f2648863533c55ea9bfdd3b99426d3114",
"0xa24f992d0474574947fbb9130b55c234cf03afcc8f65b95fdf8ed58e81532bfe",
"0x0e0b45e076bd26773d1ee12122acde78e0941d422025b23d7159bc22c129edf3",
"0xc0ce21bb04446d75b86263bc6f17660da5c6d72f06b465f8fef32b744142d730",
"0x442b4973c68dc18b44a6f3e4ec599d9c7ad89dd7b54ec8173e0b9f1b76eca104",
"0x9e744c8afd8a39167e67f0330c8a5470734fc4b99f75f0776566fc02fce7d1d6",
"0xea163a7369488152848e321737e114d649ab36eb6bd787a09eb167b42c89d5d1",
"0xb56fd31f532f468cc90ead447bb7282db14999050bea85ed8d463ab1aa82ac87",
"0x9a7353a244f86ec468bb5b38ccfed75584f51042fb6a493ff553106568f63c20"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
