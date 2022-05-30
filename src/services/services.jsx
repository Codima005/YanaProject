const URL_LEM_PROXY = "http://localhost:3000/api/lemmatizer/свекруха";
// const URL_LEM = "http://localhost:3000/";
// const URL_STEM = "http://localhost:3000/api/stemmer/";

export async function getWord() {
    const result = await fetch(URL_LEM_PROXY
        , {
        mode:"no-cors"
    }
    );
    const data = await result.json();
    console.log(data)
    return data;
  }