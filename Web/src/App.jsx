import { ThemeProvider } from 'styled-components'
import { defaultTheme } from "./styles/default"
import { GlobalStyle } from './styles/global'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'



function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Footer />
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
