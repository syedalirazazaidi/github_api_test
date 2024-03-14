import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleUser, fetchUserData } from "../features/listUser/userSlice";
import ModelComponent from "./modelComponent";
import SearchComponent from "./searchComponent";

export default function ListUser() {
  const dispatch = useDispatch();

  const userData = useSelector((state: any) => state.githubUser.userData);

  useEffect(() => {
    dispatch(fetchUserData() as any);
  }, [dispatch]);
  const modalRef = useRef(null);

  const openModal = (login: any) => {
    if (modalRef.current) {
      modalRef.current.showModal();
      dispatch(fetchSingleUser(login) as any);
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };
  return (
    <div>
      <SearchComponent />
      {!!userData &&
        userData.map((user: any) => {
          const { login } = user;
          return (
            <div
              key={user.id}
              className="flex items-center gap-5 space-y-1 p-1"
            >
              <img
                src={user.avatar_url}
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <div>
                {" "}
                <b>name-</b>
                <p
                  onClick={() => openModal(login)}
                  className="hover:cursor-pointer  hover:bg-red-100 hover:rounded-lg"
                >
                  {" "}
                  {user.login}
                </p>
                <ModelComponent modalRef={modalRef} closeModal={closeModal} />
              </div>{" "}
              <b> github-</b> <p>{user.url}</p>
            </div>
          );
        })}
    </div>
  );
}
