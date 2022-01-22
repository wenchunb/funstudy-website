import styled from "styled-components";
import backgroundImg from "@/assets/images/login-bg.jpg";
export const LoginWrapper = styled.div`
 width: 100%;
 height: 100%;
 box-sizing: border-box;
  padding: 20px;
  background-image: url(${backgroundImg});
  background-repeat: repeat;
  background-size: 100% 100%;

  .logo {
    width: 150px;
    height: 50px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    img {
      /* width:auto; */
      height: 100%;
    }
  }
  .content {
    width: 85vw;
    height: 600px;
    max-width: 1180px;
    display: flex;
    margin: auto;
    margin-top:20px;
    justify-content: space-around;
    align-items: center;
    .left {
        max-width: 300px;
        color: #fff;
        line-height: 50px;
        text-align: center;
        display: ${props => props.leftIsShow};
    }
    .right {
        width:500px;
        height: 100%;
        padding: 50px;
        box-sizing: border-box;
        border-radius: 5%;
        background-color: #fff; 
    }
    .triggerL {
      animation: trigger .5s;
    }
    @keyframes trigger {
      50% {
        opacity: .5;
        transform: scale(.95);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`;
