## Boot Camp Manager 

TypeScript Group Project Assignment

## Project Title

Bootcamp Manager App

## Project Goal

Build one TypeScript project that covers Lessons 1 to 6 using a simple bootcamp manager application.

The app should:

- store student data
- store mentor data
- calculate scores
- handle external input safely
- print a report in the terminal

## Group Division

### Part 1: Foundation

Students: Sarah, Favour

Focus:

- Lesson 1
- Intro parts of Lesson 2

Tasks:

- Set up the project files: package.json, tsconfig.json
- Create src/index.ts or src/setup.ts
- Add variables using string, number, and boolean
- Create typed arrays such as string[]
- Write simple functions such as multiply() and greetStudent()
- Create a union type such as type StudentId = string | number

Suggested split:

- Sarah: project setup, variables, arrays
- Favour: functions and union type examples

Expected result:

- basic TypeScript variables and arrays
- simple typed functions
- console output showing the file runs correctly

### Part 2: Student Data Models

Students: Kaycee, Chinenye

Focus:

- Lesson 2
- Lesson 3
- Part of Lesson 6

Tasks:

- Create Person interface
- Create BootcampStudent interface that extends Person
- Add properties such as id, track, isActive, and scores
- Add an optional property such as nickname?
- Add a tuple property such as location: [number, number]
- Create an array of typed student objects

Suggested split:

- Kaycee: interfaces and object structure
- Chinenye: sample student records, optional properties, tuple fields

Expected result:

- typed student models
- at least 3 student objects in an array

### Part 3: Functions and Business Logic

Students: Derry, Amah

Focus:

- Lesson 5

Tasks:

- Create functions that accept typed objects
- Write describeStudent(student)
- Write enrollStudent(name, age, track = "Frontend")
- Create a function type alias such as type ScoreCalculator = (scores: number[]) => number
- Build calculateAverageScore()
- Print useful summaries for each student

Suggested split:

- Derry: function signatures, return types, optional/default parameters
- Amah: score calculation logic and report formatting

Expected result:

- reusable typed functions for project logic
- score calculation and student summary output

### Part 4: Safe Input and Final Integration

Students: Ebube, Chidi

Focus:

- Lesson 4
- Final integration of Lessons 1 to 6

Tasks:

- Create a function that receives unknown
- Check the type before using it
- Safely convert values such as "84" into numbers
- Write void functions such as printReportLine()
- Build main() to connect all parts together
- Make the app print the final report in the terminal

Suggested split:

- Ebube: unknown handling and parsing logic
- Chidi: integration, main() function, final console output

Expected result:

- safe handling of outside input
- final working app that runs from start to finish

## Recommended File Structure

text
src/
  setup.ts
  models.ts
  logic.ts
  index.ts


Suggested ownership:

- src/setup.ts by Sarah and Favour
- src/models.ts by Kaycee and Chinenye
- src/logic.ts by Derry and Amah
- src/index.ts by Ebube and Chidi

## How To Build The Project

1. Part 1 creates the project setup and basic TypeScript examples.
2. Part 2 defines the interfaces, tuple fields, optional properties, and student array.
3. Part 3 writes the reusable business logic functions.
4. Part 4 adds safe unknown handling and combines everything in main().

## What The Final App Should Show

When the project runs, it should print:

- the bootcamp name
- the available tracks
- mentor information
- student summaries
- average scores
- safe parsing of external input
- a short report showing that Lessons 1 to 6 were covered

## Submission Instructions

1. Each pair completes their assigned part.
2. Each pair tests their code with:

bash
npm run check


3. After all parts are combined, run:

bash
npm run build
npm start


4. Present the final project as one complete TypeScript application.

## Lesson Mapping

- Lesson 1: basic types, arrays, simple functions
- Lesson 2: objects, union types
- Lesson 3: arrays of objects, tuples, optional properties
- Lesson 4: unknown, safe checks, void
- Lesson 5: function parameters, return types, optional/default parameters
- Lesson 6: interfaces and interface extension
