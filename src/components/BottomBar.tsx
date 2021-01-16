import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, makeStyles } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import StoreIcon from '@material-ui/icons/Store';
import IconMaker from './IconMaker';
import { ReactComponent as ChallengeIcon } from '../assets/jovem/Desafios.svg';

const useStyles = makeStyles((theme) => ({
  nav: {
    top: 'auto',
    bottom: '0px'
  },
  fixBug: {
    paddingTop: '10px'
  }
}));

function BottomBar() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState(0);
  
  const strategy: any = {
    home: () => setValue(0),
    habilidades: () => setValue(1),
    desafios: () => setValue(2),
    beneficios: () => setValue(3),
  }

  history.listen((location) => {
    const parsedLocation = location.pathname.replace('/jovem/', '').replace('#', '');
    const exec = strategy[parsedLocation];
    if (exec) exec(); 
  });

  return (
    <AppBar 
      position="fixed" 
      elevation={3}
      className={classes.nav}
    >
      <BottomNavigation
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue);
        }}
        style={{
            color: '#6C6AE2'
        }}
      >
        <BottomNavigationAction icon={<HomeIcon />} onClick={() => history.push('/jovem/home')} />
        <BottomNavigationAction icon={<SchoolIcon />} onClick={() => history.push('/jovem/habilidades')} />
        <BottomNavigationAction icon={<IconMaker icon={<ChallengeIcon />} />} onClick={() => history.push('/jovem/desafios')} className={classes.fixBug} />
        <BottomNavigationAction icon={<StoreIcon />} onClick={() => history.push('/jovem/beneficios')} />
      </BottomNavigation>
    </AppBar>
  );
}

export default BottomBar;