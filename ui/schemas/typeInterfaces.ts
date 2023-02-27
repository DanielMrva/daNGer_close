export interface User {
    _id: string;
    username: string;
    email: string;
    password: string;
    encounters?: string[];
    comments?: string[];
    friends?: string[];
};

export interface Encounter {
    _id: string;
    description: string;
    encType: string[];
    category: string;
    date: string;
    lat: number;
    lng: number;
    createdAt: string;
    title: string;
    encounterUser?: string;
    userId?: string;
    commentId?: string[];
    corroborations: string[];
};

export interface Comment {
    _id: string;
    commentText: string;
    createdAt: string;
    commentUser?: string;
    userId?: string;
    encounterId?: string;
    corroborations: string[]; 
};

export interface Auth { //TODO: Confirm this is correct?...
    token: string;
    user: User
};

export interface UserFriendsEncoutners {
    _id: string;
    username: string;
    Friends_Encounters: Encounter[];
};