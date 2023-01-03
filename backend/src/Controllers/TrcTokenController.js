const TronWeb =  require('tronweb');
const dotenv = require('dotenv');
const { powerOfTen } = require("../Heplers/helper");


dotenv.config();


// get trc20 token  balance
async function getTrc20TokenBalance(req, res) {
    try {
        console.log('check trc20 address balance');
        const contract_address = req.body.contract_address;
        
        if (contract_address) {
            const tronWeb = new TronWeb ({
                fullHost: req.headers.chainlinks,
                headers: {
                    "TRON-PRO-API-KEY": process.env.TRONGRID_API_KEY
                }
            });
            const adminAccount = req.body.admin_address;
            tronWeb.setAddress(adminAccount);
            contract = await tronWeb.contract().at(contract_address);
            const address = req.body.address;
            
            const response = await contract.balanceOf(address).call();
            const decimal = await contract.decimals().call();
            console.log('decimal');
            console.log(decimal);
            const getDecimal = powerOfTen(decimal);
            console.log(getDecimal);
            const balance = (tronWeb.BigNumber(response._hex) / getDecimal);
                
            console.log(balance);
            return {
                status: true,
                message: "Get TRC20 token balance",
                data: balance
            };
        } else {
            return {
                status: false,
                message: "Contract address is required",
                data: {}
            };
        }
        
    } catch(err){
        return {
            status: false,
            message: JSON.stringify(err),
            data: {}
        };
    }
}

module.exports = {
    getTrc20TokenBalance,
}