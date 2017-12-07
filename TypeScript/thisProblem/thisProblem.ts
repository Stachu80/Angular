class ThisProblem  implements  Dog{

    name():void {
      console.log( 'Pooo');
    }


    get msg(): string {
        return this._msg;
    }

    set msg(value: string) {
        this._msg = value;
    }
    private _msg: string = 'hello';

    printFunction() {
        return function () {
            console.log(this._msg)
        }
    }
    printFunction1() {
        return ()=> {
            console.log(this._msg)
        }
    }
}

interface Dog{
     name():void;
}

var ex = new ThisProblem();

ex.name();

