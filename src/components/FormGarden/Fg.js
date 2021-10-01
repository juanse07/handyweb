import React from 'react'
import FgSignUp from './FgSignUp'
import './Fg.css'
import imgcel from '../../public1/images/cel1.svg'

const Fg = () => {
    return (
        <>
           <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src={imgcel} alt='spaceship' />
        </div>
        <FgSignUp>
              
              </FgSignUp>
        {/* {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )} */}
      </div>
    
           
            
     
        </>
    )
}

export default Fg
