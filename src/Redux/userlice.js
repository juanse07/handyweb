import {createSlice} from '@reduxjs/toolkit';

export const userSlice=createSlice({
    name:"username",
    initialState:{
        name:"Juan Sebastian Gomez",
        email:"juan2007@gmail.com",
        lname:"Gomez",
        phone:"7864903003",
        address:"10s sherman street",
        numDonuts:1,
        numDonuts2:1,
        date1:"000000",
        
    },
   

    reducers:{
        update:(state,action)=>{
            state.name=action.payload.name;
            state.email=action.payload.email;
            state.lname=action.payload.lname;
            state.phone=action.payload.phone;
            state.address=action.payload.address;
            state.numDonuts=action.payload.numDonuts;
            state.numDonuts2=action.payload.numDonuts2;
            state.numDonuts3=action.payload.numDonuts3 ;
            state.numDonuts4=action.payload.numDonuts4 ;
           
            
        },
        addhours:(state,action)=>{
            state.numDonuts=action.payload.numDonuts + " Hours";
        },
        adddate:(state,action)=>{
            state.date1=action.payload.date1;
        
        },
       

        
    },
});

export const {update,addhours,adddate}=userSlice.actions;

export default userSlice.reducer;