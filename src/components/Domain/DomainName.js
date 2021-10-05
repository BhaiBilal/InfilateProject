import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    grid: {
        flexGrow: 2, 
        padding: '20px',
        backgroundColor: "#EAEAEA",
        height: '650px'
    },

    paper: {
        padding: theme.spacing(2),
        margin: 'auto', 
        textAlign: 'center',
        boxShadow: 'none',
    },

    main: {
        justifyContent: "center",
        marginTop: '20px'   
    },

    main2: {
        justifyContent: "center",
        boxShadow: 'none',       
    },    
    
  }));

    function ReviewBox() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
      };


    return (
        <div className={classes.grid}> 
          <div className={classes.cards_container}>
            <Grid item xs={12}>
            <Grid container spacing={0} className={classes.space}> 
                <Grid item xs={12}>
                  <Grid container spacing={0} className={classes.main}>
                    <Grid item xs={12} sm={11} className={classes.main1}>
                      <Paper className={classes.center}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                              <Grid container spacing={3} style={{backgroundColor: 'skyblue'}}>
                                <Grid item xs={4} >
                                  <Paper className={classes}>
                                    
                                  </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                  <Paper className={classes.paper}>xs=3</Paper>
                                </Grid>
                                <Grid item xs={3}>
                                  <Paper className={classes.paper}>xs=3</Paper>
                                </Grid>
                                <Grid item xs={2}>
                                  <Paper className={classes.paper}>xs=3</Paper>
                                </Grid>
                              </Grid>
                            </Paper>
                        </Grid>
                      </Paper><br/>
                      <Paper className={classes.center}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                
                                
                            </Paper>
                        </Grid>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
            </Grid>
            </Grid>
          </div>
        </div>
    )
}
export default ReviewBox
