//Part 4: Safe Input and Final Integration
// import {
//   bootcampName,
//   currentWeek,
//   classIsLive,
//   availableTracks,
//   greetStudent
// } from "./setup";

import { students, BootcampStudent, Mentor, mentors } from "./models.js";

// Safely convert values like "84" into numbers
const parseToNumber = (value: unknown): number | null => {
if (typeof value === "number") return value;
if (typeof value === "string") {
const parsed = Number(value);
return isNaN(parsed) ? null : parsed;
}
return null;
}

// Handle unknown input safely
export const handleUnknown = (input: unknown): void => {
if (typeof input === "string") { 
  console.log(input.toUpperCase());
} else if (typeof input === "number") {
console.log(input * 2);
} else {
console.log("Invalid input");
}

};

// Print a single report line for a student
export const printStudentReport = (students: BootcampStudent): void => {
const average =
students.scores.reduce((acc: number, score: number) => acc + score, 0) / students.scores.length;

console.log(
`${students.name} | Track: ${students.track} | Average Score: ${average.toFixed(2)} | Active: ${students.isActive}`
);
};


// End

// VOID FUNCTION
export function printReportLine(message: string): void {
  console.log(message);
}


// MAIN FUNCTION
export function main(): void {
  printReportLine("=== Bootcamp Report ===\n");

  // Bootcamp Info
//   printReportLine(`Bootcamp: ${bootcampName}`);
//   printReportLine(`Week: ${currentWeek}`);
//   printReportLine(`Class Live: ${classIsLive}`);
//   printReportLine(`Tracks: ${availableTracks.join(", ")}\n`);

  // Mentor Info
const mentor = mentors[0];

if (!mentor) {
  printReportLine("No mentor found");
  return;
}

printReportLine(`Mentor: ${mentor.name}`);
printReportLine(`Subject: ${mentor.subject}`);

  // Greeting (commented out because not imported)
  // printReportLine(greetStudent("Chidi", "Mr"));

  // Students Report
//   students.forEach((student) => {
//     printReportLine(describeStudent(student));

//     const average = calculateAverageScore(student.scores);
//     printReportLine(`Average Score: ${average.toFixed(2)}`);
//     printReportLine("----------------------");
//   });


}

// RUN APP
main();