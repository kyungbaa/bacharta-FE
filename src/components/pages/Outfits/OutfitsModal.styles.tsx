import styled from "styled-components";
import { makeStyles } from "@mui/material";

export const ModalWrapper = styled.form`
  /* ${({ theme }) => theme.flexMixin("", "center")} */
  background-color: ${(props) => props.theme.white};
  margin-top: 150px;
  padding: 30px;
  width: 650px;
  border-radius: ${(props) => props.theme.bordeRadius};
  box-shadow: ${(props) => props.theme.highModalShdow};
`;

export const ModalHeader = styled.div`
  ${({ theme }) => theme.flexMixin("", "center")}
`;
export const ModalTitle = styled.h2`
  padding: 10px 0;
  font-weight: 600;
  font-size: 22px;
  color: ${(props) => props.theme.keyColor};
`;

export const ModalSection = styled.div`
  ${({ theme }) => theme.flexMixin("", "center")}
  padding-top: 10px;
`;
export const ModalImage = styled.img`
  width: 80px;
`;

export const ModalSelect = styled.div`
  ${({ theme }) => theme.flexMixin("center", "center")}
  padding-top: 18px;
`;

export const ModalFooter = styled.div`
  ${({ theme }) => theme.flexMixin("", "center")}
  padding-top: 24px;
`;

export const ModalButton = styled.button`
  background-color: ${(props) => props.theme.keyColor};
  padding: 14px 30px;
  color: ${(props) => props.theme.white};
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    background-color: ${(props) => props.theme.lightBlue};
  }
`;
