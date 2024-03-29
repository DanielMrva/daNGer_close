const LoremIpsum = require("lorem-ipsum").LoremIpsum;

let names = [
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

const moreWords = [
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

const lorem = new LoremIpsum({
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

const loremTitle = new LoremIpsum({
  wordsPerSentence: {
    max: 5,
    min: 3,
  },
  words: [...moreWords],
});

const rndInt = (int) => {
  return Math.floor(Math.random() * 3 + int);
};

const randomText = (int) => {
  return lorem.generateSentences(int);
};

const randomTitleText = (int) => {
  return loremTitle.generateSentences(int);
};

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

function getRandomFloat(min, max, decimals) {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);

  return parseFloat(str);
}

const getRandomDate = () => {
  let utcDate = Date.now();
  let randomDate = utcDate - (Math.floor(Math.random() * 1576800000000));
  let stableDate = new Date(randomDate).toISOString();
  let formatDate = stableDate.split('T');

  return formatDate[0];
};

const type = ["Extraterrestrial", "Paranormal", "Zoological"];

const category = [
  "Visual Sighting",
  "Audible Sighting",
  "Physical contact",
  "Environmental change",
  "PsychoKinesis",
];

const getUsers = (qtt) => {
  let users = []

  for (let index = 0; index < qtt; index++) {
    let newUser = {
      userName: `${getRandomArrItem(names)} ${getRandomArrItem(names)}`,
      email: `${getRandomArrItem(names)}@email.com`,
      password: 'password',
      encounter: [],
      comments: [],
      friends: []
    };

    users.push(newUser);
  }

  return users;
};

const getEncounters = (qtt, descLength) => {
  const encounters = [];
  for (i = 0; i < qtt; i++) {
    encounters.push({
      category: getRandomArrItem(category),
      type: getRandomArrItem(type),
      lat: getRandomFloat(37, 42, 4),
      lng: getRandomFloat(-95, -110, 4),
      title: randomTitleText(1),
      description: randomText(rndInt(descLength)),
      date: getRandomDate()
    });
  }
  return encounters;
};

const getComments = (qtt, commLength) => {
  const comments = [];
  for (i = 0; i < qtt; i++) {
    comments.push({
      commentText: randomText(rndInt(commLength)),
    });
  }
  return comments;
};

module.exports = {
  getUsers,
  getEncounters,
  getComments,
  getRandomArrItem,
  category,
  type,
  getRandomFloat,
  rndInt,
  randomText,
  getRandomDate
};
