interface Client<T>{
    id: T;
    login: string;
}

let client: Client<number >= {id:123, login:'jsdkjsoal'}
let client2: Client<string>= {id:'123', login:'jsdkjsoal'}