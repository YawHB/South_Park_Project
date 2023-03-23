"use strict";
const jackTenorman = {
  name: "Jack Tenorman",
  nickname: "undefined",
  image:
    "https://southparkstudios.mtvnimages.com/shared/characters/adults/jack-tenorman.png?height=165",
  occupation: "Former NFL player for Denver Broncos",
  age: 43,
  voicedBy: "Trey Parker",
  gender: "male",
  religion: "undefined",
  catchPhrase: "undefined",
  hairColor: "Red",
  schoolGrade: "undefined",
  episodes: "S05E01, S14E06",
  appearances: 2,
  firstApperance: "S05E01",
};

addCharacters(jackTenorman);
addCharacters(jackTenorman);
addCharacters(jackTenorman);
addCharacters(jackTenorman);
addCharacters(jackTenorman);
addCharacters(jackTenorman);
addCharacters(jackTenorman);
addCharacters(jackTenorman);
addCharacters(jackTenorman);
addCharacters(jackTenorman);
addCharacters(jackTenorman);
addCharacters(jackTenorman);
addCharacters(jackTenorman);
addCharacters(jackTenorman);

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

function closeModal() {
  document.querySelector("#dialog-character").close();
}

function getData() {
  const data = [];
  return data;
}

// function showAllCharacters(list) {}
// showAllCharacters(character);

// function showCharacter(character) {}

// function showDialog(character) {}

// function closeDialog() {}

// function getDescription() {}
// function getDescription() {}
// function formatDate() {}
