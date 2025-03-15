import React from "react";
import { FormInput } from "../atoms/FormInput";
import { MainText } from "../atoms/MainText";
import { Box } from "@mui/material";

interface NamedFieldProps {
  label: string;
  mt?: string;
  type?: string;
  value?: string | number;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const NamedField: React.FC<NamedFieldProps> = ({
  label,
  mt = 0,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <Box sx={{ mt }}>
      <MainText>{label}</MainText>
      <FormInput value={value} onChange={onChange} type={type} />
    </Box>
  );
};
