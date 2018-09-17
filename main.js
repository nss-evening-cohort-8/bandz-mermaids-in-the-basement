
/* Home Page Slideshow*/
let i=0;
let time = 3000;

const changeImg = () => {
  document.getElementById('slide_img').src =  band[i].image;
  if(i < band.length -1){
    i++;
  }
    else {
    i = 0;
    }
    setTimeout("changeImg()", time);
  }
  window.onload = changeImg;


/* JS for Tour Page */
const tour = [
{
  when: "September 24, 2018&nbsp&nbsp&nbsp&nbsp",
  venue: "Neptune's Grove in (Merfolk ONLY Concert Venue)&nbsp&nbsp&nbsp&nbsp",
  time: "6 pm",
},
{
  when: "October 24, 2018&nbsp&nbsp&nbsp&nbsp",
  venue: "Temple of Athena Nike in Athens Greece&nbsp&nbsp&nbsp&nbsp",
  time: "6 pm",
},
{
  when: "October 31, 2018&nbsp&nbsp&nbsp&nbsp",
  venue: "Atlantis Colleseum in Atlantis, Atlantic Ocean&nbsp&nbsp&nbsp&nbsp",
  time: "8 pm",
},
{
  when: "November 23, 2018&nbsp&nbsp&nbsp&nbsp",
  venue: "Wooly's in Des Moines, Iowa&nbsp&nbsp&nbsp&nbsp",
  time: "8 pm",
},
{
  when: "December 21, 2018&nbsp&nbsp&nbsp&nbsp",
  venue: "Cabo San Lucas, Pier 3&nbsp&nbsp&nbsp&nbsp",
  time: "6 pm",
},
{
  when: "January 20, 2019&nbsp&nbsp&nbsp&nbsp",
  venue: "Teatro Antico di Taormina in Taormina, Italy&nbsp&nbsp&nbsp&nbsp",
  time: "8 pm",
},
{
  when: "February 19, 2019&nbsp&nbsp&nbsp&nbsp",
  venue: "Waldbühne in Berlin, Germany&nbsp&nbsp&nbsp&nbsp",
  time: "8 pm",
},
{
  when: "March 20, 2019&nbsp&nbsp&nbsp&nbsp",
  venue: "Neptune's Seafood in Garden Grove, California&nbsp&nbsp&nbsp&nbsp",
  time: "6 pm",
},
{
  when: "April 19, 2019&nbsp&nbsp&nbsp&nbsp",
  venue: "Pompeii, Naples, Italy&nbsp&nbsp&nbsp&nbsp",
  time: "7 pm",
},
{
  when: "May 18, 2019&nbsp&nbsp&nbsp&nbsp",
  venue: "The Laughing Parrot in Bonita Springs, Florida&nbsp&nbsp&nbsp&nbsp",
  time: "8 pm",
},
{
  when: "June 1, 2019&nbsp&nbsp&nbsp&nbsp",
  venue: "Blizzard Beach Water Park at Walt Disney World in Buena Vista, Florida&nbsp&nbsp&nbsp&nbsp",
  time: "8 pm",
},
{
  when: "June 16, 2019&nbsp&nbsp&nbsp&nbsp",
  venue: "Bonaroo, Manchester, Tennessee&nbsp&nbsp&nbsp&nbsp",
  time: "6 pm",
},
{
  when: "June 21, 2019&nbsp&nbsp&nbsp&nbsp",
  venue: "Harbor Cove Hotel in Nassau, Bahamas&nbsp&nbsp&nbsp&nbsp",
  time: "5 pm",
},
{
  when: "July 16, 2019&nbsp&nbsp&nbsp&nbsp",
  venue: "Civic Center in Amarillo, Texas&nbsp&nbsp&nbsp&nbsp",
  time: "8 pm",
}
];

// JavaScript for Tour Dates
const createTour = () => {
  let newString = ''
  for (let i = 0; i < tour.length; i++) {
        newString += `<div class="tours">`
          newString += `${tour[i].when}`
          newString += `${tour[i].venue}`
          newString += `${tour[i].time}`
          newString += `</div>`;
  }
  printToDom(newString, 'tour__dates');
};

// JS for songs.html
const albums = [
  {
    title: "Neptune & The Vainy-Armed Apprentice",
    image: "https://www.squidge.org/~mrs_fish/fakes/xf/fantasy/mermen-warriors.jpg",
    songs: ["Why Are Your Arms So Vainy?", "Vains Thicker Than My Mane", "Big Vain, Little Fin"]
  },
  {
    title: "New Trident, Who Dis?",
    image: "https://cdnb.artstation.com/p/assets/images/images/000/190/297/large/hyoung-nam-poseidon-adv-06.jpg?1409732838",
    songs: ["I AM THE SEA", "Holy Mack-erel", "Sleeping With the Fishes"]
  },
  {
    title: "Underwater Paradise",
    image: "https://i.ytimg.com/vi/XDzT8zJN5Zs/maxresdefault.jpg",
    songs: ["Golden Submarine", "Under the Sea", "Flood Mansion Dreams"]
  }
];

