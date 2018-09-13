const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
  };

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
}

albumBuilder();
