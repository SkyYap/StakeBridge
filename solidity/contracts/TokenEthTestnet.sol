pragma solidity ^0.8.0;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract TokenEthTestnet is ERC20 {
    constructor(uint256 _initialSupply) ERC20("TokenEthTestnet", "TET") {
        _mint(msg.sender, _initialSupply * (10 ** uint256(10)));
        console.log("Tokens are successfully minted %s", _initialSupply);
        console.log("Contract deployed! Tokens sent to %s", msg.sender);
    }
}
