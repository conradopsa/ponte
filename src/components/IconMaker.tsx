import React from 'react';
import { SvgIcon, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  mySvgStyle: {
    fillColor: theme.palette.primary.main
  }
}));

export default function IconMaker(props: any) {
  const classes = useStyles();

  return (
    <SvgIcon className={classes.mySvgStyle}>
      { props.icon }
    </SvgIcon>
  );
}