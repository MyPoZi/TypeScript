function total(...item:number[]):number {
    let re:number = 0;
    for (let i:number = 0; i < item.length; i++){
        re += item[i];
    }
    return re;
}

function Total():void {
    let msg:Element = document.querySelector('#msg3');
    // @ts-ignore
    msg.innerHTML = total(1,2,3,4,5);
}