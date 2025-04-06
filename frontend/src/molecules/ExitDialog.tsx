import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import React from "react";

interface ExitDialog {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ExitDialog: React.FC<ExitDialog> = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Exit Chat</DialogTitle>
      <DialogContent>Are you sure you want to exit the chat?</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onConfirm}>Exit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ExitDialog;
