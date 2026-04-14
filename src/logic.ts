import { BootcampStudent } from "./models";

// interface BootcampStudent {
//     id: string | number;
//     name: string;
//     age: number;
//     track: string;
//     isActive: boolean;
//     scores: number[];
//     location: [number, number];
//     nickname?: string;
// }

    export function describeStudent(student: BootcampStudent): void {
    console.log(`Student: ${student.name}, Track: ${student.track}, Active: ${student.isActive}`);
    }

    export function enrollStudent(name: string, age: number, track: string = "Frontend"): BootcampStudent {
    return {
        id: Math.random().toString(36).slice(2),
        name,
        age,
        track,
        isActive: true,
        scores: [],
        location: [0, 0],
    };
    }


