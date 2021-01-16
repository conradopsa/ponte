import React from 'react';  
import { AppBar, Divider, Grid, IconButton, List, ListItem, ListItemText, ListSubheader, makeStyles, SwipeableDrawer, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: '#6C6AE2'
  },
  drawerContent: {
    width: '240px'  
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6)
  },
  item: {
    paddingTop: '0px',
    paddingBottom: '0px'
  },
  divider: {
    marginTop: '10px'
  }
}));

const menuOptions = [
  {
    subheader: 'Meu progresso',
    childrens: [
      {
        text: 'Minhas habilidades',
        link: '/jovem/home#habilidades'
      },
      {
        text: 'Meus desafios',
        link: '/jovem/home#desafios'
      }
    ]
  },
  {
    subheader: 'Explorar',
    childrens: [
      {
        text: 'Novas habilidades',
        link: '/jovem/habilidades'
      },
      {
        text: 'Novos desafios',
        link: '/jovem/desafios'
      }
    ]
  },
  {
    subheader: 'Outros',
    childrens: [
      {
        text: 'Pedir ajuda',
        link: '/jovem/faq'
      },
      {
        text: 'Sair',
        link: '/login'
      }
    ]
  }
];

function TopBar() {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleNavigation = (link: string) => {
    setOpen(false);
    history.push(link);
  }

  return (
    <>
      <AppBar 
        position="static"
        elevation={0}
        style={{
          backgroundColor: 'white'
        }}
      >
        <Toolbar>
          <Grid 
            container 
            justify="space-between"
          >
            <Grid item>
              <IconButton edge="start" aria-label="menu" onClick={() => setOpen(true)} className={classes.icon}>
                <MenuIcon color="inherit" />
              </IconButton>
            </Grid>

            <Grid item>
              <IconButton edge="start" aria-label="notifications" className={classes.icon}>
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
        <div className={classes.drawerContent}>
          { menuOptions.map((child, indexList) => {
            return (
              <React.Fragment key={`menuList${indexList}`}>
                <List
                  subheader={
                    <ListSubheader disableSticky>
                      { child.subheader }
                    </ListSubheader>
                  }
                  disablePadding
                  dense
                >
                  { child.childrens.map((elem, index) => {
                    return (
                      <ListItem 
                        button
                        className={classes.item}
                        onClick={() => handleNavigation(elem.link)}
                        key={`option${indexList}-${index}`}
                      >
                        <ListItemText>{ elem.text }</ListItemText>
                      </ListItem>
                    );
                  })}
                </List>

                { indexList !== (menuOptions.length - 1) && <Divider className={classes.divider} /> }
              </React.Fragment>
            );
          })}
        </div>
      </SwipeableDrawer>
    </>
  );
}

export default TopBar;