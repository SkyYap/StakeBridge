// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
// https://watcher.guru/news/how-to-bridge-to-mantle-2

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Burnable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract WstethToken is ERC20, ERC20Burnable, Ownable {
    constructor(
        address initialOwner
    ) ERC20("MyToken", "w-steth") Ownable(initialOwner) {}

    function mintandsend(address _recipient, uint256 _amount) public onlyOwner {
        _mint(_recipient, _amount);
    }

    function burnFrom(
        address _account,
        uint256 _amount
    ) public virtual override(ERC20Burnable) onlyOwner {
        super.burnFrom(_account, _amount);
    }
}
