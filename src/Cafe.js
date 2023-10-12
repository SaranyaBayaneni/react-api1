import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
export default function ButtonAppBar() {
    function App() {
        const[counts,setCounts]=useState(0);
      
        function handleSubmit1()
        {
          setCounts(counts+1)
        }
        function handleSubmit2()
        {
          setCounts(counts-1)
        }
         
  return (
    

    
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
           
            sx={{ mr: 2 }}
          >
             <AddHomeOutlinedIcon />
        
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mines Cafe<br></br>
            <i>place every thing u want from home</i>
            
          </Typography>
          <Button color="inherit" href='http://127.0.0.1:5500/src/Contents.html' rel="noreferrer" target="_blank">Login</Button><br></br>
          
    </Toolbar>
    
      </AppBar>
      <table>
            <tr>
                <td>
                <form height="150">
Enter Name:<input type="text" name="t1" placeholder="enter text"/>
</form>

                </td>
            </tr>
            <tr>
            <td>
            <form>
Enter Mail:<input type="text" name="t5" placeholder="enter mailid"/>
</form>

            </td>

        </tr>
        <tr>
            <td>
            <form>
                <KeyOutlinedIcon />
    Address:<input type="text" id="Adress"/>
       </form>

            </td>
            </tr>
<tr>
    <td>
    phno:<input type="text" id="phno"/>
    </td>
</tr>
<tr>
    <td>
     alternate phno:<input type="text" id="phno"/>
    </td>
</tr>


            
          </table>
    </Box>
  );
}
}
