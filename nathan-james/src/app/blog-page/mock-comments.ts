export interface iComment {
    name: string;
    email?: string;
    content: string;
    loved: boolean;
    isNathan: boolean;
}

export const VEGAN_THANKSGIVING_COMMENTS: iComment[] = [{
    name: "Dan Miller",
    content: "This is awesome. Thanks for the resources",
    loved: true,
    isNathan: false
}, {
    name: "Nathan",
    content: "No problem, happy to help",
    loved: false,
    isNathan: true
}, {
    name: "Dan Miller",
    content: "I think Nathan just commented on my comment. This might be the greatest thing that has ever happened in my life. Before this I never had interaction with a celebrity",
    loved: true,
    isNathan: false
}, {
    name: "Jacob Northfield",
    content: "Yeah, Nathan is pretty cool. He interacts all of the times with his fans.",
    loved: false,
    isNathan: false
}, {
    name: "Nick G",
    content: "I heard his sister in law does a majority of the work on the community stuff. He is too busy making the songs.",
    loved: false,
    isNathan: false
}, {
    name: "Nathan",
    content: "No it is all me. Sometimes it takes me a day or two to get back to you. I am pretty busy at the day hab facility",
    loved: false,
    isNathan: true
}]
