import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './App.css';


export default function ButtonAppBar() {
    let imageStyle = {
        height: "400px",
        width: "400px",
        backgroundImage:
        'url("https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        color: "red", 
     };
    
    
  return (

    
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="red"
           
            sx={{ mr: 2 }}
          >
             <AddHomeOutlinedIcon />
        
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mines Cafe<br></br>
            <i>You have  your orders from here Guys</i>
            
          </Typography>
                    
    </Toolbar>
    
      </AppBar>
      <center><table class = "image" style = {imageStyle}>
            <tr>
                <td>
                    Enter Name:<input type="text" name="t4" placeholder="enter name"/> 
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
<tr>
    <td>
       <center>
        <h1><i style={{color: "blue"}}>Order from here</i></h1>
       </center>
    </td>
</tr>
<tr>
    <td>
    
        <button value="ordered fenchfries" onClick={e => alert(e.target.value)}><i style={{color: "green"}}>Frenchfries </i></button>   180/-
    </td>
    
    <td>
        <button value="orderedcappuccino" onClick={e => alert(e.target.value)}><i style={{color: "green"}}>Cappuccino</i></button>  120/-
    </td>
</tr>
<tr>
    <td>
        <button value="ordered Latee" onClick={e => alert(e.target.value)}><i style={{color: "green"}}>Latee</i></button>  150/-
    </td>
    <td>
        <button value="ordered Breakfastsandwhich" onClick={e => alert(e.target.value)}><i style={{color: "green"}}>Breakfast Sandwhich</i></button>  150/-
    </td>
</tr>
<tr>
    <td>

    </td>
    <td>

    </td><td>

</td>
<td>

    </td>
    <td>

    </td>
    <td>

    </td>
    <td>
    <button><i style={{color: "red"}}>Order</i></button>  
    </td>

</tr>

          </table></center>
      
          
    </Box>
  );
}
