"use strict";
window.addEventListener("load", initApp);

async function initApp() {
  const personList = await getData(
    "https://cederdorff.github.io/dat-js/05-data/southpark.json"
  );

  personList.forEach(addCharacters);
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
    showModal();

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

    tooYoungToDrink(character);
    document
      .querySelector("#dialog-btn-close")
      .addEventListener("click", closeModal);
    document
      .querySelector("#dialog-character")
      .addEventListener("click", closeModal);
  }
}
//Shows modal
function showModal() {
  document.querySelector("#dialog-character").showModal();
  document.querySelector(".overlay").classList.remove("hidden");
  setTimeout(() => {
    document.querySelector("#dialog-character").style.opacity = "1";
    document.querySelector(".overlay").style.opacity = "1";
  }, 50);
}
//Close modal
function closeModal() {
  document.querySelector("#dialog-character").close();

  document.querySelector(".overlay").style.opacity = "0";
  setTimeout(() => {
    document.querySelector(".overlay").classList.add("hidden");
  }, 500);
}

function tooYoungToDrink(character) {
  if (character.age <= 20) {
    document.querySelector(
      "#dialog-age"
    ).textContent = `${character.name} is only 
    ${character.age} years old and not old enough to legally drink`;
  } else if (character.age > 20 && character.age < 60) {
    document.querySelector(
      "#dialog-age"
    ).textContent = `${character.name} is enjoying
    the perks of being ${character.age} by having a drink or two`;
  } else if (character.age >= 60) {
    document.querySelector(
      "#dialog-age"
    ).textContent = `${character.name} is too old
    for shitface fridays`;
  }
}

// function showAllCharacters(list) {}
// showAllCharacters(character);

// function showCharacter(character) {}

// function showDialog(character) {}

// function closeDialog() {}

// function getDescription() {}
// function getDescription() {}
// function formatDate() {}
