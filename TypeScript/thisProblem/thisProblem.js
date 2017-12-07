var ThisProblem = (function () {
    function ThisProblem() {
        this._msg = 'hello';
    }
    ThisProblem.prototype.name = function () {
        console.log('Pooo');
    };
    Object.defineProperty(ThisProblem.prototype, "msg", {
        get: function () {
            return this._msg;
        },
        set: function (value) {
            this._msg = value;
        },
        enumerable: true,
        configurable: true
    });
    ThisProblem.prototype.printFunction = function () {
        return function () {
            console.log(this._msg);
        };
    };
    ThisProblem.prototype.printFunction1 = function () {
        var _this = this;
        return function () {
            console.log(_this._msg);
        };
    };
    return ThisProblem;
}());
var ex = new ThisProblem();
ex.name();
