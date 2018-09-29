function calc(price, tax) {
    var tx = 0;
    if (tax) {
        tx = tax;
    }
    else {
        tx = 0.08;
    }
    return Math.floor(price * (1.0 + tx));
}
function doCalc() {
    var number1 = document.querySelector('#number1');
    var msg = document.querySelector('#msg1');
    // @ts-ignore
    msg.innerHTML = calc(number1.value) + '円';
}
