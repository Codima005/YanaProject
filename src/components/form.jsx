import React from "react";
import { File } from "./formFile";
import { Type } from "./formType";

export function Form({ onInputChange, onBtnClick }) {
  return (
    <form>
      <Type onInputChange={onInputChange} onBtnClick={onBtnClick} />
      <h3 className="orTest">OR YOU CAN</h3>
      <File onBtnClick={onBtnClick} />
    </form>
  );
}
