import React, {useState, useEffect} from  "react";
import { getWord } from "../services/services";



export function TestFunc() {

  const [response, setResponse] = useState('')

async function onBtnClick(e){
  e.preventDefault();
  getWord().then((res)=> setResponse(res)
  )
  
}

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
            <button className="btn"  onClick={onBtnClick}>
              Analyze word
            </button>
          </p>
          <h3 className="orTest">OR YOU CAN</h3>
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
          <h2 className="resultText">
            {/* {response} */}
            </h2>
        </div>
        <div className="resultRight">
          <h2 className="resultText">шото там</h2>
        </div>
      </div>
    </div>
  );
}
