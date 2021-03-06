var result =
{
    "txid": "8d787db12e04630a10191772f068fae43d30fbb93e6198e7efa636ce03f16222",
    "hash": "7a0a667bf96d65a11eeab8ec17e232c5afdbe724b6e5e60697790bde3037c2c8",
    "version": 2,
    "size": 248,
    "vsize": 166,
    "weight": 662,
    "locktime": 597359,
    "vin": [
        {
            "txid": "2a1dda8fb17cdcefb26a377492aff6076bd03a93f742d595df1d0ff4951a4305",
            "vout": 0,
            "scriptSig": {
                "asm": "00140d9cad5ccd91bf6ed56ec6bcb7762ec52ecb7b8d",
                "hex": "1600140d9cad5ccd91bf6ed56ec6bcb7762ec52ecb7b8d"
            },
            "txinwitness": [
                "3045022100f2900ede33aab8838464cfb127a962960c29cd97ba62e830c69a38621514d2980220706aa5c28d6e1a134f74b99e6280b357dc1f20ae00f4fcca12ab4ccfab5ceac701",
                "033b18a261c30edaf859dc523700f3a6085a413ab51b4f63ca84d26073e8e7c709"
            ],
            "sequence": 4294967294
        }
    ],
    "vout": [
        {
            "value": 0.16957303,
            "n": 0,
            "scriptPubKey": {
                "asm": "OP_HASH160 d45c146bdb6ad9c61f3300341e2524e8e64394ac OP_EQUAL",
                "hex": "a914d45c146bdb6ad9c61f3300341e2524e8e64394ac87",
                "reqSigs": 1,
                "type": "scripthash",
                "addresses": [
                    "3M3sV2VBqPXzZHkbdBXo9dMpEw7xxHCFow"
                ]
            }
        },
        {
            "value": 0.07866618,
            "n": 1,
            "scriptPubKey": {
                "asm": "OP_HASH160 69f37417a9fb77744ec258ac2ff22e99266ac354 OP_EQUAL",
                "hex": "a91469f37417a9fb77744ec258ac2ff22e99266ac35487",
                "reqSigs": 1,
                "type": "scripthash",
                "addresses": [
                    "3BMEX8XxUxyEKfRDAJmSMhyd3Y7QWh7PQV"
                ]
            }
        }
    ],
    "hex": "0200000000010105431a95f40f1ddf95d542f7933ad06b07f6af9274376ab2efdc7cb18fda1d2a00000000171600140d9cad5ccd91bf6ed56ec6bcb7762ec52ecb7b8dfeffffff0277bf02010000000017a914d45c146bdb6ad9c61f3300341e2524e8e64394ac87fa0878000000000017a91469f37417a9fb77744ec258ac2ff22e99266ac3548702483045022100f2900ede33aab8838464cfb127a962960c29cd97ba62e830c69a38621514d2980220706aa5c28d6e1a134f74b99e6280b357dc1f20ae00f4fcca12ab4ccfab5ceac70121033b18a261c30edaf859dc523700f3a6085a413ab51b4f63ca84d26073e8e7c7096f1d0900",
    "blockhash": "00000000000000000002726a175241b0f200c561daf30c668d8652cf3b949343",
    "confirmations": 130546,
    "time": 1569914555,
    "blocktime": 1569914555
}

/*
    Coin          string
    Hash          string
    To            string
    Confirmations uint64
    Value         string
    Blocktime     uint64
    Index          int64
*/
function GetInfoByHash(result) {
    const pushs = []
    var i = 0
    for (let vout in result["vout"]) {
        var push = new Object()
        push["Coin"] = "BTC"
        push["Blocktime"] = JSON.stringify(result["blocktime"])
        push["Index"] = i
        push["Hash"] = JSON.stringify(result["hash"])
        push["Confirmations"] = JSON.stringify(result["confirmations"])
        push["TO"] = result["vout"][vout]["scriptPubKey"]["addresses"][0]
        push["Value"] = result["vout"][vout]["value"]
        pushs.push(push)
        i = i + 1
    }
    return pushs
}
console.log("Raw Transaction Json:   ")
console.log(result)
var btc_tx_info = GetInfoByHash(result)
console.log("Transactions:   ")
console.log(btc_tx_info)

