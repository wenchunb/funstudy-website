import styled from "styled-components";
import { PRIMARYCOLOR } from "@/common/commonCss";
export const UserINfoWrapper = styled.div`
  height: 150px;
  background: linear-gradient(to right, ${PRIMARYCOLOR}, skyblue);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 80px;
  .userInfo {
    max-width: 500px;
    display: flex;
    align-items: flex-end;
    img {
      max-height: 100px;
      border-radius: 50%;
      border: 5px solid #fff;
    }
    .info {
      padding: 0 20px;
      overflow: hidden;
      h1 {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 0.2em;
      }
      span {
        color: #fff;
      }
    }
    span{
      display: block;
      margin-bottom: 5px;
    }
  }
  .teacherChecked {
    width: 10em;
    height: 3em;
    font-size: 20px;
    :hover {
      box-shadow: 0 0 10px #fff;
    }
  }
`;
export const ClassContentWrapper = styled.div`
  min-height: 480px;
  margin: 20px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 10px 30px;
  .header {
    display: flex;
    margin-top: 30px;
    /* margin-left: 20px;
      margin-right: 20px; */
    justify-content: space-between;
    border-bottom: 2px solid #f5f5f5;
    h2 {
      color: ${PRIMARYCOLOR} !important;
    }
    .addClass {
      color: ${PRIMARYCOLOR};
      border-color: ${PRIMARYCOLOR};
      :hover {
        box-shadow: 0 0 5px skyblue;
      }
    }
  }
  .container {
    ul {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      /* margin: 0 -13px; */
      li {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 20%;
        height: 280px;
        padding: 0 25px;
        margin-bottom: 30px;
        cursor: pointer;

        img {
          width: 100%;
          max-height: 130px;
          border-radius: 10px;
        }
        .title {
          color: #000 !important;
          font-weight: bold;
          /* margin: 10px 0 ; */
        }
        .info {
          color: #666;
          .teacher {
            display: block;
            margin: 5px 0;
          }
          /* .class {
            padding: 0 5px;
          } */
        }
        :hover{
          .title {
            color: ${PRIMARYCOLOR} !important;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1100px) {
    .container {
      ul {
        li {
          width:33.3%
        }
      }
    }
  }
`;
