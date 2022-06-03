import React from "react";
import { Type } from "./formType";

export function Form({ onInputChange, onBtnClick,onBtnClickDic }) {
  return (
    <form>
      <Type onInputChange={onInputChange} onBtnClick={onBtnClick} onBtnClickDic={onBtnClickDic} />
    </form>
  );
}
