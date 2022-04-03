import Transaction from "./transaction";
import Machine from "./machine";

let machine = new Machine();

machine.transact(new Transaction(1, new Date(), { leni: 0, bbm: 0, ping: 0, manny: 0, isko: 0, leody: 1 }));
machine.transact(new Transaction(1, new Date(), { leni: 0, bbm: 0, ping: 0, manny: 0, isko: 0, leody: 1 }));
machine.transact(new Transaction(1, new Date(), { leni: 0, bbm: 0, ping: 0, manny: 0, isko: 0, leody: 1 }));
machine.transact(new Transaction(1, new Date(), { leni: 0, bbm: 0, ping: 0, manny: 0, isko: 0, leody: 1 }));
console.log('Is machine integrity still strong? ', machine.integrity());