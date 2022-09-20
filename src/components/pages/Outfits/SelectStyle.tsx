import styled from "styled-components";

export const Wrap = styled.div``;
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
  width: 140px;
`;

export const ModalSelect = styled.div`
  ${({ theme }) => theme.flexMixin("center", "center")}
  padding-top: 14px;
`;

export const ModalFooter = styled.div`
  ${({ theme }) => theme.flexMixin("", "center")}
  padding-top: 24px;
`;

export const NextButton = styled.button`
  background-color: ${(props) => props.theme.keyColor};
  padding: 10px 30px;
  color: ${(props) => props.theme.white};
  border-radius: 30px;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    background-color: ${(props) => props.theme.lightBlue};
  }
`;
