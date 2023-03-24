"use strict";
window.addEventListener("load", initApp);

async function initApp() {
  const jack = await getData(
    "https://raw.githubusercontent.com/YawHB/South_Park_Project/main/data/jack.json"
  );
  const jimmy = await getData(
    "https://raw.githubusercontent.com/Forkeh/South-Park-App/main/data/jimmy.json"
  );
  const paris = await getData(
    "https://raw.githubusercontent.com/Tunafan/southpark_db/main/South%20Park%20db/data/paris.json"
  );
  const obama = await getData(
    "https://raw.githubusercontent.com/AliHMohammad/Data-Ali/main/obamaChar.json"
  );
  const leopold = await getData(
    "https://raw.githubusercontent.com/Asbjoernemil/data-assignment/main/data/characters.json"
  );
  const tom = await getData(
    "https://raw.githubusercontent.com/svdf18/SPobjects/main/data/tomcruise.json"
  );
  const johnFKennedy = await getData(
    "https://raw.githubusercontent.com/rarogbennu/SP/master/data/jfk.json"
  );
  const kenneth = await getData(
    "https://raw.githubusercontent.com/Mart0808DK/Data-fetch-projekt/main/kenny.json"
  );
  const randy = await getData(
    "https://raw.githubusercontent.com/MadsFolkmann/Data-app-kode/main/data/randy.json"
  );

  addCharacters(jack);
  addCharacters(jimmy);
  addCharacters(paris);
  addCharacters(obama);
  addCharacters(leopold);
  addCharacters(tom);
  addCharacters(johnFKennedy);
  addCharacters(kenneth);
  addCharacters(randy);
}

async function getData(dataSource) {
  const response = await fetch(dataSource);
  const data = await response.json();
  return data;
}

function addCharacters(character) {
  const addHTML = /*html*/ `
  <article>
    <img src="${character.image}"> 
    <h1>Name: ${character.name}</h1>
    <h4>Catch phrase: ${character.catchPhrase}</h4> 
    <p>Occupation: ${character.occupation}</p>
    <p>Age: ${character.age}</p>
    <p>Gender: ${character.gender}</p> 
  </article>
  `;
  document
    .querySelector("#characters")
    .insertAdjacentHTML("beforeend", addHTML);

  document
    .querySelector("#characters article:last-child")
    .addEventListener("click", characterClicked);

  function characterClicked() {
    console.log(character);
    document.querySelector("#dialog-character").showModal();

    document.querySelector("#dialog-name").textContent = character.name;
    document.querySelector("#dialog-image").src = character.image;
    document.querySelector("#dialog-nickname").textContent = character.nickname;
    document.querySelector("#dialog-catchphrase").textContent =
      character.catchPhrase;
    document.querySelector("#dialog-occupation").textContent =
      character.occupation;
    document.querySelector("#dialog-age").textContent = character.age;
    document.querySelector("#dialog-voicedby").textContent = character.voicedBy;
    document.querySelector("#dialog-gender").textContent = character.gender;
    document.querySelector("#dialog-religion").textContent = character.religion;
    document.querySelector("#dialog-haircolor").textContent =
      character.hairColor;
    document.querySelector("#dialog-schoolgrade").textContent =
      character.schoolGrade;
    document.querySelector("#dialog-episodes").textContent = character.episodes;
    document.querySelector("#dialog-appearances").textContent =
      character.appearances;
    document.querySelector("#dialog-first-apperance").textContent =
      character.firstApperance;

    document
      .querySelector("#dialog-btn-close")
      .addEventListener("click", closeModal);
  }
}
//

function closeModal() {
  document.querySelector("#dialog-character").close();
}

// function showAllCharacters(list) {}
// showAllCharacters(character);

// function showCharacter(character) {}

// function showDialog(character) {}

// function closeDialog() {}

// function getDescription() {}
// function getDescription() {}
// function formatDate() {}
