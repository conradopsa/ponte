import { useState } from 'react';  
import { AppBar, Box, Button, Checkbox, Divider, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Slider, SwipeableDrawer, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useHistory } from 'react-router-dom';

const HABILIDADES = [
  "Raciocínio Lógico",
  "Marketing",
  "Relações Pessoais",
  "Habilidades Linguísticas",
  "Habilidades Espaciais",
  "Habilidades Artísticas"
];

function TopBar() {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState([0]);
  const history = useHistory();

  const handleToggle = (value: any) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <>
      <AppBar 
        position="static"
        elevation={0}
        color="secondary"
      >
        <Toolbar>
          <Grid 
            container 
            justify="space-between"
          >
            <Grid item>
              <IconButton edge="start" aria-label="menu" onClick={() => setOpen(true)} color="primary">
                <MenuIcon color="inherit" />
              </IconButton>
            </Grid>

            <Grid item>
              <IconButton edge="start" aria-label="notifications" color="primary">
                <NotificationsIcon color="inherit" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar> 
    
      <SwipeableDrawer
        anchor='left'
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Box width="200px" px={3} py={1}>
          <Box my={2}>
            <Typography variant="subtitle1">Filtros</Typography>
          </Box>

          <List
            subheader={ <Typography variant="body2">Distância de até (km)</Typography> }
          >
            <Slider
              style={{ width: "100%", marginTop: "5px" }}
              defaultValue={10}
              valueLabelDisplay="auto"
              step={1}
              min={1}
              max={50}
            />
          </List>

          <Box mt={1} mb={3}>
            <Divider />
          </Box>

          <List
            subheader={ <Typography variant="body2">Priorizar Habilidades</Typography> }
          >
            { HABILIDADES.map((h, index) => (
              <ListItem 
                dense 
                button 
                disableRipple 
                disableGutters 
                onClick={handleToggle(index)} 
                key={`habilidade${index}`}
              >
                 <ListItemIcon style={{minWidth: '0'}}>
                   <Checkbox
                     edge="start"
                     tabIndex={-1}
                     checked={checked.indexOf(index) !== -1}
                     size="small"
                     style ={{color: "#6C6AE2"}}
                   />
                 </ListItemIcon>
                 <ListItemText primary={h} />
               </ListItem>
            ))}
          </List>

          <Box position="fixed" bottom={0} mb={2} onClick={() => history.push('/')}>
            <Typography variant="body2" align="center" style={{cursor: 'pointer'}}>
              Voltar para o início
            </Typography>
          </Box>
        </Box>
      </SwipeableDrawer>
    </>
  );
}

export default TopBar;