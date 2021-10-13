import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({


  staticTooltipLabel: {
    backgroundColor: "red",
    // fontSize:'30px',
    padding:'0px',
    position:'static',
  },

}));


const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    // top: theme.spacing(2),
    // left: theme.spacing(2),
  },
}));

const actions = [
  { icon: <FileCopyIcon />, name: 'Home' },
  { icon: <SaveIcon />, name: 'Blog' },
  { icon: <PrintIcon />, name: 'Product' },
  { icon: <ShareIcon />, name: 'Service' },
  { icon: <ShareIcon />, name: 'Coupon' },
];


export default function PlaygroundSpeedDial() {

  const classes = useStyles()
  const history = useHistory()
  
  const handleClick = (action) => {


    if(action.name=='Home'){
      history.push('/Dashboard/Home')
    }

    else if(action.name=='Blog'){
      history.push('/Dashboard/addBlog')
    }

    else if(action.name=='Product'){
      history.push('/Dashboard/addProduct')
    }

    else if(action.name=='Service'){
      history.push('/Dashboard/addService')
    }

    else if(action.name=='Coupon'){
      history.push('/Dashboard/addCoupon')
    }

  }

  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
      <Box sx={{ 
        // position: 'relative', 
        mt: 3, height: 320 }}>
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          // hidden={hidden}
          icon={<SpeedDialIcon />}
          direction={'down'}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              tooltipPlacement='right'
              // classes={classes}
              onClick={() => handleClick(action)}
            />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  );
}
