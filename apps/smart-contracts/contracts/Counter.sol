// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Counter {
    string public hello = 'hej';

    mapping(address => int256) count;

    function incrementCounter() public {
        count[msg.sender] += 1;
    }

    function getCount(address user) public view returns (int256) {
        return count[user];
    }

    function currentTimestamp() public view returns (uint256) {
        return block.timestamp;
    }
}
