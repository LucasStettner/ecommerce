import styled from "styled-components";
import { StyledThemeType } from "../../theme";

export const BackgroundWash = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #30344650;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 500px;
  height: 500px;
  background: white;
  border-radius: 8px;
  padding: 20px;
`;

// Modal Header
export const ModalHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalHeaderText = styled.h2`
  color: ${({ theme }: StyledThemeType) => theme.text.default};
  font-family: ${({ theme }: StyledThemeType) => theme.fonts.header};
  font-weight: bold;
  font-size: 1.5rem;
`;

export const ModalCloseButton = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #fff;
  transition: background ease 250ms;

  :hover {
    background: ${({ theme }: StyledThemeType) => theme.bg.border}50;
  }
`;

export const ModalHeaderTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #bbdbff;
  border-radius: 50%;
  margin-right: 10px;
`;
