import React from 'react'
import { useSelector, useDispatch } from "react-redux";

export default function ModelComponent({modalRef,closeModal}:any) {
    const userSingle = useSelector(
        (state: any) => state.githubUser.singleuserData
      );
    
    return (
        <div>
             <dialog id="my_modal_2" ref={modalRef} className="modal">
                  <div className="modal-box">
                    <div className="flex gap-2">
                      followers {!!userSingle && <p>{userSingle.followers}</p>}
                    </div>
                    <div className="flex gap-2">
                      following {!!userSingle && <p>{userSingle.following}</p>}
                    </div>
                    <div className="flex gap-2">
                      picture{" "}
                      {!!userSingle && (
                        <img
                          className="w-8 h-8 rounded-full"
                          src={userSingle.avatar_url}
                          alt="myimag"
                        />
                      )}
                    </div>
                    <div className="flex gap-2">
                      location {!!userSingle && <p>{userSingle.location}</p>}
                    </div>
                    <div className="flex gap-2">
                      full name {!!userSingle && <p>{userSingle.name}</p>}
                    </div>

                    <button onClick={closeModal}>Close</button>
                  </div>
                </dialog>
        </div>
    )
}
