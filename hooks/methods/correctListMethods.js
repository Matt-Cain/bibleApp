import toWords from "./toWords";

export const cleanSpokenWords = (spokenWords) => {
  let cleanSpokenWords = spokenWords.toLowerCase().split(" ");
  const clean = cleanNumbers(cleanSpokenWords);
  return clean;
};

const cleanNumbers = (cleanSpokenWords) => {
  let cleanNumbers = cleanSpokenWords;
  for (let i = 0; i < cleanSpokenWords.length; i++) {
    var matches = cleanSpokenWords[i].match(/\d+/g);
    if (matches != null) {
      const split = cleanSpokenWords[i].split(" ");
        if (split.length === 1) { cleanSpokenWords[i] = toWords(cleanSpokenWords[i]) }
        else{ for (let j = 0; j < split.length)}
    }
  }

  return cleanNumbers;
};
