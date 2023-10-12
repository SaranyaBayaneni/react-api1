import React from 'react';

function Header() {
    const handler = (e) =>{

       
        let pw=document.getElementById("1").value;
        const a=[];
        if(pw.length<8)
        {
           a.push("password should be greater than 8 characters")
        }
        if(pw.startsWith(" ")||pw.startsWith("%")||pw.startsWith("^")||pw.startsWith("!")||pw.startsWith("+")||pw.startsWith("-")||pw.startsWith("?")||pw.startsWith("/")||pw.startsWith("(")||pw.startsWith(")"))
        {
           a.push("password should only strats with #,@,_ ,0-9,a-z,A-Z only")
        }
        let pws=document.getElementById("4").value;
        if(pw!==pws)
        {

        a.push("password doesnt match")
        }
        if(a[0]!=null)
        {
           alert("password is not strong")
        }
        else{
           alert("password  is ok u can proceed☻")
        }
        
        document.getElementById("2").innerHTML=a.toString();
    }
    return (
        <div>
        <h1> Hello floks</h1>
        <h2>password checker</h2>
        <table height="300">
            <tr>
                <td>
                   
                    </td>
            </tr>
            <tr>
                <td>
                    <form method="get">
                        Password:<input type="password" name="t1" placeholder="password" aria-busy="true" inputmode="full-width-latin" id="1"/>
                    </form>
                    </td>
            </tr>
            <tr>
                <td>
                    <form method="get">
                        Re Enter password :<input type="password" name="t1" placeholder="enter text" id="4"/>
                    </form>
                    </td>
            </tr>
            <tr>
                <td>
                    <button onClick={handler}>check</button>
                </td>
            </tr>
        </table>
        <p id="2">ur result will be displayed</p>
        </div>

    )
    
    }
    export default Header
  
  
