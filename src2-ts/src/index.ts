const myName = "your name";

const hello = (userName: string): string => `hello, ${userName}`;

console.log(hello);

let arr: string[]; // only accepts strings
let arr2: (string | number)[]; // accepts strings or numbers
let arr3: [string, number, string]; // ['cat', 7, 'dog']

arr3 = ['cat', 7, 'dog'];
enum Weekend {
    Friday,
    Saturday,
    Sunday
};

let  tod:Weekend = Weekend.Sunday;
interface Student {
    name: string;
    age: number
    readonly enrolled: boolean
};

let myself: Student= {
    name: 'Suresh',
    age: 18,
    enrolled: false
};
