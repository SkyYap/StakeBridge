// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
// https://watcher.guru/news/how-to-bridge-to-mantle-2

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Burnable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "hardhat/console.sol";

contract TokenMantleTestnet is ERC20, ERC20Burnable {
    // address immutable bridge = 0xe3dF62Bd6FF1847fe029ef19219976D00BE722E4;
    address immutable bridge = process.env.BRIDGE_WALLET;

    constructor() ERC20("TokenMantleTestnet", "TMT") {}

    modifier onlyBridge() {
        require(
            bridge == msg.sender,
            "TokenMantleTestnet: only bridge can call this method"
        );
        _;
    }

    function mint(
        address _recipient,
        uint256 _amount
    ) public virtual onlyBridge {
        _mint(_recipient, _amount);
        console.log("Tokens minted for %s", _recipient);
    }

    function burnFrom(
        address _account,
        uint256 _amount
    ) public virtual override(ERC20Burnable) onlyBridge {
        super.burnFrom(_account, _amount);
        console.log("Tokens burned successfully from %s", _account);
    }
}
