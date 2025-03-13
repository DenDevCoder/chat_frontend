import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const LogoContainer = styled(Box)`
  width: 100vw;
  height: 5vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const CenteredContainer = styled(Box)`
  width: 100vw;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CenteredForm: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <LogoContainer>Logo</LogoContainer>
      <CenteredContainer>{children}</CenteredContainer>
    </>
  );
};

export default CenteredForm;
