let band = [
  {
    name: 'member 1',
    image: 'https://orig00.deviantart.net/ab4b/f/2013/126/1/a/merman_by_annemaria48-d642or4.jpg',
    bio: 'blah, blah, blah'
  },

  {
    name: '',
    image: '',
    bio: ''
  },

  {
    name: '',
    image: '',
    bio: ''
  },

  {
    name: '',
    image: '',
    bio: ''
  },

  {
    name: '',
    image: '',
    bio: ''
  },

  {
    name: '',
    image: '',
    bio: ''
  }
]


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
