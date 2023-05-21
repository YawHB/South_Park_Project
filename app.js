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
    personList.forEach(addCharacters);
  } catch (error) {
    console.log("ERROR: " + error);
  }
}

// We use await in order to wait for the response to complete. (we wait for the Proimise)
//If the repsonse time may be slow, i.e. if there is bad internet connection or the server is slow.
//Therefore, await makes sure we fetch all the data before moving on.
//async: waiting for a promise is an asynchronous operation. Therefore we have to use async in combination with await
async function getData(dataSource) {
  //Fetching means we are getting data from a server.
  const response = await fetch(dataSource);
  //Converting from json to js syntax
  const data = await response.json();
  return data;
}
//Adds the article elements
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
  // The current element is placed as the last character in the section element
  document
    .querySelector("#characters")
    .insertAdjacentHTML("beforeend", addHTML);
  // The last character gets a click event that opens the modul for that character
  document
    .querySelector("#characters article:last-child")
    .addEventListener("click", characterClicked);

  function characterClicked() {
    //Calls showCharacter with the object clicked
    showCharacterModal(character);
    //Calls the showModal function
    showModal();
  }
}

function showCharacterModal(character) {
  //Adds all the properties in the modal window
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

  // Calls the tooYoungToDring function. the function returns a description based on age and name. Then sets that description to dialog age.
  const description = tooYoungToDrink(character);
  document.querySelector("#dialog-age").textContent = description;
}

//Closes the modal on the given dialog window
document
  .querySelector("#dialog-btn-close")
  .addEventListener("click", closeModal);

// document
//   .querySelector("#dialog-character")
//   .addEventListener("click", closeModal);

//Shows modal
function showModal() {
  document.querySelector("#dialog-character").showModal();
  //Shows overlay
  document.querySelector(".overlay").classList.remove("hidden");
  // makes the modal window completely see through
  document.querySelector("#dialog-character").style.opacity = "0";
  // setTimeout waits 50ms then sets the modal window and overlay to 100% opacity
  setTimeout(() => {
    document.querySelector("#dialog-character").style.opacity = "1";
    document.querySelector(".overlay").style.opacity = "1";
  }, 50);
}
//Close modal
function closeModal() {
  //closes modal when btn clicked
  document.querySelector("#dialog-character").close();
  // makes the modal window completely see through
  document.querySelector(".overlay").style.opacity = "0";
  setTimeout(() => {
    // Removes overlay and hides dialog window
    document.querySelector(".overlay").classList.add("hidden");
    document.querySelector("#dialog-character").style.opacity = "0";
  }, 500);
}

// Checks what age a character is and returns a description based on age and name
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

//**********************************************
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
