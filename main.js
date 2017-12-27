module.exports = function (expression) {
    if (expression.length === 0) throw new ReferenceError(`Expressions may only include ${allowed.join(", ")}`);
    let allowed = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "(", ")", "+", "-", "/", "*"],
        status = true;
    for (i = 0; i < expression.length; i++) {
        if (!allowed.includes(expression.toString().charAt(i))) {
            status = false;
        }
    }
    if (status) return eval(expression);
    else if (!status) throw new ReferenceError(`Expressions may only include ${allowed.join(", ")}`);
}