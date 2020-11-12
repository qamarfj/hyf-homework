// Exercise #2
/*/ Create an object to represent one of your favourite bands. 
The required members are:*/
const band = {
  // name: A string representing the band name.
  name: 'janoon',
  // nationality: A string representing the country the band comes from.
  nationality: 'Pakistan',
  // genre: What type of music the band plays.
  genre: 'POP',
  // members: A number representing the number of members the band has.
  members: 5,
  // formed: A number representing the year the band formed.
  formed: 1996,
  /*/ split: A number representing the year the band split up, 
  or false if they are still together.*/
  split: 2000,
  /* albums: An array representing the albums released by the band.
   Each array item should be an object containing the following members:

  // name: A string representing the name of the album.
  // released: A number representing the year the album was released.
  // Include at least two albums in the albums array.*/
  albums: [
    {
      name: 'album1',
      released: 1996,
    },
    {
      name: 'album2',
      released: 1997,
    },
    {
      name: 'album3',
      released: 2000,
    }
  ],
}
/*/ Bonus step: create variable called bandInfo which is a string that 
describes your favorite band*/

// You can either use string concatenation or string interpolation 
// e.g. my favorite band is called ${band.name} and ...
const bandInfo = `My favorite band is called ${band.name} from ${band.nationality} 
and played ${band.genre} music. Which was formed by ${band.members} 
members group in ${band.formed} and spilted in ${band.split}. 
They relleased thier first album ${band.albums[0].name} in ${band.albums[0].released} ,
second album ${band.albums[1].name} in ${band.albums[1].released}
and last album ${band.albums[2].name} in ${band.albums[2].released}.`
console.log(bandInfo);