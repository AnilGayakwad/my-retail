import styled from 'styled-components';

export const Button = styled.button`
  border: .0625rem white solid;
  border-radius: 50%;
  background-color: #cccccc;
  color: white;
  font-size: 1.5rem;
  height: 2rem;
  width: 2rem;

  &:disabled {
    cursor: not-allowed;
    opacity: .65;
  }
`;

export const ButtonText = styled.div`
  margin-top: -3px;
`;

export const Container = styled.div`
  align-items: center;
  border: .0625rem #d3d2d2 solid;
  border-radius: .125rem;
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  padding: .2rem .2rem .2rem .8rem;
  width: 15rem;
`;

export const Count = styled.div`
  display: inline-block;
  font-weight: bold;
  margin: 0 .5rem;
`;
