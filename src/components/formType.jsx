import React from "react";

export function Type({ onInputChange, onBtnClick }) {
  return (
    <p className="typePlace">
      <label htmlFor="type"></label>
      <input
        className="inputTest"
        type="text"
        name="type"
        placeholder="Please type the word"
        onChange={onInputChange}
      />
      <div className="divBtn">
        <button className="btn btnL" onClick={onBtnClick}>
          Use methods
        </button>
        <button className="btn btnR" onClick={onBtnClick}>
          Use dictionary
        </button>
      </div>
    </p>
  );
}
