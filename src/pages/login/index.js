import React,{memo} from 'react'
import {LoginWrapper} from './style';
import logoImg from '@/assets/images/logo.png'

export default memo(function Login() { 
    return(
        <LoginWrapper>
            <div className='logo'>
                <img src={logoImg} alt="" />
            </div>
            <div className='left'></div>
            <div className='right'></div>
        </LoginWrapper>
    )
 })