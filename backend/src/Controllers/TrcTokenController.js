const TronWeb =  require('tronweb');
const dotenv = require('dotenv');
const { powerOfTen } = require("../Heplers/helper");


dotenv.config();

// create trx address account
async function createAccount(req, res) {
    try {
        console.log('create trc20 address start');
        const tronWeb = new TronWeb ({
            fullHost: req.headers.chainlinks,
            headers: {
                "TRON-PRO-API-KEY": process.env.TRONGRID_API_KEY
            }
        });
        const response = await tronWeb.createAccount();
        
        if (response) {
            res.json({
                status: true,
                message: "TRC Wallet created successfully",
                data: {
                    address:response.address.base58,
                    privateKey:response.privateKey,
                    publicKey:response.publicKey
                }
            });
        } else {
            console.log(response);
            res.json({
                status: false,
                message: "TRC Wallet create failed",
                data: {}
            });
        }
        
    } catch(err){
        res.json({
            status: false,
            message: err.message,
            data: {}
        });
    }
}

// get tron balance
async function getTronBalance(req, res) {
    try {
        const type = req.body.type;
        let netBalance = 0;
        let tokenBalance = 0;
        let message = "Balance get successfully";
        let success = true;
        
        if (type == 1) {
            let a = await getTrxBalance(req, res);
            if (a.status == true) {
                netBalance = a.data;
            } else {
                message = a.message;
                success = a.status;
            }
        } else if(type == 2) {
            let b = await getTrc20TokenBalance(req, res);
            console.log(b);
            if (b.status == true) {
                tokenBalance = b.data;
            } else {
                message = b.message;
                success = b.status;
            }
        } else {
            let a = await getTrxBalance(req, res);
            if (a.status == true) {
                netBalance = a.data;
            } else {
                message = a.message;
                success = a.status;
            }
            let b = await getTrc20TokenBalance(req, res);
            if (b.status == true) {
                tokenBalance = b.data;
            } else {
                message = b.message;
                success = b.status;
            }
        }

        const data = {
            net_balance : netBalance,
            token_balance : tokenBalance
        }
        res.send({
            status: success,
            message: message,
            data: data
        });
    } catch(err){
        console.log(err);
        res.json({
            status: false,
            message: err.message,
            data: {}
        });
    }
}

// get TRX Balance
async function getTrxBalance(req, res) {
    try {
        console.log('check trx address balance');
        const tronWeb = new TronWeb ({
            fullHost: req.headers.chainlinks,
            headers: {
                "TRON-PRO-API-KEY": process.env.TRONGRID_API_KEY
            }
        });
        const address = req.body.address;
        let balance = await tronWeb.trx.getBalance(address);
        balance = parseFloat(tronWeb.fromSun(balance));
              
         console.log(balance);
        return {
            status: true,
            message: "Get TRX balance",
            data: balance
        };
    } catch(err){
        console.log('getTrxBalance');
        console.log(err);
        return {
            status: false,
            message: err.message,
            data: {}
        };
    }
}

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
        console.log('getTrc20TokenBalance');
        console.log(err);
        return {
            status: false,
            message: 'err.message',
            data: {}
        };
    }
}

module.exports = {
    createAccount,
    getTronBalance,
    getTrxBalance,
    getTrc20TokenBalance
}