// import {Post} from "./Post";
//
// let post1:Post= new Post()
interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: IGeo
}

interface IGeo {
    lat: string;
    lng: string;
}

interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}
interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: IAddress;
    company: ICompany
}



let user: IUser = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    phone:'jjjjjj',
    website:'hhhhh',
    address: {
        street:'sjsjakisj',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: 92998-3874,
        geo:{
            lat:'-37.3159',
            lng:'gtr'
        }
    },
    company:{
        name:"Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
}
