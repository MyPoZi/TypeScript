function total() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    var re = 0;
    for (var i = 0; i < item.length; i++) {
        re += item[i];
    }
    return re;
}
function Total() {
    var msg = document.querySelector('#msg3');
    // @ts-ignore
    msg.innerHTML = total(1, 2, 3, 4, 5);
}
