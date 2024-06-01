const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  let results = [];

  //   makes fruit list lowercase
  for (let i = 0; i < fruit.length; i++) {
    fruit[i] = fruit[i].toLowerCase();
  }

  // filters each char passed through searchHandler()
  //   pushes to result arr
  const fruitMap = fruit.filter((val) => {
    return val.indexOf(str.toLowerCase()) !== -1;
  });

  results.push(fruitMap);

  showSuggestions(results, str);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz";
let chars = "";

function searchHandler(e) {
  let inputKey = e.key;

  //   adds each key to chars string
  //   if key = backspace, will updat chars to what is in input box
  if (alphabet.indexOf(inputKey.toLowerCase()) !== -1) {
    chars += inputKey;
  } else if (inputKey === "Backspace") {
    chars = input.value;
  }
  search(chars);
}

function showSuggestions(results, inputVal) {
  const [result] = results;

  if (inputVal === "") {
  } else {
    result.forEach((val) => {
      // bolds in search
      const regex = new RegExp(inputVal, "gi");
      newVal = val.replace(regex, `<strong>$&</strong>`);
      console.log(newVal);
      // creates li and appends to reult list
      const newLi = document.createElement("li");
      // sets first letter to uppercase
      // let valUpper = newVal[0].toUpperCase();
      // let valRest = newVal.slice(1);
      // let valFull = valUpper + valRest;
      newLi.innerHTML = newVal;
      suggestions.appendChild(newLi);
      // removes result list when another char is added
      input.addEventListener("keyup", () => suggestions.removeChild(newLi));
    });
  }
}

// fills input box with suggestion when selected
function useSuggestion(e) {
  const suggestionsDiv = document.querySelector(".suggestions");
  // replaces text in input box with target text
  targetVal = e.target.innerText;
  input.value = targetVal;
  // removes suggestions that no longer match
  suggestionsDiv.removeChild(suggestions);
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
