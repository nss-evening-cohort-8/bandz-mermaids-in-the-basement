let band = [
  {
    name: 'Aegaeon',
    image: 'https://orig00.deviantart.net/ab4b/f/2013/126/1/a/merman_by_annemaria48-d642or4.jpg',
    bio: "Aegaeon sings loudly and proudly. He couldn't hit the key of the song if he tried, but DAY-UM, he's a looker. In his spare time Aegaeon enjoys long walks on the beach."
  },

  {
    name: 'Ladon',
    image: 'https://i.pinimg.com/originals/16/3d/95/163d95f8b269f47ee0cfca91934dff57.jpg',
    bio: "Ladon plays bass. It's a good thing that a bass only has 4 strings, played one at a time, because Ladon is dumber than a box of rocks. In his spare time, Ladon enjoys long walks on the beach."
  },

  {
    name: 'Nereus',
    image: 'https://cache.desktopnexus.com/thumbseg/458/458642-bigthumbnail.jpg',
    bio: "Nereus plays pan flute. He plays it poorly, but his mom's house has a basement were we can rehearse. In his spare time, Nereus enjoys long walks on the beach."
  },

  {
    name: 'Pan',
    image: 'https://i.warosu.org/data/tg/img/0294/29/1389487235150.png',
    bio: 'Pan plays guitar. Loudly. Sometimes, when the spirit moves him, he smashes said guitar. In his spare time, Pan enjoys long walks on the beach.'
  },

  {
    name: 'Triton',
    image: 'https://ssl.c.photoshelter.com/img-get2/I0000Xu80bDWLL6c/fit=1000x750/Project-Mermaids-78.jpg',
    bio: 'Triton is our keys player. His favortie piece is chopsticks. In his spare time, Triton enjoys long walks on the beach.'
  },

  {
    name: 'Proteus',
    image: 'http://mysticinvestigations.com/paranormal/wp-content/uploads/2013/08/merman1.jpg',
    bio: "Proteus plays drums. Because he plays drums, we can't call him a musician, but we're glad he's in the band. In his spare time, Proteus enjoys long walks on the beach."
  }
];

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

const printToDom = (stringToPrint, divId) => {
  let selectedDiv = document.getElementById(divId);
  if (selectedDiv !== null) {
    selectedDiv.innerHTML += stringToPrint;
  } else {
    
  }  
};

const albumBuilder = () => {
  let newString = "";
  let index1 = "";
    for (i = 0; i < albums.length; i++) {
      items = albums.indexOf(albums[i]);
      if(index1 % 2 === 0) {
        newString += `<div class="even">`;
        newString += `Title: ${albums[i].title}<br>`;
        newString += `Image: <img src=${albums[i].image}><br>`;
        newString += `Songs: ${albums[i].songs}<br>`;
        newString += `</div><br>`;
      }else{
        newString += `<div class="odd">`;
        newString += `Title: ${albums[i].title}<br>`;
        newString += `Image: <img src=${albums[i].image}><br>`;
        newString += `Songs: ${albums[i].songs}<br>`;
        newString += `</div><br>`;
      }
    }
    printToDom(newString, 'test')
};

// Band Member Card Creator
const createBandCards = () => {
  let newString = ''
  for (let i = 0; i < band.length; i++) {
        newString += `<div class="member">`
          newString += `<h4>${band[i].name}</h4>`
          newString += `<img src=${band[i].image}></img>`
          newString +=`<div class="band__bio"`
            newString += `<p>${band[i].bio}</p>`
          newString += `</div>`  
        newString += `</div>`;
  };
  printToDom(newString, 'bio__card');
};
    createBandCards();
    albumBuilder();
