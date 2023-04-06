import React from "react";
import PropTypes from "prop-types";
import { Input } from "./SearchBarStyles";

const SearchBar = ({ placeholder, handleSearch }) => {
  return <Input placeholder={placeholder} onChange={handleSearch}></Input>;
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  handleSearch: PropTypes.func,
};

export default SearchBar;
