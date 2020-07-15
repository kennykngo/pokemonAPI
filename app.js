// DOM Objects
const mainScreen = document.querySelector(".main-screen");

const pokeName = document.querySelector(".poke-name");
const pokeId = document.querySelector(".poke-id");
const pokeFrontImage = document.querySelector(".poke-front-image");
const pokeBackImage = document.querySelector(".poke-back-image");
const pokeTypeOne = document.querySelector(".poke-type-one");
const pokeTypeTwo = document.querySelector(".poke-type-two");
const pokeWeight = document.querySelector(".poke-weight");
const pokeHeight = document.querySelector(".poke-height");

fetch("https://pokeapi.co/api/v2/pokemon/4")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    mainScreen.classList.remove("hide");
    pokeName.textContent = data["name"];
    pokeId.textContent = data["id"];
    pokeWeight.textContent = data["weight"];
    pokeHeight.textContent = data["height"];

    const dataTypes = data["types"];
    const dataFirstType = dataTypes[0];
    const dataSecondType = dataTypes[1];
    pokeTypeOne.textContent = dataFirstType["type"]["name"];

    if (dataSecondType) {
      pokeTypeTwo.classList.remove("hide");
      pokeTypeTwo.textContent = dataSecondType["type"]["name"];
    } else {
      pokeTypeTwo.classList.add("hide");
      pokeTypeTwo.textContent = "";
    }
    console.log(dataTypes);
    pokeFrontImage.src = data["sprites"]["front_default"] || "";
    pokeBackImage.src = data["sprites"]["back_default"] || "";
  });
