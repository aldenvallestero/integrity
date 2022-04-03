import Transaction from "./transaction";

class Machine {

    chain: any[];

    constructor() {
        this.chain = [this.genesis()];
    }

    genesis() {
        return new Transaction(0, new Date(), { leni: 0, bbm: 0, ping: 0, manny: 0, isko: 0, leody: 0 }, '0');
    }

    transact(new_transaction: any) {
        new_transaction.previous_hash   = this.get_latest_transaction().hash;
        let latest_transaction_data     = this.get_latest_transaction().data;
        
        // increase vote
        new_transaction.data.leni   = new_transaction.data.leni     + latest_transaction_data.leni;
        new_transaction.data.bbm    = new_transaction.data.bbm      + latest_transaction_data.bbm;
        new_transaction.data.ping   = new_transaction.data.ping     + latest_transaction_data.ping;
        new_transaction.data.manny  = new_transaction.data.manny    + latest_transaction_data.manny;
        new_transaction.data.isko   = new_transaction.data.isko     + latest_transaction_data.isko;
        new_transaction.data.leody  = new_transaction.data.leody    + latest_transaction_data.leody;
        
        new_transaction.hash        = new_transaction.calculate_hash();
        this.chain.push(new_transaction);
    }
    
    integrity() {

        // skip genesis transaction
        for (let i = 1; i < this.chain.length; i++) {
            const current_transaction = this.chain[i];
            const previous_transaction = this.chain[i-1];

            if (current_transaction.hash !== current_transaction.calculate_hash()) {
                return false;
            }

            // check the previous property
            if (current_transaction.previous_hash !== previous_transaction.hash) {
                return false;
            }
        }

        return true;
    }

    get_latest_transaction() {
        return this.chain[this.chain.length - 1];
    }

}

export default Machine;