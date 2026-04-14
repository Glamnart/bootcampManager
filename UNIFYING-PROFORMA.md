# Unifying Proforma For The TypeScript Group Project

## Purpose

This proforma defines the shared structure that all groups must follow so that each part can be developed independently and later joined without blocking any other part.

The rule is simple:

- each group should code to the agreed names and shapes
- no group should wait for another group before starting
- integration should work by import and export, not by rewriting each other's code

## Shared Project Structure

All groups must follow this file structure:

```text
src/
  setup.ts
  models.ts
  logic.ts
  index.ts
```

## Ownership

- `src/setup.ts`: Sarah, Favour
- `src/models.ts`: Kaycee, Chinenye
- `src/logic.ts`: Derry, Amah
- `src/index.ts`: Ebube, Chidi

## Global Naming Agreement

Everyone must use these exact names.

### Types and Interfaces

```ts
export type StudentId = string | number;
export type Coordinate = [number, number];
export type ScoreCalculator = (scores: number[]) => number;

export interface Person {
  name: string;
  age: number;
}

export interface BootcampStudent extends Person {
  id: StudentId;
  track: "Frontend" | "Backend" | "Data";
  isActive: boolean;
  nickname?: string;
  scores: number[];
  location: Coordinate;
}

export interface Mentor extends Person {
  subject: string;
}
```

### Shared Variables

These names should be used exactly if the values are needed.

```ts
bootcampName
currentWeek
classIsLive
availableTracks
leadMentor
students
```

### Shared Functions

These names and signatures should be used exactly.

```ts
export function multiply(a: number, b: number): number
export function greetStudent(name: string, title?: string): string
export function enrollStudent(
  name: string,
  age: number,
  track?: "Frontend" | "Backend" | "Data"
): BootcampStudent
export function describeStudent(student: BootcampStudent): string
export function calculateAverageScore(scores: number[]): number
export function printReportLine(message: string): void
export function parseExternalScore(value: unknown): number | null
export function main(): void
```

## Part-by-Part Contract

### Part 1 Contract

File: `src/setup.ts`

Sarah and Favour should export:

```ts
export const bootcampName: string
export const currentWeek: number
export const classIsLive: boolean
export const availableTracks: string[]
export type StudentId = string | number
export function multiply(a: number, b: number): number
export function greetStudent(name: string, title?: string): string
```

Temporary independence rule:

- if `models.ts` is not ready, Part 1 should still compile on its own
- do not import unfinished files unless required

### Part 2 Contract

File: `src/models.ts`

Kaycee and Chinenye should export:

```ts
export type Coordinate = [number, number]

export interface Person {
  name: string
  age: number
}

export interface BootcampStudent extends Person {
  id: string | number
  track: "Frontend" | "Backend" | "Data"
  isActive: boolean
  nickname?: string
  scores: number[]
  location: Coordinate
}

export interface Mentor extends Person {
  subject: string
}

export const leadMentor: Mentor
export const students: BootcampStudent[]
```

Temporary independence rule:

- sample data should be hardcoded first
- do not wait for logic functions before creating the interfaces and arrays

### Part 3 Contract

File: `src/logic.ts`

Derry and Amah should import from `src/models.ts` and export:

```ts
export type ScoreCalculator = (scores: number[]) => number

export function describeStudent(student: BootcampStudent): string
export function enrollStudent(
  name: string,
  age: number,
  track?: "Frontend" | "Backend" | "Data"
): BootcampStudent
export const calculateAverageScore: ScoreCalculator
```

Temporary independence rule:

- if `students` data is not final, test the functions with mock objects
- do not wait for `index.ts` before finishing logic

### Part 4 Contract

File: `src/index.ts`

Ebube and Chidi should import from all other files and export:

```ts
export function printReportLine(message: string): void
export function parseExternalScore(value: unknown): number | null
export function main(): void
```

Temporary independence rule:

- if another file is incomplete, create temporary mock imports locally for testing
- replace mocks with real imports during final integration

## Non-Blocking Execution Rules

To avoid one team stopping another, use these rules:

1. Every file must export only its own part.
2. No file should contain duplicate definitions already owned by another team.
3. If a dependency is missing, use a temporary mock inside your own file for testing.
4. Keep function names and interface names exactly as written in this proforma.
5. Do not rename shared fields such as `scores`, `track`, `nickname`, or `location`.
6. Use the same track values everywhere: `"Frontend"`, `"Backend"`, `"Data"`.
7. Merge by imports and exports, not by copying code randomly between files.

## Integration Sequence

Follow this exact order during final merge:

1. Confirm `setup.ts` exports compile.
2. Confirm `models.ts` exports compile.
3. Confirm `logic.ts` imports from `models.ts` and compiles.
4. Confirm `index.ts` imports from all files and compiles.
5. Run `npm run check`.
6. Run `npm run build`.
7. Run `npm start`.

## Minimum Final Output

When the final app runs, it should print:

- bootcamp name
- current week status
- available tracks
- mentor info
- greetings
- at least 3 student summaries
- average score for each student
- parsed result from an `unknown` input

## Merge Checklist

- all files are in `src/`
- all exports use agreed names
- no duplicate interface definitions across files unless intentionally imported
- `index.ts` is the only file that runs `main()`
- no TypeScript errors after `npm run check`
- app runs successfully with `npm start`

## Short Advice To All Groups

- build your part using the agreed contract, not assumptions
- test your own file before handing it over
- keep code simple and typed clearly
- if you must improvise, do not change shared names without informing the whole team
