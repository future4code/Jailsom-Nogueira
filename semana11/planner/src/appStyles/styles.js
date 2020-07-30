import styled from 'styled-components';

export const MyTheme = styled.div`
  margin: 0;
  padding: 0;
  color: #7d7a7a;
  border-color: #7d7a7a;
  button {
    background-color: lightseagreen; 
    border: none;
    border-radius: 4px;
    outline: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    cursor: pointer;
    transition-duration: 0.4s;
    height: 44px;
    padding: 0 20px;
    margin: 8px 4px;
  }
  button:hover{
    background-color: #e27878;
  }
  input, select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 4px;
  display: inline-block;
  outline: none;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  }
  p{
    margin: 0.1rem;
    padding: 0;
  }
  h3{
    margin: 0;
    padding: 0;
  }
`
export const AppBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  height: 60px;
`;

export const ContentContainer = styled.form`
  display: flex;
  align-items: center;
  width: 60vw;
`;

export const TasksContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  justify-items: center;
  column-gap: 30px;
  row-gap: 10px;
  margin: 0 auto;
  margin-top: 10px;
`;

export const DayContainer = styled.div`
  width: 100%;
  height: 40vh;
  padding: 10px;
  border: 1px dashed gray;  
`;