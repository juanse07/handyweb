import React,{ useState,useEffect } from "react";
import {db} from '../../firebase/config'



const UseFg = () => {
    const [name,setname]=useState('');
    const [Lname,setLname]=useState('');
    const [pnum,setpnum]=useState('');
    const [email,setemail]=useState('');
    const handlename=(event)=>{
        setname(event.target.value);

    }
    const handlelname=(event)=>{
        setLname(event.target.value);    
        
    }
    const handlepnum=(event)=>{
        setpnum(event.target.value);

        
    }
    const handleemail=(event)=>{
        setemail(event.target.value);

        
    }
    const handlesubmit=(event)=>{
        event.preventDefault();
        additem(name,Lname,pnum,email);

    }
    const additem=(name,Lname,pnum,email)=>{
        db.collection("CreatedProject").add({
            Name:{name},
            Last_Name:{Lname},
            Phone_Number:{pnum},
            Email:{email}
            
        });
}
   return {name,Lname,pnum,email,handlename, handlepnum, handleemail,handlelname,handlesubmit,additem};

}

export default UseFg
