import SHA256 from 'crypto-js/sha256';
import Candidates from './candidates';

class Transaction {

    index:          number;
    timestamp:      Date;
    data:           Candidates;
    hash:           string;
    previous_hash:  string;

    constructor(index: number, timestamp: Date, data: Candidates, previous_hash='') {

        this.index          = index;
        this.timestamp      = timestamp;
        this.data           = data;
        this.previous_hash  = previous_hash;
        this.hash           = this.calculate_hash();
        
    }

    calculate_hash() {
        return SHA256(this.index + this.previous_hash + this.timestamp + JSON.stringify(this.data)).toString();
    }

}

export default Transaction;