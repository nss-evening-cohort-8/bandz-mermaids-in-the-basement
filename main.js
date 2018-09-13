const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
  };

const albums = [
  {
    title: "Neptune & The Vainy-Armed Apprentice",
    image: "https://www.squidge.org/~mrs_fish/fakes/xf/fantasy/mermen-warriors.jpg",
    songs: ["Song1", "Song2", "Song3"]
  },
  {
    title: "Album",
    image: "https://i.pinimg.com/originals/88/7a/1a/887a1a4810b4327d7795963e1c183ab1.jpg",
    songs: ["Song4", "Song5", "Song6"]
  },
  {
    title: "Album",
    image: "https://img.fireden.net/tg/image/1517/62/1517621326053.jpg",
    songs: ["Song7", "Song8", "Song9"]
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
