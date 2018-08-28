function findType(a) {
    return typeof a;
}

function forEach(arr, fn) {

    for (let i = 0; i < arr.length; i++) {
        fn(arr[i]);
    }
}

function map(arr, fn) {
    let newArray = [];
    forEach(arr, function(el) {
        newArray.push(fn(el));
    });
    return newArray;
}

function filter(arr, fn) {
    let newArray = [];
    forEach(arr, function(el) {
        if (fn(el)) {
            newArray.push(el);
        }
    });
    return newArray;
}