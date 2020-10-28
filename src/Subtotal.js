import React from "react";
import "./Subtotal.css";
import CurrencyForamat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyForamat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order Contain a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button> Processd to checkout</button>
    </div>
  );
}

export default Subtotal;
