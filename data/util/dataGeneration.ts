const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const fs = require('fs');


let names: string[] = [
    "Judy",
    "Barznok",
    "Herold",
    "Reginald",
    "Auldrin",
    "Billy-Bob",
    "Regina",
    "Garland",
    "Emmiline",
    "Johosaphat",
    "Buzz",
    "Lucy",
    "Deltron",
    "Elvis",
    "Schmert",
    "Tank",
    "Wizard",
    "Robot",
    "Barbarian",
    "Narwal",
    "Vine",
    "Clever",
    "Dude",
    "Bro",
    "Musk",
    "Elon",
    "Alonzo",
    "Volcano",
    "Unicorn",
    "IceCream",
    "Monster",
    "Aqua",
    "Viking",
    "Professor",
    "AeyBeeSea",
    "Airman",
    "Wizard",
    "Barbarian",
    "Werewolf",
    "Finnish",
    "Slimy",
    "Medusa",
    "Worm",
    "Jones",
    "Coollastname",
    "Ostrich",
    "Ze",
    "Zechariah",
    "Zeek",
    "Dog",
    "Excited",
    "Sock",
    "Box",
    "Zen",
    "Zenith",
    "Zennon",
    "Zeph",
    "Blob",
    "Monkey",
    "Zhi",
    "Zhong",
    "Zion",
    "Fox",
    "Zuriel",
    "Xander",
    "Jared",
    "Grace",
    "Alex",
    "Bibliophile",
    "Wonderer",
    "Smile",
    "Sarah",
    "HotDog",
    "Parker",
    "Smelt",
    "Lightning",
    "Robot",
    "Minion",
    "Kangaroo",
    "Captain",
    "Doctor",
    "Jackson",
    "Polluck",
    "John Q",
    "Public",
    "Taxpayer",
    "Astronaut",
    "Superman",
    "Batman",
    "WonderTwin",
    "Wombat",
    "Turtle",
    "Sphere",
    "Charizard",
    "Faux",
    "Fox",
    "Faulty",
    "Friendly",
    "Fast",
    "Slow",
    "Servile",
    "Scrumptious",
    "Crumpet",
    "Queen",
    "King",
    "Fisher",
    "Destoryer",
    "Frenchman",
    "Rus",
    "Victor",
    "Davis",
    "Smiley",
    "Guy",
    "Gal",
    "Dame",
    "Judy",
    "Trench",
    "Bucket",
    "Slob",
    "Vile",
    "Vermin",
    "Maggie",
    "Thatcher"
];

let moreWords: string[] = [
    "monster",
    "alien",
    "ghost",
    "zombie",
    "sacred",
    "probed",
    "abducted",
    "mauled",
    "attacked",
    "paralized",
    "Unicorn",
    "Big Foot",
    "Nessie",
    "Moth-Man",
    "Tom Cruise",
    "spider",
    "cryptid",
    "specter",
    "grandfather",
    "grandmother",
    "dead",
    "UFO",
    "silver",
    "cigar",
    "triangle",
    "silent",
    "zoom",
    "stalked",
    "slithered",
    "swam",
    "glowed",
    "Grey",
    "Sasquach",
    "slime",
    "sonic-boom",
    "exploded",
    "floated",
    "drifted",
    "ectoplasim",
    "teleported",
    "undead",
    "ran",
    "nightime",
    "spoke to me",
    "attacked me",
    "animal mutilations",
    "Bermuda Triangle",
    "Cetus",
    "dreamland",
    "Foo Fighters",
    "flying disk",
    "flying saucer",
    "faded giant",
    "MK Ultra",
    "Orion",
    "Epsilon Eridani",
    "Pluto",
    "rainbow",
    "Saint",
    "stigmata",
    "Thomas",
    "Augustine",
    "Abrosima",
    "Catherine of Genoa",
    "flash",
    "bang",
    "umbrella",
    "ultra terrestrials",
    "Zeta Reticuli",
    "slow",
    "hovered",
    "landed",
    "flew",
    "disappeared",
    "exploded",
    "crashed",
    "greeted",
    "captured",
    "hid",
    "punched bigfoot",
    "disceted",
    "hybrid",
    "alien-human",
    "monster-human",
    "half-man",
    "satyr",
    "gryphon",
    "beholder",
    "Demi-Gorgon",
    "upsidedown",
    "chem trails",
    "implanted chip",
    "woke up",
    "room was wet",
    "went to sleep",
    "lost",
    "abominable snowman",
];

const lorem: any = new LoremIpsum({
    sentencesPerParagraph: {
      max: 5,
      min: 3,
    },
    wordsPerSentence: {
      max: 8,
      min: 2,
    },
    words: [...moreWords],
});

const loremTitle: any = new LoremIpsum({
    wordsPerSentence: {
        max: 5,
        min: 3,
      },
      words: [...moreWords],
});

