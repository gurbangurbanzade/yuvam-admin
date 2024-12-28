import { Modal } from "@mui/material";
import InsertUserinfo from "../insert-user-info";
import { useState } from "react";
import SuccessAddUser from "../success-add-user";

interface IProps {
  openUserModal: boolean;
  setOpenUserModal: (value: boolean) => void;
}
const AddUserModal = ({ openUserModal, setOpenUserModal }: IProps) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const handleClose = () => {
    setOpenUserModal(false);
    setIsSuccess(false);
  };
  const handleSuccess = () => setIsSuccess(true);
  const addOneMoreUser = () => setIsSuccess(false);

  return (
    <Modal
      open={openUserModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        {isSuccess ? (
          <SuccessAddUser
            handleClose={handleClose}
            addOneMoreUser={addOneMoreUser}
          />
        ) : (
          <InsertUserinfo handleSuccess={handleSuccess} />
        )}
      </>
    </Modal>
  );
};

export default AddUserModal;
