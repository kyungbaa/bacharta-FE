import styled from "styled-components";

export const OutfitsWrapper = styled.div`
  ${({ theme }) => theme.flexMixin("", "center")}
`;

export const OutfitsSection = styled.div`
  ${({ theme }) => theme.flexMixin("center", "center")}
  width: 1080px;
`;
