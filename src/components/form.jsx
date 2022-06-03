import React from "react";
import { Type } from "./formType";

export function Form({ onInputChange, onBtnClick,onBtnClickDick }) {
  return (
    <form>
      <Type onInputChange={onInputChange} onBtnClick={onBtnClick} onBtnClickDick={onBtnClickDick} />
    </form>
  );
}
