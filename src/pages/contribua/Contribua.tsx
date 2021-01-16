import React, { useState } from "react";
import {
  AppIconButton,
  AppImgContainer,
  AppNavbar,
  AppSeparator,
} from "../../components";
import BackgroundTitle from "../../assets/title-background.png";
import JovemImage from "../../assets/contribua/jovem-sacole.png";
import VoaaLogo from "../../assets/voaa-logo.png";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu-icon.svg";
import { useHistory } from "react-router-dom";
import { TopMainMenu } from "../../containers/TopMainMenu";
import { Button, Card, CardActions, CardContent } from "@material-ui/core";
import "./Contribua.scss";
import { RightMainDrawer } from "../../containers/RightMainDrawer";

export function Contribua() {
  const [openMenu, setOpenMenu] = useState(false);
  const history = useHistory();

  return (
    <section className="contribua-menu">
      <TopMainMenu onClick={() => setOpenMenu(true)} />
      <RightMainDrawer open={openMenu} onClose={() => setOpenMenu(false)} />

      <h1>Nossas Campanhas</h1>

      <div className="class-list">
        <Card
          variant="outlined"
          style={{
            textAlign: "center",
            border: "1px solid rgba(23, 54, 91, 0.15)",
            boxSizing: "border-box",
            boxShadow: "0px 0px 23px -2px rgba(0, 0, 0, 0.20)",
            borderRadius: "8px",
            margin: "10px 15px",
            maxWidth: "500px",
          }}
        >
          <CardContent>
            <img
              style={{
                width: "100%",
              }}
              src={JovemImage}
            />

            <div className="card-text-container">
              <h2>
                Campanha para ajudar o Davi e mais uma centena de outros jovens
                como ele a voltar para escola
              </h2>
              <p>
                Davi tem 16 anos e está tendo que trabalhar na rua vendendo
                sacolé para ajudar no sustento de casa. A família depende das
                vendas que caíram bastante nesta pandemia. Existem milhares de
                crianças como o Davi nessa mesma situação. Ajude-o e ajude
                muitos outros.
              </p>
            </div>
          </CardContent>
          <CardActions style={{ display: "flex", justifyContent: "center" }}>
            <Button
              style={{
                margin: "10px 10px",
                marginTop: "-10px",
              }}
              variant="contained"
              color="primary"
              disableElevation
              onClick={() => {
                history.push("/contribua");
              }}
            >
              CONHEÇA ESSA HISTÓRIA
            </Button>
          </CardActions>
        </Card>
      </div>
    </section>
  );
}
