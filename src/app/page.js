'use client';
import Image from 'next/image';
import './globals.css'
import assets  from '@/assets/assets';
import Layout from '@/core/forms/formLayout';
import { useForm } from 'react-hook-form';
import getControls from './controls';
import { useState } from 'react';
import changingLoginFormStates from './utils';

const  Home =() =>{
  const [formState,setFormState]=useState('signUp')
  const controls=getControls(formState)
  const displayText=changingLoginFormStates(formState)

  const buttonText={
    login:'Login Now',
    reset:'Reset Password',
    signUp:'Create Account'
  }

  const {control} = useForm();


  return (
    <div className='home'>
      <Image src={assets.logo_big} alt=""/>
      <div className='login_form'>
         <Layout fields={controls} control={control}/> 
         <button type="button" className='button'>{buttonText[formState]}</button>
              {displayText?.map((item)=>
              <h6 key={item?.text} className='displayText'>
              {item?.text}
              <span className='action' onClick={()=>setFormState(item?.output)}> {item?.action}</span>
            </h6>
              )}
      </div>
        
    </div>
  );
}
export default Home
