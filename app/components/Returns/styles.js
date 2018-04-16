import styled from 'styled-components';
import { grayText } from 'common/styles/commonStyles';

export const Container = styled.div`
  align-items: center;
  display: flex;
  margin: 1.5rem 0;
`;

export const Header = styled.div`
  font-size: 1.25rem;
  ${grayText}
  padding-right: 1.5rem;
`;

export const Message = styled.p`
  border-left: #cccccc .0125rem solid
  font-size: .75rem;
  ${grayText}
  padding-left: 1.5rem;
`;

export const PolicyLink = styled.a`
  font-weight: bold;
  ${grayText}
  text-decoration: none;
`;
