import React, { useState , memo} from "react";
import "./styles.css";

export const Son = memo(({ numero, increment }) => {
  console.log("again reload...");
  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => {
        increment(numero);
      }}
    >
      {numero}
    </button>
  );
}
)
export default Son;
