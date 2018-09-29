var price = 12300;
var tax = 0.08;
var res = price * (1.0 + tax);
var msg = price + '円の税込み金額は、' + res + '円です。';
document.write('<h1>Tax</h1>');
document.write(msg);
