Query btc transaction details, now you need to parse the data.
Result (if verbose is set to true):
{                                    (json object)
  "in_active_chain" : true|false,    (boolean) Whether specified block is in the active chain or not (only present with explicit "blockhash" argument)
  "hex" : "hex",                     (string) The serialized, hex-encoded data for 'txid'
  "txid" : "hex",                    (string) The transaction id (same as provided)
  "hash" : "hex",                    (string) The transaction hash (differs from txid for witness transactions)
  "size" : n,                        (numeric) The serialized transaction size
  "vsize" : n,                       (numeric) The virtual transaction size (differs from size for witness transactions)
  "weight" : n,                      (numeric) The transaction's weight (between vsize*4-3 and vsize*4)
  "version" : n,                     (numeric) The version
  "locktime" : xxx,                  (numeric) The lock time
  "vin" : [                          (json array)
    {                                (json object)
      "txid" : "hex",                (string) The transaction id
      "vout" : n,                    (numeric) The output number
      "scriptSig" : {                (json object) The script
        "asm" : "str",               (string) asm
        "hex" : "hex"                (string) hex
      },
      "sequence" : n,                (numeric) The script sequence number
      "txinwitness" : [              (json array)
        "hex",                       (string) hex-encoded witness data (if any)
        ...
      ]
    },
    ...
  ],
  "vout" : [                         (json array)
    {                                (json object)
      "value" : n,                   (numeric) The value in BTC
      "n" : n,                       (numeric) index
      "scriptPubKey" : {             (json object)
        "asm" : "str",               (string) the asm
        "hex" : "str",               (string) the hex
        "reqSigs" : n,               (numeric) The required sigs
        "type" : "str",              (string) The type, eg 'pubkeyhash'
        "addresses" : [              (json array)
          "str",                     (string) bitcoin address
          ...
        ]
      }
    },
    ...
  ],
  "blockhash" : "hex",               (string) the block hash
  "confirmations" : n,               (numeric) The confirmations
  "blocktime" : xxx,                 (numeric) The block time expressed in UNIX epoch time
  "time" : n                         (numeric) Same as "blocktime"
}


Example: 
https://www.blockchain.com/btc/tx/8d787db12e04630a10191772f068fae43d30fbb93e6198e7efa636ce03f16222?show_adv=true

type Push struct {
	Coin          string
	Hash          string
	To            string
	Confirmations uint64
	Value         string
	Blocktime     uint64
	Index          int64
}

func GetInfoByHash(result map[string]interface{}) (pushs []*Push, error) {
	// todo list
	return pushs
}

Run:

node parse_btc_raw_tx.js

output:

Transactions:   
[
  {
    Coin: 'BTC',
    Blocktime: '1569914555',
    Index: 0,
    Hash: '"7a0a667bf96d65a11eeab8ec17e232c5afdbe724b6e5e60697790bde3037c2c8"',
    Confirmations: '130546',
    TO: '3M3sV2VBqPXzZHkbdBXo9dMpEw7xxHCFow',
    Value: 0.16957303
  },
  {
    Coin: 'BTC',
    Blocktime: '1569914555',
    Index: 1,
    Hash: '"7a0a667bf96d65a11eeab8ec17e232c5afdbe724b6e5e60697790bde3037c2c8"',
    Confirmations: '130546',
    TO: '3BMEX8XxUxyEKfRDAJmSMhyd3Y7QWh7PQV',
    Value: 0.07866618
  }
]
