import { Link } from "react-router-dom";
import PlusIcon from "../../icons/plus-icon";
import UsersIcon from "../../icons/users-icon";
import AddUserModel from "../../pages/add-user/add-user-modal";
import { useState } from "react";

const Sidebar = () => {
  const [openUserModal, setOpenUserModal] = useState<boolean>(false);
  const handleOpenUserModal = () => setOpenUserModal(true);
  return (
    <div className="border-e-[1px] desktop:min-w-[234px] border-secondary p-24 flex flex-col items-center h-lvh  desktop:items-stretch ">
      <div className="">
        <div className="flex items-center gap-8 mb-44 ">
          <img
            src="./src/assets/images/static/yuvam-logo.png"
            className="w-[40px] h-[40px]"
          />
          <div className="hidden font-600 text-20 leading-22  text-primaryDefault  desktop:block">
            Yuvam.az
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <ul className="flex flex-col gap-8">
          <li className="">
            <button
              onClick={handleOpenUserModal}
              className="w-[40px] h-[40px] flex items-center justify-center gap-2 bg-primary rounded-24 p-8 px-16 desktop:w-full desktop:justify-start"
            >
              <span>
                <PlusIcon />
              </span>
              <span className="font-500 text-14 leading-20 text-white hidden desktop:block">
                Add new user
              </span>
            </button>
          </li>
          <li className="">
            <Link
              to={"/"}
              className="w-[40px] h-[40px] flex items-center  justify-center gap-2 bg-secondary rounded-24 p-8 px-16 text-black desktop:w-full desktop:justify-start"
            >
              <span>
                <UsersIcon fill="#777B83" />
              </span>
              <span className="hidden font-500 leading-20  desktop:block">
                Users
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="">
        <div className="flex gap-8 items-center">
          <div className="text-primary w-36 h-36 flex items-center justify-center bg-primaryLight rounded-50">
            M
          </div>
          <div className="text-black font-500 text-14 leading-20 hidden desktop:block">
            Mubariz M
          </div>
        </div>
      </div>
      <AddUserModel
        openUserModal={openUserModal}
        setOpenUserModal={setOpenUserModal}
      />
    </div>
  );
};

export default Sidebar;
