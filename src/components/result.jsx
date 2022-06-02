import React from "react";

export function Result({ lem, stem }) {
  return (
    <div className="resultBlock">
      <div className="resultLeft">
        <p>LEMATIZATION</p>
        {lem.map((item, index) => (
          <h3 className="resultText" key={index}>
            {item}
          </h3>
        ))}
      </div>
      <div className="resultCentr">
        <p>DICTIONARY</p>
        {lem.map((item, index) => (
          <h3 className="resultText" key={index}>
            {item}
          </h3>
        ))}
      </div>
      <div className="resultRight">
        <p>STEMMING</p>
        {stem.map((item, index) => (
          <h3 className="resultText" key={index}>
            {item}
          </h3>
        ))}
      </div>
    </div>
  );
}
