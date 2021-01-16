import {
  AppNavbar,
  AppCarousel,
  AppSeparator,
  AppIconButton,
  AppImgContainer,
} from "../../components";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu-icon.svg";
import { ReactComponent as HighwayIcon } from "../../assets/home/highway.svg";
import { ReactComponent as MapIcon } from "../../assets/home/map.svg";
import { ReactComponent as MoneyIcon } from "../../assets/home/money.svg";
import { ReactComponent as RadarIcon } from "../../assets/home/radar.svg";
import { CSSPropertiesModule } from "../../components/@types";
import backgroundTitle from "../../assets/title-background.png";

export function Home() {
  return (
    <section>
      <AppNavbar position="absolute">
        <LogoIcon />
        <AppSeparator />
        <AppIconButton style={{ marginRight: "-8px" }}>
          <MenuIcon />
        </AppIconButton>
      </AppNavbar>
      

      <AppCarousel
        items={[
          {
            background: backgroundTitle,
            content: (
              <div className="darkContainer">
                <h1>AJUDE UM JOVEM A VENCER SEUS DESAFIOS</h1>
                <br />
                <br />
                <p>
                  Somos uma plataforma destinada a ajudar o desenvolvimento de
                  jovens no mercado de trabalho
                </p>
              </div>
            ),
          },
        ]}
      />

      <div className="lightContainer" style={{ textAlign: "center" }}>
        <h1>Nossos Diferenciais</h1>

        <MapIcon />
        <h3>Atingir regiões periféricas</h3>

        <p>Atingir o público jovem que está longe de grandes centros urbanos</p>

        <MoneyIcon />
        <h3>Gerar renda e empregabilidade</h3>

        <p>Gerar renda e empregabilidade para jovens nessas regiões</p>

        <RadarIcon />
        <h3>Identificar talentos</h3>

        <p>
          Identificar e direcionar talentos para vagas de Menor Aprendiz e
          Estagiários nessas regiões
        </p>

        <h3>Direcionar jovens</h3>

        <HighwayIcon />
        <p>
          Direcionar jovens para perfis técnicos e comportamentais desejados por
          empresas
        </p>
      </div>
    </section>
  );
}
