import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, Checkbox, Button, } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useSelector, useDispatch } from 'react-redux'
import IconButton from '@mui/material/IconButton';
import UpdateIcon from '@mui/icons-material/Update';
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

function ServiceListing() {
    const [productList, setProductList] = React.useState([])
    const selector = useSelector((state) => (state));
    const [arr1,setArr1]= React.useState([])
    const dispatch = useDispatch()
    const history = useHistory()

    React.useEffect(() => {

        axios({
          method:'POST',
          url:"http://infilate.com/backend/public/api/products/product-list",
          headers: {
              "token":selector.userLoginLogout.token,
          },
      })
        .then(function (res) {
          setProductList(res.data.Data)
          console.log(res)
        })
        .catch(function (err) {
          console.log(err)
        //   dispatch(userLogoutRequest())  

        });
      },[])

    //   console.log(blogList)

      const handleChange = (id) => {

            if(arr1.length==0){
              setArr1(arrold => [...arrold,id])
            }
            else if(arr1.length>0 && arr1.includes(id)){
              
              // arr1.splice(arr1.indexOf(item),1)
              setArr1(arr1.filter(i=>i!==id))
                // console.log(arr1)      
              }
              else  {
                setArr1(arrold=>[...arrold,id])
              }
      }

      const handleDelete = () => {
        var answer = window.confirm("Save data?");
        const formdata = new FormData()
        formdata.append('id',`[${arr1}]`)
        if (answer) {
            axios({
                method:'POST',
                url:"http://infilate.com/backend/public/api/corporate/blog/delete",
                headers: {
                    "token":selector.userLoginLogout.token,
                },
                data:formdata
            })
              .then(function (response) {
                console.log(response)
              })
              .catch(function (err) {
                console.log(err)
              //   dispatch(userLogoutRequest())  
      
              });
        }
        else {
            return null
        }

      }

      const handleUpdate = (id) => {
        history.push(`/updateProduct/${id}`)
      }

      console.log(arr1)


    return (
        <div style={{paddingTop:'160px',display:'flex', justifyContent:'center',paddingBottom:'50px'}}>
        <Grid item md={8} lg={8} sm={12} style={{overflowX:'auto'}}>
        <TableContainer component={Paper}>
          <Table sx={{ width: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell> S.No </TableCell>
                <TableCell align="center"> Title </TableCell>
                <TableCell align="center">Type</TableCell>
                 {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell> */}
               {/*  <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {productList?.map((row,i) => (
                <TableRow
                  key={i}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {i} <Checkbox onChange={ () => handleChange(row.id) } id={row.id} />
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                   <TableCell align="center">{row.type}</TableCell>
                   <TableCell align="right">
                   <Button onClick={() => handleUpdate(row.id)} size='small' variant="outlined" startIcon={<UpdateIcon />}>
                      Update
                      </Button>
                   </TableCell>
                 {/* <TableCell align="right">{row.protein}</TableCell>  */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Grid>
        <div style={{paddingTop:'17px'}}>
        <Link to='/addProduct'>
        <Button style={{height:'max-content'}} color='secondary' startIcon={<AddIcon />}>
        Add Product
      </Button>
      </Link>
        </div>

        { arr1.length > 0 ? <div className='delete-blog-btn'>
        <Button onClick={handleDelete} size='small' variant="contained" startIcon={<DeleteIcon />}>
            Delete &nbsp;{arr1?.length}
            </Button>
        </div> : 
        null

         }

        </div>
        
      );
}

export default ServiceListing
