
export interface Person {
    name: string;
    age: number;
}

export interface BootcampStudent extends Person {
    id: string | number;
    track: "Frontend" | "Backend" | "Data";
    isActive: boolean;
    nickname?: string;
    scores: number[];
    location: [number, number];
}

export interface Mentor extends Person {
    subject: string;
}

//Mentor Data
export const mentors: Mentor[] = [
    {
        name: "Mr Ade",
        age: 40,
        subject: "Full Stack Development"
    }
];

//Student Data
export const students: BootcampStudent[] = [
    {
        id: "STU001",
        name: "Chinenye Orakwue",
        age: 28,
        track: "Frontend",
        isActive: true,
        nickname: "Chi",
        scores: [80, 85, 90],
        location: [6.5244, 3.3792]
    },
    {
        id: "STU002",
        name: "David",
        age: 28,
        track: "Backend",
        isActive: true,
        nickname: "Dave",
        scores: [70, 75, 80],
        location: [9.0820, 8.6753]
    },
    {
        id: "103",
        name: "Ada",
        age: 30,
        track: "Data",
        isActive: false,
        nickname: "Addy",
        scores: [88, 92, 85],
        location: [51.5074, 0.1278]

    }];