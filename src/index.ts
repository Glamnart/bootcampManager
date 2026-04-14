//Part 4: Safe Input and Final Integration
// import {
//   bootcampName,
//   currentWeek,
//   classIsLive,
//   availableTracks,
//   greetStudent
// } from "./setup";

import { students, Mentor, mentors } from "./models";


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