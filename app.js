"use strict";
window.addEventListener("load", initApp);

async function initApp() {
  //1. Calls getData with an url argument
  //2. Store the returned value in the array personList
  //3. OBS: See the getData function to undrstand async and await
  try {
    const personList = await getData(
      "https://cederdorff.github.io/dat-js/05-data/southpark.json"
    );
    console.log(personList);
    personList.forEach(addCharacters);
    console.log(personList);
  } catch (error) {
    console.log("ERROR: " + error);
  }

  // document
  //   .querySelector("#select-color-theme")
  //   .addEventListener("change", modeSelected);
}

// We use await in order to wait for the response to complete. (we wait for the Proimise)
//If the repsonse time may be slow, i.e. if there is bad internet connection or the server is slow.
//Therefore, await makes sure we fetch all the data before moving on.
//async: whaiting for a promise is an asynchronous operation. Therefore we have to use async in combination with await
async function getData(dataSource) {
  console.log(dataSource);
  //Fetching means we are getting data from a server.
  const response = await fetch(dataSource);
  console.log(response);

  const data = await response.json();
  console.log(data);
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
  console.log("clickevent " + character);

  function characterClicked() {
    showCharacterModal(character);
    console.log("characterClicked:  ", character);
    showModal();
  }
}

function showCharacterModal(character) {
  console.log("character ", character);
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
  document.querySelector("#dialog-haircolor").textContent = character.hairColor;
  document.querySelector("#dialog-schoolgrade").textContent =
    character.schoolGrade;
  document.querySelector("#dialog-episodes").textContent = character.episodes;
  document.querySelector("#dialog-appearances").textContent =
    character.appearances;
  document.querySelector("#dialog-first-apperance").textContent =
    character.firstApperance;

  const description = tooYoungToDrink(character);
  document.querySelector("#dialog-age").textContent = description;
}

document
  .querySelector("#dialog-btn-close")
  .addEventListener("click", closeModal);

// document
//   .querySelector("#dialog-character")
//   .addEventListener("click", closeModal);

//Shows modal
function showModal() {
  document.querySelector("#dialog-character").showModal();
  document.querySelector(".overlay").classList.remove("hidden");
  document.querySelector("#dialog-character").style.opacity = "0";
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
    document.querySelector("#dialog-character").style.opacity = "0";
  }, 500);
}

function tooYoungToDrink(character) {
  let description = "";

  if (character.age <= 20) {
    description = `${character.name} is only 
    ${character.age} years old and not old enough to legally drink`;
  } else if (character.age > 20 && character.age < 60) {
    description = `${character.name} is enjoying
    the perks of being ${character.age} by having a drink or two`;
  } else if (character.age >= 60) {
    description = `${character.name} is too old
    for shitface fridays`;
  }
  return description;
}

// Color mode for page

// function modeSelected() {
//   const selectedColorMode = this.value;
//   changeMode(selectedColorMode);
// }

// function changeMode(mode) {
//   console.log("changeMode: " + mode);
//   resetColorMode();
//   if (mode === "light") {
//     document.body.classList.add(".light-mode.body");
//   } else if (mode === "standard") {
//     document.body.classList.add("standard");
//   }
// }

// function resetColorMode() {
//   document.body.classList = "";
// }
