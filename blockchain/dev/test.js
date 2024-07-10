const Blockchain = require('./blockchain')
const bitcoin = new Blockchain();

// the entire blockchain that we copied and pasted

const bc1 = {
    "chain": [
    {
    "index": 1,
    "timestamp": 1720551363401,
    "transactions": [],
    "nonce": 100,
    "hash": "0",
    "previousBlockHash": "0"
    },
    {
    "index": 2,
    "timestamp": 1720551388773,
    "transactions": [],
    "nonce": 18140,
    "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    "previousBlockHash": "0"
    },
    {
    "index": 3,
    "timestamp": 1720551487509,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "e3d66c803e2411efb260370764a2df16",
    "transactionId": "f2f9d9e03e2411efb260370764a2df16"
    },
    {
    "amount": 100,
    "sender": "namgungseok",
    "recipient": "song",
    "transactionId": "0cfeec403e2511efb260370764a2df16"
    },
    {
    "amount": 498300,
    "sender": "akjhfkanamgungseok",
    "recipient": "asdfasong",
    "transactionId": "1748be103e2511efb260370764a2df16"
    },
    {
    "amount": 99999300,
    "sender": "gegganamgungseok",
    "recipient": "iiowiewfasong",
    "transactionId": "22da79303e2511efb260370764a2df16"
    }
    ],
    "nonce": 21186,
    "hash": "000034184303613a2c98619bda6a61b45f0a6b07fea34623b73dcf0038d11fab",
    "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    }
    ],
    "pendingTransactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "e3d66c803e2411efb260370764a2df16",
    "transactionId": "2dd090903e2511efb260370764a2df16"
    },
    {
    "amount": 80,
    "sender": "sfagegganamgungseok",
    "recipient": "wrwrwiiowiewfasong",
    "transactionId": "6980b7503e2511efb260370764a2df16"
    },
    {
    "amount": 2820,
    "sender": "oooonamgungseok",
    "recipient": "qqqqqqwiewfasong",
    "transactionId": "72fe11603e2511efb260370764a2df16"
    },
    {
    "amount": 111,
    "sender": "jklfslakfgungseok",
    "recipient": "sfsasfiewfasong",
    "transactionId": "7efb86a03e2511efb260370764a2df16"
    }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
    };
    



console.log('VALID:' , bitcoin.chainIsValid(bc1.chain));