// JS for band.html
let band = [
  {
    name: 'Aegaeon',
    image: 'https://orig00.deviantart.net/ab4b/f/2013/126/1/a/merman_by_annemaria48-d642or4.jpg',
    bio: "Aegaeon sings loudly and proudly. He couldn't hit the key of the song if he tried, but DAY-UM, he's a looker. In his spare time Aegaeon enjoys long walks on the beach.",
    fave: albums[0].songs[0]
  },

  {
    name: 'Ladon',
    image: 'https://i.pinimg.com/originals/16/3d/95/163d95f8b269f47ee0cfca91934dff57.jpg',
    bio: "Ladon plays bass. It's a good thing that a bass only has 4 strings, played one at a time, because Ladon is dumber than a box of rocks. In his spare time, Ladon enjoys long walks on the beach.",
    fave: albums[1].songs[2]
  },

  {
    name: 'Nereus',
    image: 'https://cache.desktopnexus.com/thumbseg/458/458642-bigthumbnail.jpg',
    bio: "Nereus plays pan flute. He plays it poorly, but his mom's house has a basement were we can rehearse. In his spare time, Nereus enjoys long walks on the beach.",
    fave: albums[2].songs[1]
  },

  {
    name: 'Pan',
    image: 'https://i.warosu.org/data/tg/img/0294/29/1389487235150.png',
    bio: 'Pan plays guitar. Loudly. Sometimes, when the spirit moves him, he smashes said guitar. In his spare time, Pan enjoys long walks on the beach.',
    fave: albums[0].songs[2]
  },

  {
    name: 'Triton',
    image: 'https://ssl.c.photoshelter.com/img-get2/I0000Xu80bDWLL6c/fit=1000x750/Project-Mermaids-78.jpg',
    bio: 'Triton is our keys player. His favortie piece is chopsticks. In his spare time, Triton enjoys long walks on the beach.',
    fave: albums[2].songs[1]
  },

  {
    name: 'Proteus',
    image: 'http://mysticinvestigations.com/paranormal/wp-content/uploads/2013/08/merman1.jpg',
    bio: "Proteus plays drums. Because he plays drums, we can't call him a musician, but we're glad he's in the band. In his spare time, Proteus enjoys long walks on the beach.",
    fave: albums[1].songs[1]
  }
];

const printToDom = (stringToPrint, divId) => {
  let selectedDiv = document.getElementById(divId);
  if (selectedDiv !== null) {
    selectedDiv.innerHTML += stringToPrint;
  } else {
    
  }  
};

const albumBuilder = () => {
  let newString = "";
  let songsList1 = albums[0].songs;
    for (i = 0; i < albums.length; i++) {
      items = albums.indexOf(albums[i]);
      if(items % 2 === 0) {
        newString += `<div class="odd">`;
        newString += `<div>`;
        newString += `<div class="odd__titles">${albums[i].title}</div>`;
        newString += `<h4 class="odd__songs">Songs</h4>`
        for (j = 0; j < albums[i].songs.length; j++) {
          newString += `<div class="odd__songs">${albums[i].songs[j]}</div>`;
        }
        newString += `</div>`;
        newString += `<img class="odd__pic"src=${albums[i].image}>`;
        newString += `</div>`;
      }else{
        newString += `<div class="even">`;
        newString += `<div>`;
        newString += `<div class="even__titles">${albums[i].title}</div>`;
        newString += `<h4 class="even__songs">Songs</h4>`
        for (j = 0; j < albums[i].songs.length; j++) {
          newString += `<div class="even__songs">${albums[i].songs[j]}</div>`;
        }
        newString += `</div>`;
        newString += `<img class="even__pic"src=${albums[i].image}>`;
        newString += `</div>`;
      }
    }
    printToDom(newString, 'discography')
}

const showBio = () => {
  let bioDiv = document.getElementsByClassName('band__image');
  let bio = document.getElementsByClassName('band__bio');
  for (let i = 0; i < bioDiv.length; i++) {
    bioDiv[i].addEventListener('click', function () {
      if (bio[i].style.display === "none") {
        bio[i].style.display = "block";
      } else {
    bio[i].style.display = "none";
    }
    })
  }
};
// Band Member Card Creator
const createBandCards = () => {
  let newString = '';
  for (let i = 0; i < band.length; i++) {
        newString  += `<div class="member">`
          newString += `<h3>${band[i].name}</h3>`
          newString += `<img class="band__image" src=${band[i].image}></img>`
          newString += `<div id='bio'>`
            newString +=`<div class="band__bio" style='display: none'>`
              newString += `<p>${band[i].bio}</p>`
              newString += `<h5 class='fave__header'>Fave Deep Sea Jam</h5>`
              newString+= `<div class='band__fave'>"${band[i].fave}"</div>`
            newString += `</div>` 
          newString += `</div>`     
        newString += `</div>`;
  };
  printToDom(newString, 'bio__card');
  showBio();
};

createBandCards();
albumBuilder();
createTour();

