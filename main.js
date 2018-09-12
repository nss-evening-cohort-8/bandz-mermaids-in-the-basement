let band = [
  {
    name: 'Aegaeon',
    image: 'https://orig00.deviantart.net/ab4b/f/2013/126/1/a/merman_by_annemaria48-d642or4.jpg',
    bio: 'blah, blah, blah'
  },

  {
    name: 'Ladon',
    image: 'https://i.pinimg.com/originals/16/3d/95/163d95f8b269f47ee0cfca91934dff57.jpg',
    bio: 'blah, blah, blah'
  },

  {
    name: 'Nereus',
    image: 'https://cache.desktopnexus.com/thumbseg/458/458642-bigthumbnail.jpg',
    bio: 'blah, blah, blah'
  },

  {
    name: 'Pan',
    image: 'https://i.warosu.org/data/tg/img/0294/29/1389487235150.png',
    bio: 'blah, blah, blah'
  },

  {
    name: 'Triton',
    image: 'https://ssl.c.photoshelter.com/img-get2/I0000Xu80bDWLL6c/fit=1000x750/Project-Mermaids-78.jpg',
    bio: 'blah, blah, blah'
  },

  {
    name: 'Proteus',
    image: 'http://mysticinvestigations.com/paranormal/wp-content/uploads/2013/08/merman1.jpg',
    bio: 'blah, blah, blah'
  }
];


const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
  };

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
