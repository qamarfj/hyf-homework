
const band = {

  name: 'janoon',
  nationality: 'Pakistan',
  genre: 'POP',
  members: 5,
  formed: 1996,
  split: 2000,

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

const bandInfo = `My favorite band is called ${band.name} from ${band.nationality} 
and played ${band.genre} music. Which was formed by ${band.members} 
members group in ${band.formed} and spilted in ${band.split}. 
They relleased thier first album ${band.albums[0].name} in ${band.albums[0].released} ,
second album ${band.albums[1].name} in ${band.albums[1].released}
and last album ${band.albums[2].name} in ${band.albums[2].released}.`
console.log(bandInfo);