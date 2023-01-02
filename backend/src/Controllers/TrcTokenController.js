const TronWeb =  require('tronweb');
const dotenv = require('dotenv');

dotenv.config();

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
        console.log(response);
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

async function createAccount2(req, res) {
    try {
        const tronWeb = new TronWeb ({
            fullHost: req.host,
            headers: {
                "TRON-PRO-API-KEY": process.env.TRONGRID_API_KEY
            }
        });
        const response = await tronWeb.createAccount();
        console.log(response);
        res.json({
            status: true,
            message: "TRC Wallet created successfully",
            data: 'wallet'
        });
    } catch(err){
        res.json({
            status: false,
            message: err.message,
            data: {}
        });
    }
}

module.exports = {
    createAccount,
    createAccount2
}