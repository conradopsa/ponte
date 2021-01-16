import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { ReactComponent as LoginIcon } from "../assets/icons/login.svg";
import { ReactComponent as HeartIcon } from "../assets/icons/heart.svg";
import { ReactComponent as AboutIcon } from "../assets/icons/about.svg";
import { ReactComponent as SignUpIcon } from "../assets/icons/signup.svg";


export function RightMainDrawer(props: any) {

  const history = useHistory();
  
  return (
    <Drawer anchor="right" {...props} >
      <List style={{ width: "240px" }}>
        <ListItem
          button
          onClick={() => {
            history.push("/login");
          }}
        >
          <ListItemIcon>{<LoginIcon />}</ListItemIcon>
          <ListItemText primary={"Login"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>{<SignUpIcon />}</ListItemIcon>
          <ListItemText primary={"Cadastro"} />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            history.push("/contribua");
          }}
        >
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
  );
}
