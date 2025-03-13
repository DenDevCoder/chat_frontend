import React from "react";
import { FormInput } from "../atoms/FormInput";
import { MainText } from "../atoms/MainText";
import { Box } from "@mui/material";

interface NamedFieldProps {
  label: string;
  mt?: string;
}

export const NamedField: React.FC<NamedFieldProps> = ({ label, mt = 0 }) => {
  return (
    <Box sx={{ mt }}>
      <MainText>{label}</MainText>
      <FormInput />
    </Box>
  );
};
