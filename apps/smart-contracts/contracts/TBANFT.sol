// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol';
import './lens/interfaces/ILensHub.sol';
import './erc6551/ERC6551Registry.sol';
import {DataTypes} from './lens/DataTypes.sol';

interface IMockProfileCreationProxy {
    function proxyCreateProfile(
        DataTypes.CreateProfileData memory vars
    ) external;
}

struct PartialCreateProfileData {
    string handle;
    string imageURI;
    address followModule;
    bytes followModuleInitData;
    string followNFTURI;
}

contract TBANFT is ERC721, Ownable {
    ILensHub public lensHub;
    IERC6551Registry public registry;
    address public accountImplementation;
    address public profileCreationProxyAddress;

    uint256 private tokenCount = 0;

    event Created(
        address accountAddress,
        address ownedBy,
        uint256 tokenId,
        string handle
    );

    constructor(
        address _erc6551Registry,
        address _accountImplementation,
        address _profileCreationProxyAddress,
        address _lensHubAddress
    ) ERC721('Token bound account NFT', 'TBANFT') {
        lensHub = ILensHub(_lensHubAddress);
        registry = IERC6551Registry(_erc6551Registry);
        accountImplementation = _accountImplementation;
        profileCreationProxyAddress = _profileCreationProxyAddress;
    }

    function setProxy(address _profileCreationProxyAddress) public onlyOwner {
        profileCreationProxyAddress = _profileCreationProxyAddress;
    }

    function setLensHub(address _lensHubAddress) public onlyOwner {
        lensHub = ILensHub(_lensHubAddress);
    }

    function setAccountImplementation(
        address _accountImplementation
    ) public onlyOwner {
        accountImplementation = _accountImplementation;
    }

    function setRegistry(address _erc6551Registry) public onlyOwner {
        registry = IERC6551Registry(_erc6551Registry);
    }

    function safeMint(address to) public {
        uint256 tokenId = tokenCount;
        _safeMint(to, tokenId);
        tokenCount++;

        registry.createAccount(
            accountImplementation,
            block.chainid,
            address(this),
            tokenId,
            0,
            ''
        );
    }

    function mintHandle(
        address to,
        PartialCreateProfileData memory vars
    ) public {
        uint256 tokenId = tokenCount;
        _safeMint(to, tokenId);
        tokenCount++;

        address newAccountAddress = registry.createAccount(
            accountImplementation,
            block.chainid,
            address(this),
            tokenId,
            0,
            ''
        );

        DataTypes.CreateProfileData memory dat = DataTypes.CreateProfileData(
            newAccountAddress,
            vars.handle,
            vars.imageURI,
            vars.followModule,
            vars.followModuleInitData,
            vars.followNFTURI
        );

        IMockProfileCreationProxy(profileCreationProxyAddress)
            .proxyCreateProfile(dat);

        emit Created(
            newAccountAddress,
            to,
            tokenId,
            string(abi.encodePacked(vars.handle, '.test'))
        );
    }
}
