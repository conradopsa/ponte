import { useEffect } from "react";
import { Box, Divider, Grid } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { DesafiosInfo } from "../../../components/DesafiosInfo";
import { HabilidadesInfo } from "../../../components/HabilidadesInfo";
import { ProgressInfo } from "../../../components/ProgressInfo";

export function JovemHome() {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  });

  return (
    <>
      <Box py={3}>
        <ProgressInfo 
          name="Olá, Suellen"
          level="1"
          levelProgress={70}
          variant="circular"
          src="/suellen.png"
        />
      </Box>

      <Grid
        container
        direction="column"
        spacing={2}
        id="habilidades"
      >
        <Grid item>
          <HabilidadesInfo name="Lógica e Raciocínio" />
        </Grid>

        <Grid item>
          <HabilidadesInfo name="Desenvolvimento Web" />
        </Grid>
      </Grid>
    
      <Box my={3}>
        <Divider />
      </Box>

      <Grid
        container
        direction="column"
        spacing={2}
        id="desafios"
      >
        <Grid item>
          <DesafiosInfo src="/hackathonccr.png" />
        </Grid>
      </Grid>
    </>
  );
}
