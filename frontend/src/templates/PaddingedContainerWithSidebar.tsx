import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import Sidebar from "../organisms/Sidebar";

const PaddingedContainer = styled(Box)`
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  display: flex;
`;

const SidebarContainer = styled(Box)`
  flex-shrink: 0;
`;

const ContentContainer = styled(Box)`
  flex: 1;
  margin-left: 1rem;
`;

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <PaddingedContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <ContentContainer>{children}</ContentContainer>
    </PaddingedContainer>
  );
};

export default Container;
