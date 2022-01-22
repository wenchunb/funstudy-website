import React, { memo, useEffect, useRef, useState } from "react";
import { LoginWrapper } from "./style";
import logoImg from "@/assets/images/logo.png";
import { LoAndRe } from "@/components/LoAndRe";

export default memo(function Login() {
    const [leftIsShow,setLeftIsShow] = useState('block')
    const triggerRight = useRef();
    let flag = true 
    useEffect(() => {
        window.addEventListener('resize',() => {
            if(window.innerWidth <=950) {
                setLeftIsShow('none')
            }else {
                setLeftIsShow('block')
            }
        })
    },[])
    
    const changeTrigger = () => {
      let triggerTimer;
      clearTimeout(triggerTimer)
      if(flag) {
        flag = false
        triggerRight.current.className= 'right triggerL' 
        triggerTimer = setTimeout(() => {
          triggerRight.current.className= 'right' 
          flag = true
        },500)
      }
        
    }
  return (
    <LoginWrapper leftIsShow = {leftIsShow}>
      <div className="logo">
        <img src={logoImg} alt="" />
        <h1>乐学吧</h1>
      </div>
      <div className="content">
        <div className="left">
          <h1>高效、有效的预习、学习、复习、做作业</h1>
        </div>
        <div className="right" ref = {triggerRight}  >
          <LoAndRe changeTrigger = {changeTrigger}/>
        </div>
      </div>
    </LoginWrapper>
  );
});
