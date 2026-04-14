
import { students, BootcampStudent } from "./models"; // importing models

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
export const printReportLine = (students: BootcampStudent): void => {
  const average =
    students.scores.reduce((acc: number, score: number) => acc + score, 0) / students.scores.length;

  console.log(
    `${students.name} | Track: ${students.track} | Average Score: ${average.toFixed(2)} | Active: ${students.isActive}`
  );
};

