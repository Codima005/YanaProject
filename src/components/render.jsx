import React, { useState, useEffect } from "react";
import { getWordLem, getWordStem } from "../services/services";
import { Result } from "./result";
import { Form } from "./form";

export function RenderFunc() {
  const [lem, setLem] = useState([]);
  const [stem, setStem] = useState([]);
  const [word, setWord] = useState("");

  function separateWords(stringa) {
    let separator = ", ";
    let arrWords = stringa.split(separator);
    return arrWords;
  }

  async function getArrElementsLem(wordArr) {
    let lemArr = [];
    for (let i = 0; i < wordArr.length; i++) {
      const element = wordArr[i];
      let resLem = await getWordLem(element);
      lemArr.push(resLem);
    }

    return lemArr;
  }

  async function getArrElementsStem(wordArr) {
    let StemArr = [];
    for (let i = 0; i < wordArr.length; i++) {
      const element = wordArr[i];
      let resStem = await getWordStem(element);
      StemArr.push(resStem);
    }

    return StemArr;
  }

  async function onBtnClick(e) {
    e.preventDefault();
    let newArr = await separateWords(word);
    let lemArr = await getArrElementsLem(newArr);
    let stemArr = await getArrElementsStem(newArr);
    setLem(lemArr);
    setStem(stemArr);
  }

  function onInputChange(e) {
    setWord(e.target.value);
  }

  return (
    <div className="mainContainer">
      <div className="formClass">
        <Form onInputChange={onInputChange} onBtnClick={onBtnClick} />
      </div>
      <span>
        <p className="footerText">Your result:</p>
      </span>

      <Result lem={lem} stem={stem} />
    </div>
  );
}
