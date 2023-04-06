import styled from "styled-components";
import { breakpoints, colors } from "../../utils/style/theme";

export const Input = styled.input`
  padding: 0 15px;
  margin-bottom: 40px;
  line-height: 40px;
  border: 1px solid ${colors.textSecondary};
  border-radius: 6px;
  font-size: 14px;
  max-width: 400px;

  @media screen and (${breakpoints.tablet}) {
    font-size: 16px;
  }
`;
