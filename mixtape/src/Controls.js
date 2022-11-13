import {React, useContext} from "react";
import { MixtapeContext } from "./MixtapeContext"

export const Controls = () => {
  const {genre, setGenre, sortOrder, setSortOrder} = useContext(MixtapeContext);

  const handleChange = event => {
    setGenre(event.target.value);
  }

  const handleClick = () => {
    setSortOrder(sortOrder === "Ascending" ? "Descending" : "Ascending")
  }

  return (
    <div className="controls">
      <select value={genre} onChange={event => handleChange(event)}>
        <option value={"All"}>All</option>
        <option value={"Alt"}>Alt</option>
        <option value={"Dance"}>Dance</option>
        <option value={"Rock"}>Rock</option>
        <option value={"Pop"}>Pop</option>
      </select>
      <button onClick={() => handleClick()}>
        {sortOrder}
      </button>
    </div>
  );
};
