interface Man {
    name: string;
    age: number;

    print(): string;

}

class Person implements Man{
    public name: string;
    private _age: number;
    public static tag = 'p';

    get age(): number {
        return this._age;
    }

    set age(y: number) {
        this._age = y < 0 ? 0 : y;
    }

    constructor(n: string, y: number) {
        this.name = n;
        this.age = y;
    }

    print(): string {
        let msg: string = '<' + Person.tag + '>' + 'My name is ' + this.name +
            '. I am' + this.age + 'years old.</' + Person.tag + '>';
        return msg;
    }

}

class Student extends Person implements Man {
    public grade: number;

    constructor(n: string, y: number, g: number) {
        super(n, y);
        this.grade = g;
    }

    // @override
    print(): string {
        let msg: string = ' <' + Student.tag + '>私は、' + this.name + '　です。' + this.age +
            '歳です。現在、' + this.grade + '年生です。</' + Student.tag + '>';
        return msg;
    }
}
// このMan型はManをimplementsしたクラスのインスタンスをすべて保管できる。必ずprintメソッドを持っていることになる。
var data: Man[] = [];
data.push(new Person('taro', 37));
data.push(new Student('hanako', 17, 3));
data.push(new Person('sachiko', 45));

function doPerson(): void {
    // @ts-ignore
    let val: string = document.querySelector('#text1').value;
    let arr: string[] = val.split(',');
    let msg: Element = document.querySelector('#msg');
    let obj: Person = null;

    if (arr.length == 2) {
        obj = new Person(arr[0], parseInt(arr[1]));
        Person.tag = 'h1';
    }
    if (arr.length == 3) {
        obj = new Student(arr[0], parseInt(arr[1]), parseInt(arr[2]));
    }
    msg.innerHTML = obj.print();
}

function doData(): void {
    let msg: Element = document.querySelector('#msg1');
    // @ts-ignore
    let val: number = document.querySelector('#text2').value * 1;

    let obj: Man = data[val];
    msg.innerHTML = obj.print()

}