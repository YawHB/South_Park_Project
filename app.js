"use strict";
window.addEventListener("load", initApp);

async function initApp() {
  //1. Calls getData with an url argument
  //2. Store the returned value in the array personList
  //3. OBS: See the getData function to undrstand async and await
  const personList = await getData(
    "https://cederdorff.github.io/dat-js/05-data/southpark.json"
  );

  // for (const character of personList) {
  //   addCharacters(character)
  // }
  //Loops through each object in personList an sends the object to the 'addCharacters' function
  personList.forEach(addCharacters);
}

// We use await in order to wait for the response to complete. (we wait for the Proimise)
//If the repsonse time may be slow, i.e. if there is bad internet connection or the server is slow.
//Therefore, await makes sure we fetch all the data before moving on.
//async: whaiting for a promise is an asynchronous operation. Therefore we have to use async in combination with await
async function getData(dataSource) {
  //Fetching means we are getting data from a server.
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
    showCharacterModal(character);
    showModal();

    function showCharacterModal(character) {
      document.querySelector("#dialog-name").textContent = character.name;
      document.querySelector("#dialog-image").src = character.image;
      document.querySelector("#dialog-nickname").textContent =
        character.nickname;
      document.querySelector("#dialog-catchphrase").textContent =
        character.catchPhrase;
      document.querySelector("#dialog-occupation").textContent =
        character.occupation;
      document.querySelector("#dialog-age").textContent = character.age;
      document.querySelector("#dialog-voicedby").textContent =
        character.voicedBy;
      document.querySelector("#dialog-gender").textContent = character.gender;
      document.querySelector("#dialog-religion").textContent =
        character.religion;
      document.querySelector("#dialog-haircolor").textContent =
        character.hairColor;
      document.querySelector("#dialog-schoolgrade").textContent =
        character.schoolGrade;
      document.querySelector("#dialog-episodes").textContent =
        character.episodes;
      document.querySelector("#dialog-appearances").textContent =
        character.appearances;
      document.querySelector("#dialog-first-apperance").textContent =
        character.firstApperance;
    }

    tooYoungToDrink(character);

    document
      .querySelector("#dialog-btn-close")
      .addEventListener("click", closeModal);
    // document
    //   .querySelector("#dialog-character")
    //   .addEventListener("click", closeModal);
  }
}
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

const description = tooYoungToDrink(character);
document.querySelector("#dialog-character").textContent = description;

description = function tooYoungToDrink() {
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
  return description;
};
