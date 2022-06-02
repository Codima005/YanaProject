const URL_LEM = "http://localhost:3000/api/lemmatizer/";
const URL_STEM = "http://localhost:3000/api/stemmer/";

export async function getWordLem(word) {
  const result = await fetch(URL_LEM + word);
  const data = await result.json();

  return data.data;
}

export async function getWordStem(word) {
  const result = await fetch(URL_STEM + word);
  const data = await result.json();

  return data.data;
}
