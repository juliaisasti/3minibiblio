const btnAdd = document.querySelector(".btn-add");
const divContainer = document.getElementById("div-container")

btnAdd.addEventListener("click", addBooks)

function addBooks(){
    const newDiv = document.createElement("div")
    const newCard = document.createElement("article")
    const newBook = document.createElement("ul")
    const newInfo = document.createElement("li")
    const addText = document.createTextNode("Este es tu texto")
    console.log("add");
    newDiv.classList.add("div-shadow");
    divContainer.appendChild(newDiv);
    newDiv.appendChild(newCard)
    newCard.appendChild(newBook)
    newBook.appendChild(newInfo)
    newInfo.appendChild(addText)

    const datos = ["Patatas", "Pescado", "Naranja", "Queso"]
    const lista = `<ul>
                    <li>${datos[0]}</li>
                    <li>${datos[1]}</li>
                    <li>${datos[2]}</li>
                    <li>${datos[3]}</li>
                  </ul>`;
    document.getElementById("lista").innerHTML = lista;
}



/*
const books = [
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "images/things-fall-apart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "images/fairy-tales.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "images/the-divine-comedy.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
    {
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "imageLink": "images/the-epic-of-gilgamesh.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700
    },
    {
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "imageLink": "images/the-book-of-job.jpg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600
    }]

    document.getElementsByClassName("div") function changeColors() {

    }*/