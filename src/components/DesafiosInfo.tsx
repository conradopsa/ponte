import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    display: 'flex', 
    flexDirection: 'column', 
    padding: '16px', 
    paddingBottom: '0'
  },
  action: {
    alignSelf: 'center',
    padding: '0px'
  }
});

export function DesafiosInfo(props: any) {
  const classes = useStyles();

  return (
    <Card elevation={2}>
      <CardActionArea className={classes.card}>
        <CardMedia component="img" image={ props.src } />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            { props.descricao }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.action} disableSpacing>
        <Button color="primary" variant="text" fullWidth>
          { props.status === '0' ? 'Participar' : 'Inscrito' }
        </Button>
      </CardActions>
    </Card>
  );
}