import React from "react";


export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(event) => onChangeFilter(event.target.value)}
      />
    </div>
  );
}


