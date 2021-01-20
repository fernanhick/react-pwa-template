import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  z-index: 0;
  min-height: 692px;
  background: var(--secondary);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
`;
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;
export const Icon = styled(Link)`
  color: #fff;
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  font-weight: 700;
  font-size: 32px;
  @media screen and (max-width: 480px) {
    margin: 16px 0 0 8px;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: colum;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const Form = styled.form`
  background: var(--primary);
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;

  color: var(--light-text);
  font-size: 24px;
  font-weight: 400;
  text-align: center;
`;
export const FormLabel = styled.label`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-top: 1px solid;
  border-radius: 4px;
  font-size: 20px;
`;
export const FormButton = styled.button`
  color: var(--light-text);
  background: var(--secondary);
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  color: var(--light-text);
  margin-top: 24px;
  text-align: center;
  font-size: 14px;
`;
