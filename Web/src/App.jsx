import { ThemeProvider } from 'styled-components'
import { defaultTheme } from "./styles/default"
import { GlobalStyle, ContainerApplicaton } from './styles/global'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { Main } from './Components/Main'



function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ContainerApplicaton>
        <Header />
        <Main />
        <Footer/>
      </ContainerApplicaton>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
