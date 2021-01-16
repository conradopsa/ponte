import React, { useState } from "react";
import {
  AppIconButton,
  AppImgContainer,
  AppNavbar,
  AppSeparator,
} from "../components";
import { ReactComponent as LogoIcon } from "../assets/logo.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu-icon.svg";
import { useHistory } from "react-router-dom";
import BackgroundTitle from "../assets/title-background.png";

export function TopMainMenu(props: any) {

  return (
    <section>
      <AppNavbar>
        <LogoIcon />
        <AppSeparator />
        <AppIconButton
          style={{ marginRight: "-8px" }}
          {...props}          
        >
          <MenuIcon />
        </AppIconButton>
      </AppNavbar>

      <AppImgContainer
        alignItems="start"
        heightContainer="58px"
        height="auto"
        width="auto"
        backgroundTitle={BackgroundTitle}
      />
    </section>
  );
}
