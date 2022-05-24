import React from "react";

export function TestFunc() {
  return (
    <div className="mainContainer">
      <div className="formClass">
        <form>
          <p className="typePlace">
            <label htmlFor="type"></label>
            <input
              className="inputTest"
              type="text"
              name="type"
              placeholder="Please type the word"
            />
            <button className="btn" type="submit">
              Analyze word
            </button>
          </p>
          <h3 className="orTest">OR YOU CAN</h3>
          <p className="uploadPlace">
            <label for="input-file" class="input-file-button">
              <span class="input-file-icon">
                <i class="fas fa-file-upload"></i>
              </span>
              <span class="input-file-button-text">Tap to upload a file</span>
            </label>
            <input
              type="file"
              name="file"
              id="input-file"
              class="input input-file-level"
            />
            <button className="btn btnSend" type="submit">
              Analyze file
            </button>
          </p>
        </form>
      </div>
      <span>
        <p className="footerText">Your result:</p>
      </span>
      <div className="resultBlock">
        <div className="resultLeft">
          <h2 className="resultText">шото тут</h2>
        </div>
        <div className="resultRight">
          <h2 className="resultText">шото там</h2>
        </div>
      </div>
    </div>
  );
}
