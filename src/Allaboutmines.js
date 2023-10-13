 import SnowStorm from 'react-snowstorm';
import { Fade } from "react-swift-reveal";
function Allaboutmines() {
    let imageStyle = {
        height: "1500px",
        width: "1500px",
        backgroundImage:
        'url("https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg")',
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
        color: "white", 
     };
  
    
    return (
        <Fade>
             <SnowStorm/>
        <div
       
           class = "image" style = {imageStyle}
        >
        <h1> <i>Hello users</i></h1>
        <p ><i>Mines  is all about you taste <br></br>Make yoour taste sense fabulous </i></p>
       
        <p ><i>started:2023 October 08<br></br>founder:Saranya Bayaneni</i><br></br>Place:*****</p>
        <p ><i>connecting people with taste and making lives to rethink about fasanating environment<br></br>Come here experience new taste and love</i></p>
        <p>Love ur life </p>
        </div>
       
        </Fade>
       

    );
    
    }
    export default Allaboutmines;
  
