import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login(){

const[role,setroll]=useState();

const updaterole=(e)=>{
    setroll(e.target.value);
}

const nav=useNavigate();
const login=()=>{
    if (role=="admin")
    {
      nav("/admin")
    }
    if(role=="user"){
       nav("/user")
    }
}


    return<>
    <h2>Login page</h2>
<table align="center"> 
    <tr>
        <td>Username</td>
        <td><input type="text"></input></td>
    </tr>
    <tr>
        <td>Password</td>
        <td><input type="password"></input></td>
    </tr>
    <tr>
        <td>Role</td>
        <td><input type="text" onChange={updaterole}></input></td>
    </tr>
    <tr>
        <td><input type="reset"></input></td>
        <td><input type="button" value="Login" onClick={login}></input></td>
    </tr>
</table>

    </>
}