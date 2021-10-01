import React from 'react'
import { Button } from 'react-scroll'
import UseFg from './UseFg'

const FgSignUp = () => {
    const {name,Lname,pnum,email,handlename, handlepnum, handleemail,handlelname,handlesubmit,additem}=UseFg();
    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handlesubmit}>
                <h1>Get the Service as soon as tomorrow

                </h1>
                <div className='form-inputs'>
                    <label htmlFor='UserName'
                    className='form-label'> Client Full Name
                       </label>
                    <input
                    id='username' 
                    type='text' 
                    name='Client Name' 
                    className='form-input'
                    placeholder='Enter your Username'
                    value={name}
                    onChange={handlename}
                    />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='UserName'
                    className='form-label'> Client Last name
                       </label>
                    <input
                    id='userlastname' 
                    type='text' 
                    name='Client Name' 
                    className='form-input'
                    placeholder='Enter your Username'
                    value={Lname}
                    onChange={handlelname}
                    />
                </div>
                <div className='form-inputs'>
                    <label 
                    htmlFor='email'
                    className='form-label'
                    >
                         Email                      
                  </label>
                    <input
                    id='email' 
                    type='text' 
                    name='Client Name' 
                    className='form-input'
                    placeholder='Enter your email'
                    value={email}
                    onChange={handleemail}
                    />
                </div>
                <div className='form-inputs'>
                    <label 
                    htmlFor='phone'
                    className='form-label'
                    >
                       Phone                     
                  </label>
                    <input
                    id='phone' 
                    type='text' 
                    name='Client Name' 
                    className='form-input'
                    placeholder='Enter your phone'
                    value={pnum}
                    onChange={handlepnum}
                    />
                </div>
                <button className='form-input-btn' href='sms:+97864903903,+573144885217?body=Hello HandyJuan!' type='submit'  onClick={handlesubmit} >
                
                Text us!
                </button>


                <a href='sms:+97864903903,+573144885217?body=Hello HandyJuan!'>Click here to text us!</a> 
                
                
 
            </form>

            
        </div>
    )
}

export default FgSignUp
