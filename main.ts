class User {
    private _name: string;
    private _age: number;
    skills: string[]

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    greeting() {
        return `hello my name is ${this._name}`
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value > 0) {
            this._age = value;
        }
    }
}

function foo(a: User) {

}

let user = new User("Valya", 23);
// user.age = 23;
// user.name = 'Valya';
foo(user);

interface IUser {
    name: string;
    age: number;

    greeting?(a: string): string;
}

function bar(b: IUser) {

}

bar({name: 'sjakj', age: 192})
bar({
    name: 'ksjnakd', age: 32, greeting: (a: string): string => {
        return 'hello';
    }
})

class X implements IUser {
    OwnXprop1: string;
    OwnXprop2: string[];
    name: string;
    age: number;
}

let x = new X();
let iUsers: IUser[] = [
    x,
    {name: 'swodk', age: 24, greeting: (a: string): string => {return 'hello';}}
]

bar(new X());

// ...................об,єктно-орієнтовне програмування............................
function foobar(user:User){
    user.greeting();
}
let user1= new User('Lala', 32);
foobar(user1)
