import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUserData,
  searchSingleUser,
} from "../features/listUser/userSlice";

export default function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const userData = useSelector((state: any) => state.githubUser.userData);

  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    const { value } = event.target;
    setSearchTerm(value);
  };
  useEffect(() => {
    const searchTimer = setTimeout(() => {
      if (searchTerm.trim() !== "") {
        dispatch(searchSingleUser(searchTerm) as any);
      } else {
        dispatch(fetchUserData() as any);
      }
    }, 1000);

    return () => clearTimeout(searchTimer);
  }, [searchTerm, dispatch]);
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
