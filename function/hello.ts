function calc(price:number, tax?:number):number {
    let tx = 0;
    if (tax){
        tx = tax
    } else {
        tx = 0.08
    }
    return Math.floor(price * (1.0 + tx));
}

function doCalc():void {
    let number1:HTMLInputElement = document.querySelector('#number1');
    let msg:Element = document.querySelector('#msg1');
    // @ts-ignore
    msg.innerHTML = calc(number1.value) + '円';
}