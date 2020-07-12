console.log("hello wrold");

const resultFromFetch = fetch("https://pokeapi.co/api/vs/pokemon/1").then(
  (res) => {
    console.log(res);
  }
);
console.log(resultFromFetch);
