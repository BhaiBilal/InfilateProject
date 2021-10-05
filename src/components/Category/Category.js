import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import img from 'images/email-illustration.svg'


const useStyles = makeStyles((theme) => ({
    grid: {
      flexGrow: 2, 
      padding: '20px',
      //backgroundColor: "#EAEAEA",
    },

    paper: {
      padding: theme.spacing(2),
      margin: 'auto', 
      //backgroundColor: "#EAEAEA", 
      boxShadow: 'none', 
    },

    paper1: {
        padding: theme.spacing(2),
        margin: 'auto', 
        marginBottom: '20px',
       // backgroundColor: 'black',  
        height: '500px',
      //  backgroundColor: "#EAEAEA",
      },

    cards_container: {
        //backgroundColor: "#EAEAEA",
    },

    space: {
      //  backgroundColor: "#EAEAEA",
    },

    main: {
        justifyContent: "center",
    },
    main1: {
        marginBottom: "80px",
    },
    pic: {
        marginLeft: "200px",
        marginBottom: "40px",
        fontSize: '50px'
    }


  }));

    function Category() {
    const classes = useStyles();
   

    return (
        <div className={classes.grid}> 
          <div className={classes.cards_container}>
            <Grid item xs={12}>
            <Grid container spacing={4} className={classes.space}> 
                <Grid item xs={12} sm={12}>
                  <Grid container spacing={3} className={classes.main}>
                    <Grid item xs={12} sm={11} className={classes.main1}>
                      <Paper className={classes.paper}>
                        <h1 className={classes.pic}>Category Blogs</h1>
                        <Grid className= {classes.main1} item xs={12}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper1} style={{backgroundImage:"url("+ img +")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></Paper>
                            </Grid>
                            <b>Below is an interactive demo that lets you explore the visual results of the different settings:-</b><br/><br/>
                            <p>Topic sentences are similar to mini thesis statements. Like a thesis statement, a topic sentence has a specific main point. Whereas the thesis is the main point of the essay, the topic sentence is the main point of the paragraph. Like the thesis statement, a topic sentence has a unifying function. But a thesis statement or topic sentence alone doesn’t guarantee unity. An essay is unified if all the paragraphs relate to the thesis, whereas a paragraph is unified if all the sentences relate to the topic sentence. Note: Not all paragraphs need topic sentences. In particular, opening and closing paragraphs, which serve different functions from body paragraphs, generally don’t have topic sentences.</p>
                            <p>Topic sentences are similar to mini thesis statements. Like a thesis statement, a topic sentence has a specific main point. Whereas the thesis is the main point of the essay, the topic sentence is the main point of the paragraph. Like the thesis statement, a topic sentence has a unifying function. But a thesis statement or topic sentence alone doesn’t guarantee unity. An essay is unified if all the paragraphs relate to the thesis, whereas a paragraph is unified if all the sentences relate to the topic sentence. Note: Not all paragraphs need topic sentences. In particular, opening and closing paragraphs, which serve different functions from body paragraphs, generally don’t have topic sentences.</p>
                        </Grid>
                        <Grid className= {classes.main1} item xs={12}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper1} style={{backgroundImage:"url("+ img +")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></Paper>
                            </Grid>
                            <b>Below is an interactive demo that lets you explore the visual results of the different settings:-</b><br/><br/>
                            <p>Topic sentences are similar to mini thesis statements. Like a thesis statement, a topic sentence has a specific main point. Whereas the thesis is the main point of the essay, the topic sentence is the main point of the paragraph. Like the thesis statement, a topic sentence has a unifying function. But a thesis statement or topic sentence alone doesn’t guarantee unity. An essay is unified if all the paragraphs relate to the thesis, whereas a paragraph is unified if all the sentences relate to the topic sentence. Note: Not all paragraphs need topic sentences. In particular, opening and closing paragraphs, which serve different functions from body paragraphs, generally don’t have topic sentences.</p>
                            <p>Topic sentences are similar to mini thesis statements. Like a thesis statement, a topic sentence has a specific main point. Whereas the thesis is the main point of the essay, the topic sentence is the main point of the paragraph. Like the thesis statement, a topic sentence has a unifying function. But a thesis statement or topic sentence alone doesn’t guarantee unity. An essay is unified if all the paragraphs relate to the thesis, whereas a paragraph is unified if all the sentences relate to the topic sentence. Note: Not all paragraphs need topic sentences. In particular, opening and closing paragraphs, which serve different functions from body paragraphs, generally don’t have topic sentences.</p>
                        </Grid>
                        <Grid className= {classes.main1} item xs={12}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper1} style={{backgroundImage:"url("+ img +")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></Paper>
                            </Grid>
                            <b>Below is an interactive demo that lets you explore the visual results of the different settings:-</b><br/><br/>
                            <p>Topic sentences are similar to mini thesis statements. Like a thesis statement, a topic sentence has a specific main point. Whereas the thesis is the main point of the essay, the topic sentence is the main point of the paragraph. Like the thesis statement, a topic sentence has a unifying function. But a thesis statement or topic sentence alone doesn’t guarantee unity. An essay is unified if all the paragraphs relate to the thesis, whereas a paragraph is unified if all the sentences relate to the topic sentence. Note: Not all paragraphs need topic sentences. In particular, opening and closing paragraphs, which serve different functions from body paragraphs, generally don’t have topic sentences.</p>
                            <p>Topic sentences are similar to mini thesis statements. Like a thesis statement, a topic sentence has a specific main point. Whereas the thesis is the main point of the essay, the topic sentence is the main point of the paragraph. Like the thesis statement, a topic sentence has a unifying function. But a thesis statement or topic sentence alone doesn’t guarantee unity. An essay is unified if all the paragraphs relate to the thesis, whereas a paragraph is unified if all the sentences relate to the topic sentence. Note: Not all paragraphs need topic sentences. In particular, opening and closing paragraphs, which serve different functions from body paragraphs, generally don’t have topic sentences.</p>
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

export default Category
