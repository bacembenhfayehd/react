import React, { useState } from "react";

function Search({ filterImages }) {
  const [query, setQuery] = useState("");

  const handelChange = (e) => {
    setQuery(e.target.value);
    filterImages(e.target.value);
  };
  return (
    <div>
      <input
        onChange={handelChange}
        type="text"
        value={query}
        placeholder="serach image by title"
      />
    </div>
  );
}

export default Search;
