function conver(itme: number): string;
function conver(itme: string): string;
function conver(itme: boolean): string;

// @ts-ignore
function convert(item: any): string {
    switch (typeof item) {
        case 'number':
            return Math.floor(item).toString();
        case 'string':
            return item.toUpperCase();
        case 'boolean':
            return item ? 'yes' : 'no'
    }
}

function doClick():void {
    let val:number = 11;
    let msg:Element = document.querySelector('#msg2');
    msg.innerHTML = convert(val)
}

