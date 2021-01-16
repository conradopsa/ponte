import { Box, Divider, Grid, Typography } from "@material-ui/core";
import { ImportContacts } from '@material-ui/icons';
import Description from "../../../components/Description";
import { HabilidadesInfo } from "../../../components/HabilidadesInfo";

const HABILIDADES = [
  {
    name: 'Lógica e Racíocinio'
  },
  {
    name: 'Comunicação'
  },
  {
    name: 'Desenvolvimento Web'
  }
];

export function JovemHabilidades() {
  return (
    <>
      <Description>
        <Typography align="center" variant="subtitle2" color="secondary">
            Explore o nosso conteúdo <br/>
            E torne-se o profissional que o mercado deseja
        </Typography>
        <ImportContacts color="primary" />
      </Description>

      <Grid
        container
        direction="column"
        spacing={2}
      >
        <Grid item>
          <Typography variant="h5" color="secondary">Essenciais para você</Typography>
        </Grid>

        { HABILIDADES.map((elem, index) => (
          <Grid item key={`habilidades${index}`}>
            <HabilidadesInfo {...elem} />
          </Grid>
        ))}
      </Grid>

      <Box my={3}>
        <Divider light />
      </Box>

      <Grid
        container
        direction="column"
        spacing={2}
      >
        <Grid item>
          <Typography variant="h5">Extras</Typography>
        </Grid>

        <Grid item>
          <HabilidadesInfo name="Prototipagem" />
        </Grid>
      </Grid>
    </>
  );
}
