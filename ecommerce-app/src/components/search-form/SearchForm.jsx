import React, { useRef } from "react";
// import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

import "./searchform.css";

const SearchForm = () => {
  const formRef = useRef(null);

  // let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // const searchTerm = formRef.current["searchTerm"].value;

    // if (searchTerm) {
    // navigate(`/posts/search?searchQuery=${searchTerm || "none"}&page=${1}`);
    // }

    formRef.current.reset();
  };

  return (
    <div className="search-container">
      <form
        className="search-form"
        autoComplete="off"
        noValidate
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          name="searchTerm"
        ></input>
        <SearchIcon className="search-icon" />
      </form>
    </div>
  );
};

export default SearchForm;