const rndInt = (int: number): number => {
    return Math.floor(Math.random() * 3 + int);
};

const randomText = (int: number): string => {
    return loremTitle.generateSentences(int);
};

const randomTitleText = (int: number): string => {
    return lorem.generateSentences(int);
};

const getRandomArrItem = (arr: any[]): any => arr[Math.floor(Math.random() * arr.length)];

const getRandomFloat = (max: number, min: number, decimals: number): number => {
    const str: string = (Math.random() * (max - min) + min).toFixed(decimals);

    return parseFloat(str);
};

const getRandomDate = (): string => {
    let utcDate: number = Date.now();
    let randomDate: number = utcDate - (Math.floor(Math.random() * 1576800000000));
    let stableDate: string = new Date(randomDate).toISOString();
    let formatDate: string[] = stableDate.split("T");

    return formatDate[0];
};

const encounterType: string[] = [
    "Extraterrestrial", 
    "Paranormal", 
    "Zoological"
];

const category: string[]  = [
    "Visual Sighting",
    "Audible Sighting",
    "Physical contact",
    "Environmental change",
    "PsychoKinesis"
];

interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    encounters?: number[];
    comments?: number[];
    friends?: User[];
}

interface Encounter {
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

interface EncComment {
    id: number;
    commentText: string;
    commentUser?: string;
    userId?: number;
    encounterId?: number; 
};

type JSONValue = string | number | boolean | JSONObject | JSONArray;

interface JSONObject {
    [x: string]: JSONValue
};

interface JSONArray extends Array<JSONValue> { };


const getUsers = (qtt: number): User[] => {
    let users: User[] = [];

    for (let index = 0; index < qtt; index++) {
        let newUser: User = {
            id: index,
            username: `${getRandomArrItem(names)}${getRandomArrItem(names)}`,
            email: `${getRandomArrItem(names)}@email.com`,
            password: `password`,
            encounters: [],
            comments: []
        };

        users.push(newUser);
        
    };

    return users;
};

const getEncounters = (qtt: number, descLength: number, useArr: User[] ): Encounter[] => {
    const encounters: Encounter[] = [];

    for (let index = 0; index < qtt; index++) {

        let user: User = getRandomArrItem(useArr);

        let newEncounter: Encounter = {
            id: index,
            description: randomText(rndInt(descLength)),
            encType: getRandomArrItem(encounterType),
            date: getRandomDate(),
            category: getRandomArrItem(category),
            lat: getRandomFloat(37, 42, 4),
            lng: getRandomFloat(-95, -110, 4),
            title: randomTitleText(1),
            encounterUser: user.username,
            userId: user.id,
            commentId: []
        };

        encounters.push(newEncounter);
        
    };

    return encounters;
    
};

const getComments = (qtt: number, commLen: number, useArr: User[], encArr: Encounter[]): EncComment[] => {
    const comments: EncComment[] = [];

    for (let index = 0; index < qtt; index++) {

        let user: User = getRandomArrItem(useArr);

        let encounter: Encounter = getRandomArrItem(encArr);

        let newComment: EncComment = {
            id: index,
            commentText: randomText(rndInt(commLen)),
            commentUser: user.username,
            userId: user.id,
            encounterId: encounter.id
        };

        comments.push(newComment);
        
    }

    return comments;
};


const genJSON =(    
                    userQTT: number, 
                    encQTT: number, 
                    comQTT: number,  
                    encLEN: number,
                    comLEN: number
                ): string => {

    let users = getUsers(userQTT);

    let encounters = getEncounters(encQTT, encLEN, users);

    let comments = getComments(comQTT, comLEN, users, encounters);

    for (let i = 0; i < comments.length; i++) {
        const comment = comments[i];
        let userId = comment.userId;
        let encounterId = comment.encounterId;
        
        if (userId === undefined) {
            let user = users[0];
        } else {
            let user = users[userId];
            user.comments?.push(comment.id);
        };

        if (encounterId === undefined) {
            let encounter = encounters[0];
        } else {
            let encounter = encounters[encounterId];
            encounter.commentId?.push(comment.id);
        }
    };

    for (let j = 0; j < encounters.length; j++) {
        const encounter = encounters[j];
        let userId = encounter.userId;

        if (userId === undefined) {
            let user = users[0];
        } else {
            let user = users[userId];
            user.encounters?.push(encounter.id);
        }
        
    };

    let jsonUsers: JSONValue = JSON.stringify(users);

    let jsonEncounters: JSONValue = JSON.stringify(encounters);

    let jsonComments: JSONValue = JSON.stringify(comments);

    let db: object = {
        users: users,
        encounters: encounters,
        comments: comments
    };

    let dbJSON = JSON.stringify(db, null, 2);

    return dbJSON;

};

let data: string = genJSON(5, 50, 100, 5, 2);

fs.writeFile('../db.json', data, (err: any) => {
    if (err) throw err;
    console.log('Data written to file');
});