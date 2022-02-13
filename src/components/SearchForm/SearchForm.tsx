import * as React from "react";

interface IProps {
  sectionId: string;
  findItem: (sectionId: string, name: string) => void;
}

const SearchFrom: React.FC<IProps> = ({ findItem, sectionId }) => {
  const [inpVal, setInpVal] = React.useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    findItem(sectionId, inpVal);
    setInpVal("");
  };
  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inpVal}
        onChange={(e) => setInpVal(e.target.value)}
        className="searchForm__inp"
        placeholder="Search"
      />
    </form>
  );
};

export default SearchFrom;
