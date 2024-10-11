async function main() {
    const AgriVerify = await ethers.getContractFactory("AgriVerify");
    const agriVerify = await AgriVerify.deploy();
    
    console.log("AgriVerify deployed to:", agriVerify.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
