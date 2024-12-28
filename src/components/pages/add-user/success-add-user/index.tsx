import { Box } from "@mui/material";
import CloseIcon from "../../../icons/close-icon";
import CheckIcon from "../../../icons/check-icon";
import PlusIcon from "../../../icons/plus-icon";
const styleSucces = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 407,
  width: "100%",
  bgcolor: "background.paper",
  borderRadius: "12px",
};
interface IProps {
  handleClose: () => void;
  addOneMoreUser: () => void;
}
const SuccessAddUser = ({ handleClose, addOneMoreUser }: IProps) => {
  return (
    <Box sx={styleSucces} className="">
      <div className="relative px-[63px] pb-[32px] pt-[103px] ">
        <button
          onClick={handleClose}
          className="w-[34px] h-[34px] flex items-center justify-center lightSurface1 rounded-50 absolute right-16 top-16"
        >
          <CloseIcon fill="#1C1B1F" />
        </button>
        <div className="flex flex-col items-stretch">
          <div className="w-[108px] h-[108px] rounded-50 flex items-center justify-center  lightSurface2 mx-auto mb-[45px]">
            <CheckIcon />
          </div>
          <div className="font-700 text-32 leading-40 mx-auto mb-16">
            All good!
          </div>
          <div className="text-gray mx-auto mb-[104px]">User was added</div>
          <button
            onClick={handleClose}
            className="lightSurface1 text-primary font-500 text-14 leading-20 rounded-24 p-8  flex items-center gap-8 justify-center mb-16"
          >
            <CloseIcon />
            Close
          </button>
          <button
            onClick={addOneMoreUser}
            className="bg-primary font-500 text-14 leading-20 rounded-24 p-8 text-white flex items-center gap-8 justify-center "
          >
            <PlusIcon />
            Add one more user
          </button>
        </div>
      </div>
    </Box>
  );
};

export default SuccessAddUser;
