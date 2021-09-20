class User {
    name: string;
    age: number;
    skills: string[]

//
// function foo(a: {name:string, age:number, skills:string[]}){
// }
// foo({name:'Katya', age:20, skills:['iwjsiqhsiaj','hxushauhszuq'] });

    greeting() {
        return `hello my name is ${this.name}`
    }
}

function foo(a: User) {

}

let user = new User();
user.age = 23;
user.name = 'Valya';
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

bar(new X())

// ...................об,єктно-орієнтовне програмування............................
function foobar(user:User){
    user.greeting();
}
let user1= new User();
foobar(user1)
