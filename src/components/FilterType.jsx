import { useState, useEffect } from "react";

export default function Movie({ filterType, setfilterType }) {
  const [optionValue, setoptionValue] = useState("");
  useEffect(() => {
    setfilterType(optionValue);
  }, [optionValue, setoptionValue]);
  return (
    <div>
      <select onChange={(e) => setoptionValue(e.target.value)}>
        <option defaultValue={""}>Choose type</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episodes">Episodes</option>
      </select>
    </div>
  );
}
