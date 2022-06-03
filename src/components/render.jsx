import React, { useState } from "react";
import { getWordLem, getWordStem, getWordDick } from "../services/services";
import { Result } from "./result";
import { Form } from "./form";
import logo from "../img/e-learning.png"
import logoA from "../img/a-alphabet.png"
import logoN from "../img/n-alphabet.png"
import logoP from "../img/p-alphabet.png"
import logoY from "../img/y-alphabet.png"

export function RenderFunc() {
  const [lem, setLem] = useState([]);
  const [stem, setStem] = useState([]);
  const [dick, setDick] = useState([]);
  const [word, setWord] = useState("");

  function separateWords(stringa) {
    let arrWords = stringa.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/);
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

  async function getArrElementsDick(wordArr) {
    let DicArr = [];
    for (let i = 0; i < wordArr.length; i++) {
      const element = wordArr[i];
      let resStem = await getWordDick(element);
      DicArr.push(resStem);
    }

    return DicArr;
  }

  async function onBtnClick(e) {
    e.preventDefault();
    let newArr = await separateWords(word);
    let lemArr = await getArrElementsLem(newArr);
    let stemArr = await getArrElementsStem(newArr);
    setLem(lemArr);
    setStem(stemArr);
  }

  async function onBtnClickDick(e) {
    e.preventDefault();
    let newArr = await separateWords(word);
    let DicArr = await getArrElementsDick(newArr);
    setDick(DicArr);
  }

  function onInputChange(e) {
    setWord(e.target.value);
  }

  return (
    <div className="mainContainer">
      <div className="logo">
      <img src={logo} alt="sorry" className="imgLogo" />
      <img src={logoY} alt="sorry" className="imgLogo" />
      <img src={logoA} alt="sorry" className="imgLogo" />
      <img src={logoN} alt="sorry" className="imgLogo" />
      <img src={logoA} alt="sorry" className="imgLogo" />
      </div>
      <div className="logo">
      <img src={logoA} alt="sorry" className="imgLogo" />
      <img src={logoP} alt="sorry" className="imgLogo" />
      <img src={logoP} alt="sorry" className="imgLogo" />
      </div>
      <div className="formClass">
        <Form
          onInputChange={onInputChange}
          onBtnClick={onBtnClick}
          onBtnClickDick={onBtnClickDick}
        />
      </div>
      <span>
        <p className="footerText">Your results:</p>
      </span>

      <Result lem={lem} stem={stem} dick={dick} />
    </div>
  );
}
