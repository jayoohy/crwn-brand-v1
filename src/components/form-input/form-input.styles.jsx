import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabel};
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;
  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabel};
  }

  input[type="password"] {
    letter-spacing: 0.3em !important;
  }
`;

export const FormInputter = styled.input`
  background: none !important;
  background-color: white !important;
  color: ${subColor} !important;
  font-size: 18px !important;
  padding: 10px 10px 10px 5px !important;
  display: block !important;
  width: 100% !important;
  border: none !important;
  border-radius: 0 !important;
  border-bottom: 1px solid ${subColor} !important;
  margin: 25px 0 !important;

  &:focus {
    outline: none !important;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabel};
  }
`;
