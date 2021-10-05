import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    // borderRadius:'64px',
    border: '2px solid grey',
    borderRadius: '5px',
    marginBottom: '8px',
    width: "350px",
    transition: "all .5s ease",
    '&:hover': {
      border: "2px solid #2b4f60",
      width: "450px",
      backgroundColor: "white"
    },
  },
  ListItemText: {
    fontSize: "2rem"
  }
}));

function leaveReview() {
    const classes = useStyles();
    return (
        <Grid container spacing={2}>

            <Grid item md={4}>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem
                  className={classes.list}
                  button
                // selected={selectedIndex === 0}

                >
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<Typography style={{ fontSize: "1rem", color: "rgba(36,62,99,var(--text-opacity))" }}>Marketing Automation</Typography>} />
                </ListItem>
                <ListItem className={classes.list}
                  button
                // selected={selectedIndex === 1}
                //  onClick={handleTab2}
                >
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary={<Typography style={{ fontSize: "1rem", color: "rgba(36,62,99,var(--text-opacity))" }}>Accounting</Typography>} />
                </ListItem>
                <ListItem
                  className={classes.list}
                  button
                // selected={selectedIndex === 0}
                // onClick={handleTab3}
                >
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<Typography style={{ fontSize: "1rem", color: "rgba(36,62,99,var(--text-opacity))" }}>CRM</Typography>} />
                </ListItem>

                <ListItem
                  className={classes.list}
                  button
                // selected={selectedIndex === 0}
                // onClick={handleTab4}
                >
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<Typography style={{ fontSize: "1rem", color: "rgba(36,62,99,var(--text-opacity))" }}>Video Conferencing</Typography>} />
                </ListItem>
                <ListItem
                  className={classes.list}
                  button
                // selected={selectedIndex === 0}
                // onClick={handleTab4}
                >
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<Typography style={{ fontSize: "1rem", color: "rgba(36,62,99,var(--text-opacity))" }}>Project Management</Typography>} />
                </ListItem>
                <ListItem
                  className={classes.list}
                  button
                // selected={selectedIndex === 0}
                // onClick={handleTab4}
                >
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<Typography style={{ fontSize: "1rem", color: "rgba(36,62,99,var(--text-opacity))" }}>Video Conferencing</Typography>} />
                </ListItem>
                <ListItem
                  className={classes.list}
                  button
                // selected={selectedIndex === 0}
                // onClick={handleTab4}
                >
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<Typography style={{ fontSize: "1rem", color: "rgba(36,62,99,var(--text-opacity))" }}>VPN Service</Typography>} />
                </ListItem>
                <ListItem
                  className={classes.list}
                  button
                // selected={selectedIndex === 0}
                // onClick={handleTab4}
                >
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={<Typography style={{ fontSize: "1rem", color: "rgba(36,62,99,var(--text-opacity))" }}>Website Hosting</Typography>} />
                </ListItem>

              </List>

            </Grid>
            <Grid item md={8}>
              <Features />
            </Grid>
          </Grid>

    )
}

export default leaveReview
