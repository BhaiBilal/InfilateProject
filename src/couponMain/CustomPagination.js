import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));


function CustomPagination({postPerPage,totalPost,paginate}) {
    const classes = useStyles();
    const pageNumbers = []

    if(totalPost!=0) {
      for(let i=0 ; i<=Math.ceil(totalPost/postPerPage); i++) {
        pageNumbers.push(i)

    }

    }

    const handleChange = (e,page) => {
      // console.log(e)
        paginate(page)
    }

    return (
        <>

            <Pagination onChange={handleChange} count={pageNumbers.length} color="secondary" />
            
          
        </>
    )
}

export default CustomPagination
