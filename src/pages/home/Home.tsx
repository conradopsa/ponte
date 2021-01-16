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

import { ReactComponent as LoginIcon } from "../../assets/icons/login.svg";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as AboutIcon } from "../../assets/icons/about.svg";
import { ReactComponent as SignUpIcon } from "../../assets/icons/signup.svg";


import { CSSPropertiesModule } from "../../components/@types";
import backgroundTitle from "../../assets/title-background.png";
import backgroundTitle2 from "../../assets/title-background2.png";
import React, { useState } from "react";
import { Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export function Home() {

  const [openMenu, setOpenMenu] = useState(false);
  const history = useHistory();

  return (
    <section className="home-page">
      <Drawer anchor='right' open={openMenu} onClose={() => setOpenMenu(false)} > 
        <List style={{width: '240px'}}>
            <ListItem button onClick={() => { history.push('/login') }}>
              <ListItemIcon>{<LoginIcon />}</ListItemIcon>
              <ListItemText primary={"Login"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>{<SignUpIcon />}</ListItemIcon>
              <ListItemText primary={"Cadastro"} />
            </ListItem>
            <ListItem button onClick={() => { history.push('/contribua') }}>
              <ListItemIcon>{<HeartIcon />}</ListItemIcon>
              <ListItemText primary={"Contribua"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>{<AboutIcon />}</ListItemIcon>
              <ListItemText primary={"Sobre"} />
            </ListItem>

        </List>
        <Divider />
      </Drawer>

      <AppNavbar position="absolute">
        <LogoIcon />
        <AppSeparator />
        <AppIconButton style={{ marginRight: "-8px" }} onClick={() => setOpenMenu(true)}>
          <MenuIcon />
        </AppIconButton>
      </AppNavbar>


      {<AppCarousel
        items={[
          {
            background: backgroundTitle,
            content: (
              <div className="darkContainer">
                <br />
                <br />
                <br />
                <h1>AJUDE UM JOVEM A VENCER SEUS DESAFIOS</h1>
                <br />
                <p>
                  Somos uma plataforma destinada a ajudar o desenvolvimento de
                  jovens no mercado de trabalho
                </p>
                <br />
                <Button variant="contained" color="primary" disableElevation>
                  Seja um contribuidor
                </Button>
                <br/>
                <br />
              </div>
            ),
          }
        ]}
      />}

      <div className="lightContainer">
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
