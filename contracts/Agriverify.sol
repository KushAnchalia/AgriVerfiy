// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract AgriVerify  {
    struct Crop {
        string cropName;
        string farmDetails;
        bool certified;
    }

    mapping(address => Crop) public farmers;

    function certifyCrop(string memory _cropName, string memory _farmDetails) public {
        farmers[msg.sender] = Crop(_cropName, _farmDetails, true);
    }

    function getCertificationStatus(address farmer) public view returns (string memory, string memory, bool) {
        Crop memory crop = farmers[farmer];
        return (crop.cropName, crop.farmDetails, crop.certified);
    }
}
