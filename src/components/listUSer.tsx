import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleUser, fetchUserData } from "../features/listUser/userSlice";

export default function ListUser() {
  const dispatch = useDispatch();

  const userData = useSelector((state: any) => state.githubUser.userData);

  useEffect(() => {
    dispatch(fetchUserData() as any);
  }, [dispatch]);
  const modalRef = useRef(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
      dispatch(fetchSingleUser() as any);
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
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
                  onClick={() => openModal()}
                  className="hover:cursor-pointer  hover:bg-red-100 hover:rounded-lg"
                >
                  {" "}
                  {user.login}
                </p>
                <dialog id="my_modal_2" ref={modalRef} className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                      Press ESC key or click outside to close
                    </p>
                    <button onClick={closeModal}>Close</button>
                  </div>
                </dialog>
              </div>{" "}
              <b> github-</b> <p>{user.url}</p>
            </div>
          );
        })}
    </div>
  );
}
