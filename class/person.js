var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(n, y) {
        this.name = n;
        this.age = y;
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (y) {
            this._age = y < 0 ? 0 : y;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.print = function () {
        var msg = '<' + Person.tag + '>' + 'My name is ' + this.name +
            '. I am' + this.age + 'years old.</' + Person.tag + '>';
        return msg;
    };
    Person.tag = 'p';
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(n, y, g) {
        var _this = _super.call(this, n, y) || this;
        _this.grade = g;
        return _this;
    }
    // @override
    Student.prototype.print = function () {
        var msg = ' <' + Student.tag + '>私は、' + this.name + '　です。' + this.age +
            '歳です。現在、' + this.grade + '年生です。</' + Student.tag + '>';
        return msg;
    };
    return Student;
}(Person));
// このMan型はManをimplementsしたクラスのインスタンスをすべて保管できる。必ずprintメソッドを持っていることになる。
var data = [];
data.push(new Person('taro', 37));
data.push(new Student('hanako', 17, 3));
data.push(new Person('sachiko', 45));
function doPerson() {
    // @ts-ignore
    var val = document.querySelector('#text1').value;
    var arr = val.split(',');
    var msg = document.querySelector('#msg');
    var obj = null;
    if (arr.length == 2) {
        obj = new Person(arr[0], parseInt(arr[1]));
        Person.tag = 'h1';
    }
    if (arr.length == 3) {
        obj = new Student(arr[0], parseInt(arr[1]), parseInt(arr[2]));
    }
    msg.innerHTML = obj.print();
}
function doData() {
    var msg = document.querySelector('#msg1');
    // @ts-ignore
    var val = document.querySelector('#text2').value * 1;
    var obj = data[val];
    msg.innerHTML = obj.print();
}
