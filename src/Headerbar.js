import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import './App.css';


export default function ButtonAppBar() {
  
    
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
    Password:<input type="password" id="password"/>
       </form>

            </td>
            </tr>
<tr>
    <td>
        <p>No account ?</p>
    </td>
</tr>

<tr>
    <td>
   <a href="http://127.0.0.1:5500/src/Login.html" rel="noreferrer" target="_blank">create new login</a>
    </td>
</tr>


          </table>
          
    </Box>
  );
}

