import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: none;
    box-shadow: none;
  }
  body {
    
    background: linear-gradient(45deg, #0B1641 0%, #C70160 100%);
    -webkit-font-smoothing: antialiased;
    cursor: default;
  }
  body, textarea, button, p, a, input, select {
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 1.125rem;
    color: #FFFFFF;

  }
  
`
export const ContainerApplicaton = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
