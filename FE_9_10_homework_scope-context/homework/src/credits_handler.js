function userCard() {
    let balance = 100;
	console.log(balance);
    let transactionLimit = 100;
	console.log(transactionLimit)
    let historyLogs = [];
//    let time = new Date().toLocaleString('en-GB');


//    function historyLog(operationType, credits, operationTime) {
//        historyLogs.push({
//            operationType: operationType,
//            credits: credits,
//            operationTime: operationTime
//        })
//    }

    function putCredits(value) {
        balance += value;
	    }
    function takeCredits(value) {
        if (value < transactionLimit) {
            balance =- value;
        } else {
            console.log('The value is bigger than your limit')
        }
    }
    function setTransactionLimit(value) {
        transactionLimit += value;
    }
	setTransactionLimit(40000);
	takeCredits(5000);
	console.log(transactionLimit);
	console.log(balance);
}
console.log(userCard());









