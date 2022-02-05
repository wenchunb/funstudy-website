import styled from "styled-components";
import { PRIMARYCOLOR } from "../../common/commonCss";

export const NavigationBarWapper = styled.div`
  width: 100%;
  max-height: 60px;
  box-sizing: border-box;
  padding: 5px 30px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  position: ${(props) => props.isFiexd};
  top:0;
  z-index: 999;
  .logo {
    width: 150px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    h1 {
      color: #40a9ff !important;
      font-weight: bold;
    }
  }
  .userInfo {
    max-width: 60px;
    cursor: pointer;
    margin-right: 30px;
  }
  img {
    width: auto;
    height: 100% !important;
    border-radius: 50%;
  }
  .antd-popover-open {
    background-color: none;
    font-size: 35 !important;
  }
`;
export const PopoverContentWapper = styled.div`
  button {
    display: block;
    text-align: center;
    background-color: #fff;
    padding: 5px;
    border: none;
    cursor: pointer;
    :hover{
      color:  ${PRIMARYCOLOR};
      font-weight:bold;
    }
  }
`;
