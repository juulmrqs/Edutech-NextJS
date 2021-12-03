import styled from 'styled-components';
import { propsBtn } from './ButtonCp';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100vw;

  .searchBar {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(12.5px);
    margin-bottom: 3rem;
  }
`;
export const Input = styled.input`
  width: 556px;
  background-color: rgb(var(--BackgroundComponents));
  border: 1px solid rgb(var(--Stroke));
  box-shadow: 2px 4px 4px var(--Shadow);

  padding: 1rem;
  min-width: 260px;
  border-radius: 10px;
`;
