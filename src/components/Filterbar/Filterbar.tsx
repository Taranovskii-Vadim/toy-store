import * as React from "react";
import { nanoid } from "nanoid";
import SearchFrom from "../SearchForm/SearchForm";

const getAllTypes = (arr: Array<string>) => {
  return arr.map((item) => ({ id: nanoid(5), type: item }));
};

interface IProps {
  types: Array<string>;
  filterStuff: (sectionId: string, filter: string | undefined) => void;
  sectionId: string;
  findItem:(sectionId:string,name:string)=>void
}

const Filterbar: React.FC<IProps> = ({ types, filterStuff, sectionId,findItem }) => {
  return (
    <div className="filterbar">
      <span
        className="filterbar__item active"
        onClick={filterStuff.bind(null, sectionId, undefined)}
      >
        Все
      </span>
      {getAllTypes(types).map((item) => (
        <span
          key={item.id}
          onClick={filterStuff.bind(null, sectionId, item.type)}
          className="filterbar__item"
        >
          {item.type}
        </span>
      ))}
      <SearchFrom sectionId={sectionId} findItem={findItem} />
    </div>
  );
};

export default Filterbar;
