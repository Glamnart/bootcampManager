export type Coordinate = [number, number];
export type ScoreCalculator = (scores: number[]) => number;
 const bootcampName: string = "";
const currentWeek: number = 0;
 const classIsLive: boolean = false;
 const availableTracks: string[] = [];
export type StudentId = string | number;

const multiply = (x:number,y:number):number =>{
    return x*y;
}

const greetStudent = (name:string):string =>{
    return `Hello ${name}!`
}

console.log(greetStudent("Favour"));
console.log(multiply(3,2));