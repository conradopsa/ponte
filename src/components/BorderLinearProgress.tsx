import React from 'react';
import { withStyles } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';

const RadiusLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5
  },
}))(LinearProgress);

function LinearProgressWithLabel(props: any) {
  return (
    <Box width="100%" mr={1}>
      <RadiusLinearProgress variant="determinate" {...props} />
    </Box>
  );
}  

export default LinearProgressWithLabel;