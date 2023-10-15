import styled from 'styled-components';
import { device } from 'src/Global.styled';
import { Link } from 'react-router-dom';
import { LinkStyled } from 'src/Main/Cases/Cases.styled';

export const FormWrapper = styled.section`
  @media ${device.mobileS} {
    width: 303px;
    margin-top: 25px;
  }
`;
export const FormTitle = styled.h2<{ left?: string; top?: string }>`
  @media ${device.mobileS} {
    margin-left: ${({ left }) => left || '15px'};
    margin-top: ${({ top }) => top || '15px'};

    width: 227px;
    font-size: 18px;
  }
`;
export const FormText = styled.p`
  @media ${device.mobileS} {
    margin-top: 15px;
    height: 51px;
    color: #161824;
    font-size: 14px;
    text-align: start;
  }
`;
export const FormBoxWrapper = styled.form`
  @media ${device.mobileS} {
    height: 400px;
    //color: #161824;
    font-size: 14px;
    text-align: start;
  }
`;
export const FormInput = styled.input`
  outline: none;
  border: darkgrey 1px solid;
  @media ${device.mobileS} {
    margin-top: 15px;
    width: 280px;
    margin-left: 4px;
    height: 50px;
    padding: 6px 10px;
    &::placeholder {
      color: #c2c2c2;
    }
  }
`;
export const FormTextArea = styled.textarea`
  outline: none;
  border: darkgrey 1px solid;
  @media ${device.mobileS} {
    margin-top: 15px;
    width: 280px;
    margin-left: 4px;
    height: 200px;
    padding: 6px 10px;
    resize: none;
    margin-bottom: 15px;
  }
`;
export const FormLink = styled(Link)<LinkStyled>`
  text-decoration: ${({ decor }) => decor || 'none'};
  @media ${device.mobileS} {
    font-size: 14px;
  }
`;
