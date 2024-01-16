import { ContainerFooter } from './styles'
import Logo from '../../assets/Logo.svg'

export function Footer() {
  return (
    <ContainerFooter>
      <div>
        <img src={Logo} alt="Logo" />
      </div>

      <p>
        © 2021, Game Tracker Inc. Todos os direitos reservados. Nulla facilisi.
        Etiam sagittis congue tempor. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Suspendisse eu
        velit et ante luctus egestas. Aenean sed nisi tellus. Duis non ornare
        libero. Quisque suscipit maximus nisi, in gravida felis. Cras ornare
        mauris ac nisi congue, ut condimentum sem tincidunt. Phasellus semper
        tellus malesuada turpis gravida cursus. Duis nec eleifend nunc, vitae
        finibus elit. Aliquam eget diam vitae purus suscipit viverra.
      </p>
      <div>
        <a href="https://github.com/LucasHARosa">Termos e Serviços</a>
        <a href="https://github.com/LucasHARosa">Política de Privacidade</a>
        <a href="https://www.linkedin.com/company/e-commerce-brasil/">
          Trabalhe conosco
        </a>
        <a href="https://www.linkedin.com/in/lucas-henrique-alves-rosa/">
          Contato
        </a>
      </div>
    </ContainerFooter>
  )
}
