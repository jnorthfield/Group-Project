export interface iTour {
    date: string,
    name: string,
    location: string,
    bandInTownLink: string,
    ticketsAvailable: boolean, 
    ticketsLink: string
}

export const TOURDATES : iTour[] = [{
    date: '20 Dec 2018',
    name: 'Voodoo Brewery Open Mic',
    location: 'Grove City, PA',
    bandInTownLink: 'https://www.bandsintown.com',
    ticketsAvailable: true,
    ticketsLink: 'http://www.voodoobrewery.com/'
}, {
    date: '21 Dec 2018',
    name: 'Grove City Battle Of The Bands',
    location: 'Grove City, PA',
    bandInTownLink: 'https://www.bandsintown.com',
    ticketsAvailable: false,
    ticketsLink: 'http://grovecityareachamber.com/events/'
}, {
    date: '31 Dec 2018',
    name: 'Mercer County Rings In 2019',
    location: 'Grove City, PA',
    bandInTownLink: 'https://www.bandsintown.com',
    ticketsAvailable: true,
    ticketsLink: 'http://grovecityareachamber.com/events/'
}, {
    date: '20 Jan 2019',
    name: 'Voodoo Brewery Open Mic',
    location: 'Grove City, PA',
    bandInTownLink: 'https://www.bandsintown.com',
    ticketsAvailable: true,
    ticketsLink: 'http://www.voodoobrewery.com/'
}, {
    date: '28 Jan 2019',
    name: 'Smiling Moose',
    location: 'Pittsburgh, PA',
    bandInTownLink: 'https://www.bandsintown.com',
    ticketsAvailable: false,
    ticketsLink: 'http://www.smiling-moose.com/htm/events-shows/'
}, {
    date: '29 Jan 2019',
    name: 'Smiling Moose',
    location: 'Pittsburgh, PA',
    bandInTownLink: 'https://www.bandsintown.com',
    ticketsAvailable: false,
    ticketsLink: 'http://www.smiling-moose.com/htm/events-shows/'
}, {
    date: '14  Feb 2019',
    name: 'Old Stonewall Valentine Special',
    location: 'Ellwood City, PA',
    bandInTownLink: 'https://www.bandsintown.com',
    ticketsAvailable: true,
    ticketsLink: 'http://www.shakespearesrestaurant.com/entertainment'
}, {
    date: '20 Feb 2019',
    name: 'Voodoo Brewery Open Mic',
    location: 'Grove City, PA',
    bandInTownLink: 'https://www.bandsintown.com',
    ticketsAvailable: true,
    ticketsLink: 'http://www.voodoobrewery.com/'
},{
    date: '20 Mar 2019',
    name: 'Voodoo Brewery Open Mic',
    location: 'Grove City, PA',
    bandInTownLink: 'https://www.bandsintown.com',
    ticketsAvailable: true,
    ticketsLink: 'http://www.voodoobrewery.com/'
},{
    date: '20 Apr 2019',
    name: 'Voodoo Brewery Open Mic',
    location: 'Grove City, PA',
    bandInTownLink: 'https://www.bandsintown.com',
    ticketsAvailable: true,
    ticketsLink: 'http://www.voodoobrewery.com/'
}]