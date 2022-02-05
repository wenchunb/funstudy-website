import React, { memo, useCallback, useEffect, useRef, useState } from "react";

import { LoginWrapper } from "./style";
import logoImg from "@/assets/images/logo.png";
import { LoAndRe } from "@/components/lo-and-re";

export default memo(function Login() {
  const [leftIsShow, setLeftIsShow] = useState("block");
  const [flag, setFlag] = useState("true");
  const [triggerTimer,setTriggerTimer] = useState('')
  const triggerRight = useRef();

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 950) {
        setLeftIsShow("none");
      } else {
        setLeftIsShow("block");
      }
    });
  }, []);
  // 切换登录注册窗口时的动画
  const changeTrigger = useCallback(() => {
    if (flag) {
      setFlag(false);
      triggerRight.current.className = "right triggerL";
      setTriggerTimer(setTimeout(() => {
          triggerRight.current.className = "right";
          setFlag(true);
        }, 500))
    }
  },[flag])
  useEffect(() => {
    return () => {
      clearTimeout(triggerTimer);
    };
  });
  return (
    <LoginWrapper leftIsShow={leftIsShow}>
      <div className="logo">
        <img src={logoImg} alt="" />
        <h1>乐学吧</h1>
      </div>
      <div className="content">
        <div className="left">
          <span>高效、有效的预习、学习、复习、做作业</span>
        </div>
        <div className="right" ref={triggerRight}>
          <LoAndRe changeTrigger={changeTrigger} />
        </div>
      </div>
    </LoginWrapper>
  );
});
