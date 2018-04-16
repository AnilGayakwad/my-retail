import styled from 'styled-components';

export const ButtonContainer = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
`;

export const InStoreContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 49%;
`;

export const FindInStoreButton = styled.button`
  font-size: .8rem;
  font-weight: bold;
  margin: .3rem 0 0;
`;

const mainButtonStyling = `
  border-radius: .3rem;
  color: white;
  font-size: 1.125rem;
  min-height: 2.5rem;
  padding .3rem .1rem;
  text-transform: uppercase
`;

export const PrimaryButton = styled.button`
  background-color: #cd0606;
  &:hover {
    background-color: #ac0000;
  }
  width: 49%;
  ${mainButtonStyling}
`;

export const SecondaryButton = styled.button`
  background-color: #202020;
  &:hover {
    background-color: #0d0d0d;
  }
  width: 100%;
  ${mainButtonStyling}
`;
