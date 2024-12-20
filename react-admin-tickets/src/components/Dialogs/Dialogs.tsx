import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { RootState, RootDispatch } from "@/store";
import { toggleDialog } from "@/store/slice/sliceDialog";
import { DialogsProps } from "./Dialogs.type";

const Dialogs: React.FC<DialogsProps> = ({ children = null, title = "" }) => {
  const dispatch = useDispatch<RootDispatch>();
  const dialog: any = useSelector<RootState>((state: any) => state.dialog);

  const handleClose = () => {
    dispatch(toggleDialog());
  };

  return (
    <React.Fragment>
      <Dialog
        open={dialog?.isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className="!px-[15px]" id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent className="!px-4 !pb-4">{children}</DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default Dialogs;
