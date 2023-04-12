import { ThemeProvider } from 'styled-components'
import { defaultTheme } from "./styles/default"
import { GlobalStyle } from './styles/global'
import { Header } from './Components/Header'



function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
