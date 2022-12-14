var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var LoremIpsum = require("lorem-ipsum").LoremIpsum;
var fs = require('fs');
var names = [
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
var moreWords = [
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
var lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 5,
        min: 3
    },
    wordsPerSentence: {
        max: 8,
        min: 2
    },
    words: __spreadArray([], moreWords, true)
});
var loremTitle = new LoremIpsum({
    wordsPerSentence: {
        max: 5,
        min: 3
    },
    words: __spreadArray([], moreWords, true)
});
var rndInt = function (int) {
    return Math.floor(Math.random() * 3 + int);
};
var randomText = function (int) {
    return loremTitle.generateSentences(int);
};
var randomTitleText = function (int) {
    return lorem.generateSentences(int);
};
var getRandomArrItem = function (arr) { return arr[Math.floor(Math.random() * arr.length)]; };
var getRandomFloat = function (max, min, decimals) {
    var str = (Math.random() * (max - min) + min).toFixed(decimals);
    return parseFloat(str);
};
var getRandomDate = function () {
    var utcDate = Date.now();
    var randomDate = utcDate - (Math.floor(Math.random() * 1576800000000));
    var stableDate = new Date(randomDate).toISOString();
    var formatDate = stableDate.split("T");
    return formatDate[0];
};
var encounterType = [
    "Extraterrestrial",
    "Paranormal",
    "Zoological"
];
var category = [
    "Visual Sighting",
    "Audible Sighting",
    "Physical contact",
    "Environmental change",
    "PsychoKinesis"
];
;
;
;
;
var getUsers = function (qtt) {
    var users = [];
    for (var index = 0; index < qtt; index++) {
        var newUser = {
            id: index,
            username: "".concat(getRandomArrItem(names)).concat(getRandomArrItem(names)),
            email: "".concat(getRandomArrItem(names), "@email.com"),
            password: "password",
            encounters: [],
            comments: [],
            friends: []
        };
        users.push(newUser);
    }
    ;
    return users;
};
var getEncounters = function (qtt, descLength, useArr) {
    var encounters = [];
    for (var index = 0; index < qtt; index++) {
        var user = getRandomArrItem(useArr);
        var newEncounter = {
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
    }
    ;
    return encounters;
};
var getComments = function (qtt, commLen, useArr, encArr) {
    var comments = [];
    for (var index = 0; index < qtt; index++) {
        var user = getRandomArrItem(useArr);
        var encounter = getRandomArrItem(encArr);
        var newComment = {
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
var genJSON = function (userQTT, encQTT, comQTT, encLEN, comLEN) {
    var _a, _b, _c, _d, _e;
    var users = getUsers(userQTT);
    var encounters = getEncounters(encQTT, encLEN, users);
    var comments = getComments(comQTT, comLEN, users, encounters);
    for (var i = 0; i < comments.length; i++) {
        var comment = comments[i];
        var userId = comment.userId;
        var encounterId = comment.encounterId;
        if (userId === undefined) {
            var user = users[0];
        }
        else {
            var user = users[userId];
            (_a = user.comments) === null || _a === void 0 ? void 0 : _a.push(comment.id);
        }
        ;
        if (encounterId === undefined) {
            var encounter = encounters[0];
        }
        else {
            var encounter = encounters[encounterId];
            (_b = encounter.commentId) === null || _b === void 0 ? void 0 : _b.push(comment.id);
        }
    }
    ;
    for (var j = 0; j < encounters.length; j++) {
        var encounter = encounters[j];
        var userId = encounter.userId;
        if (userId === undefined) {
            var user = users[0];
        }
        else {
            var user = users[userId];
            (_c = user.encounters) === null || _c === void 0 ? void 0 : _c.push(encounter.id);
        }
    }
    ;
    for (var l = 0; l < 3; l++) {
        for (var k = 0; k < users.length; k++) {
            var user = users[k];
            var friend = getRandomArrItem(users);
            var endUser = users.length;
            if (user.id != friend.id && !((_d = user.friends) === null || _d === void 0 ? void 0 : _d.includes(friend.id))) {
                (_e = user.friends) === null || _e === void 0 ? void 0 : _e.push(friend.id);
                friend.friends.push(user.id);
            }
            ;
        }
        ;
    }
    ;
    var db = {
        users: users,
        encounters: encounters,
        comments: comments
    };
    var dbJSON = JSON.stringify(db, null, 2);
    return dbJSON;
};
var data = genJSON(10, 50, 70, 5, 2);
fs.writeFile('../db.json', data, function (err) {
    if (err)
        throw err;
    console.log('Data written to file');
});
