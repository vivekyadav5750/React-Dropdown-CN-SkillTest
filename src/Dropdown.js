import React from "react";
import { useState } from "react";

function Dropdown(props) {
  const [hover, setHover] = useState(false);
  const items = props.items;

  return (
    <div className="p-2">
      <select className="p-2 m-1 rounded-md" onMouseEnter={() => setHover(true)}  >
        <option value="">--Select--</option>
      </select>

      {hover && (<ul>
        {items.map((item,index) => (
          <li className="p-2 rounded-md hover:bg-slate-400 bg-white" key={index} onClick={() => setHover(false)}>
            {item}
            </li>
        ))}
      </ul>)}
    </div>
  );
}

export default Dropdown;
