import { ContainerHeader } from './styles'
import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <ContainerHeader>
      <img src={Logo} alt="Logo" />
      <div>
        <p>Game&nbsp;</p>
        <p>Tracker</p>
      </div>
    </ContainerHeader>
  )
}
