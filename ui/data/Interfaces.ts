export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    encounters?: number[];
    comments?: number[];
    friends?: User[];
};

export interface Encounter {
    id: number;
    description: string;
    encType: string[];
    category: string;
    date: string;
    lat: number;
    lng: number;
    title: string;
    encounterUser?: string;
    userId?: number;
    commentId?: number[];
};

export interface EncComment {
    id: number;
    commentText: string;
    commentUser?: string;
    userId?: number;
    encounterId?: number; 
};