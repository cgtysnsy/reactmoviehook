import { useState, useEffect } from "react";

export default function Search({ searchInput, setsearchInput }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setsearchInput(value);
  }, [value, setValue]);

  //const sendInputData = (event) => {
  // setValue(event.target.value);
  //};
  return (
    <div>
      <form action="">
        <label htmlFor="search" className="header">
          <span>Search:</span>
          <input
            className="form-control"
            type="text"
            name="search"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </label>
      </form>
    </div>
  );
}
