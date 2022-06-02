import React from "react";

export function File({ onBtnClick }) {
  return (
    <p className="uploadPlace">
      <label htmlFor="input-file" className="input-file-button">
        <span className="input-file-icon">
          <i className="fas fa-file-upload"></i>
        </span>
        <span className="input-file-button-text">Tap to upload a file</span>
      </label>
      <input
        type="file"
        name="file"
        id="input-file"
        className="input input-file-level"
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
