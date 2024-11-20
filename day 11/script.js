// 01.
const str1 = " gfuh ieiuei ";
const firstFiveLetters = str1.trim().substring(0, 5);
console.log(`First five letters: ${firstFiveLetters}`);

// 02.
const str2 = "hduej dij";
const length = String(str2.length);
console.log(`Length : ${length}`);

// 03.
const str3 = "   biji jdo   ";
const trimmed = str3.trim();
console.log(`Trimmed: '${trimmed}'`);

// 04.
const originalString = "Hello World";
const searchWord = "World";
const replacementWord = "JavaScript";
const replacedString = originalString.replace(searchWord, replacementWord);
console.log(`Replaced string: '${replacedString}'`);

// 05.
const implicitCoercion1 = 89 + "hello" + 90 / 9;
const implicitCoercion2 = true || false;
console.log(
  `Implicit coercion results: ${implicitCoercion1}, ${implicitCoercion2}`
);

// 06.
const animal = {
  name: "Lion",
  species: "Panthera leo",
  age: 5,
  habitat: "Savannah",
  sound: function () {
    return "Roar";
  },
};

// Displaying the animal object in console
console.log(
  `Animal: ${animal.name}, Species: ${animal.species}, Age: ${
    animal.age
  }, Habitat: ${animal.habitat}, Sound: ${animal.sound()}`
);
