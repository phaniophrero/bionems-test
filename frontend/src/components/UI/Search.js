import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "./Button";

const Search = () => {
  const [keyword, setKeyword] = useState("");

  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      history.push(`/?keyword=${keyword}`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  };

  return (
    <form onSubmit={submitHandler} className="search--box">
      <input
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        className="search--input"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Search;
