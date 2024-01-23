// En tu archivo Item6.tsx
import React, { ForwardedRef } from "react";

const hobbies = require("../../assets/Hobbies.png");

// Define las props si las necesitas. En este ejemplo, no hay props adicionales,
// por lo que se usa un objeto vacío.
interface Item6Props {}

export const Item6 = React.forwardRef<HTMLDivElement, Item6Props>((props, ref) => {
  return (
    <div ref={ref} id="item6" className="grid-item">
      <h1>Hobbies</h1>
      <img src={hobbies} />
    </div>
  );
});
