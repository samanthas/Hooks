import {React, useContext} from "react";
import { MixtapeContext } from "./MixtapeContext"

export const Controls = () => {
  const {genre, setGenre, sortOrder, setSortOrder} = useContext(MixtapeContext);

  const handleChange = event => {
    setGenre(event.target.value);
  }

  const handleClick = () => {
    setSortOrder(sortOrder === "ascending" ? "descending" : "ascending")
  }

  return (
    <div className="controls">
      <select value={genre} onChange={event => handleChange(event)}>
        <option value={"all"}>All</option>
        <option value={"alt"}>alt</option>
        <option value={"dance"}>dance</option>
        <option value={"rock"}>Rock</option>
        <option value={"pop"}>Pop</option>
      </select>
      <button onClick={() => handleClick()}>
        {sortOrder}
      </button>
    </div>
  );
};
