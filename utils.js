exports.qry_insert = function () {
    const d = {
        No: '600',
        name: 'JJC',
        position: 'A',
        club: 'C',
        country: 'E',
        age: '0',
        birthplace: 'B'
    }
    return "" + d;
}

exports.outputResult = function (r) {
    return "Result: " + r;
};