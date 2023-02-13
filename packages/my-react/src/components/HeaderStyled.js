import styled from 'styled-components';

export const WelcomeStyled = styled.span`
  color: #333;
  font-size: 14px;
  margin-right: 10px;
`;

export const WrapperStyled = styled.div`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleStyled = styled.h1`
  font-weight: 900;
  font-size: 20px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
`;

export const HeaderStyled = styled.header`
  button + button {
    margin-left: 10px;
  }
`;

export default null;
