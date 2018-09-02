function userCard(key) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let time = new Date().toLocaleString('en-GB');


    function historyLog(operationType, credits, operationTime) {
        historyLogs.push({
            operationType: operationType,
            credits: credits,
            operationTime: operationTime
        })
    }

    function putCredits(value) {
       balance += value;
    }

    function takeCredits(value) {
        if (value < transactionLimit) {
            balance -= value;
        } else {
            console.log('The value is bigger than your limit')
        }
    }
    function setTransactionLimit(value) {
        transactionLimit += value;
    }
}


