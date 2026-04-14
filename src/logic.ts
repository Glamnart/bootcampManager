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

    type ScoreCalculator = (scores: number[]) => number;

type ScoreReport = {
    average: number;
    highest: number;
    lowest: number;
    grade: string;
};

export function calculateScoreReport(scores: number[]): ScoreReport {
    if (scores.length === 0) {
        return {
            average: 0,
            highest: 0,
            lowest: 0,
            grade: "N/A"
        };
    }

    const total = scores.reduce((sum, s) => sum + s, 0);
    const average = total / scores.length;
    const highest = Math.max(...scores);
    const lowest = Math.min(...scores);

    let grade: string;
    if (average >= 70) grade = "A";
    else if (average >= 60) grade = "B";
    else if (average >= 50) grade = "C";
    else if (average >= 45) grade = "D";
    else grade = "F";

    return { average, highest, lowest, grade };
}

export function formatStudentReport(student: Student): string {
    const report = calculateScoreReport(student.score);

    return `
==============================
STUDENT REPORT
==============================
Name: ${student.name}
Age: ${student.age}
Track: ${student.track}

Scores: ${student.score.length ? student.score.join(", ") : "No scores"}

Average: ${report.average.toFixed(2)}
Highest: ${report.highest}
Lowest: ${report.lowest}
Grade: ${report.grade}
==============================
`;
}

// Example usage
const student1: Student = {
    name: "Ifeanyi",
    age: 22,
    track: "Frontend",
    score: [75, 68, 80, 90]
};

console.log(formatStudentReport(student1));


