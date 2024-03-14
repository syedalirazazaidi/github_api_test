import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { searchSingleUser } from "../features/listUser/userSlice";

export default function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchSingleUser(searchTerm) as any);
  }, [searchTerm]);
  const handleChange = (event: any) => {
    const { value } = event.target;
    setSearchTerm(value);
  };
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="search user here"
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
}
