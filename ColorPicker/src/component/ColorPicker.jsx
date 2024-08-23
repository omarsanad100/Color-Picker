import React, { useState } from "react";
import style from "./index.module.css";

const ColorPicker = () => {
  const [color, setColor] = useState("#8b4b4b");

  const handleColor = (event) => setColor(event.target.value);

  return (
    <div className={style.container}>
      <h1>Color Picker</h1>
      <div className={style.colorDisplay} style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
      </div>
      <label>Select Color</label>
      <input type="color" value={color} onChange={handleColor} />
    </div>
  );
};

export default ColorPicker;
