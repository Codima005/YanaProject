const URL_LEM = "http://localhost:3000/api/lemmatizer/";
const URL_STEM = "http://localhost:3000/api/stemmer/";
const URL_DIC = "http://localhost:3000/api/dictSearch/";

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

export async function getWordDic(word) {
  const result = await fetch(URL_DIC + word);
  const data = await result.json();

  return data.data;
}
