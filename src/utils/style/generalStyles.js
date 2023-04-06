import styled, { css } from "styled-components";
import {
  Form as FormFormik,
  Field as FieldFormik,
  ErrorMessage as ErrorMessageFormik,
} from "formik";
import { colors, breakpoints, fonts } from "./theme";

const FieldStyle = css`
  border: 1px solid ${colors.textSecondary};
  border-radius: 6px;
  width: 100%;
  line-height: 50px;
  height: 50px;
  padding: 0 12px;
  outline: none;
  font-size: 14px;
  font-family: ${fonts.primary};
  &:focus {
    border-color: ${colors.textPrimary};
  }
  @media (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 150px;
  line-height: 48px;
  font-size: 16px;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  border-radius: 30px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease-out;
  border: none;

  &:hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  ${(props) =>
    props.isLanding &&
    `
    width: 220px;
    `}

  ${(props) =>
    props.isSecondary &&
    `
        background-color: ${colors.primary};
        color: ${colors.secondary};
    `}

    ${(props) =>
    props.isOutline &&
    `
        width: 200px;
        border: 1px solid ${colors.primary};
    `}
`;

export const SearchBar = styled.input`
  padding: 0 15px;
  line-height: 40px;
  border: 1px solid ${colors.textSecondary};
  border-radius: 6px;
  font-size: 14px;
  max-width: 400px;

  @media screen and (${breakpoints.tablet}) {
    font-size: 16px;
  }
`;

export const FormWrapper = styled.div`
  @media (${breakpoints.tabletSmall}) {
    width: 400px;
    ${(props) =>
      props.isCentered !== false &&
      `
            margin: 0 auto;
        `}
  }
`;

export const Form = styled(FormFormik)``;

export const FormRow = styled.div`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
`;

export const Field = styled(FieldFormik)`
  ${FieldStyle}
`;

export const ErrorMessage = styled(ErrorMessageFormik)`
  font-size: 14px;
  color: ${colors.primary};
  padding-top: 8px;
`;

export const Select = styled.select`
  ${FieldStyle}
`;

export const Option = styled.option``;

export const FormSuccessMessage = styled.p`
  padding: 12px;
  font-size: 14px;
  color: #27ae60;
  text-align: center;
  background: rgba(111, 207, 151, 0.2);
  border-radius: 8px;
  line-height: 150%;
  ${(props) =>
    props.isError &&
    `
        color: #eb5757;
        background: rgba(235,87,87,0.2);
    `}
`;
