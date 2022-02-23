import styled from 'styled-components';
import {PRIMARYCOLOR} from '@/common/commonCss.js'
export const JobWrapper = styled.div `
 
    .title{
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 50px;
    }
    .ant-btn {
        margin: 0 50%;
        transform: translateX(-50%);
    }

    .ant-col{
        margin: 5px 0;
    }
    .index {
        vertical-align: middle;
        font-size: 25px;
    }
    .ant-tag {
        margin-left: 20px;
        margin-right: 10px;
    }
    .taskItem {
        display: flex;
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px dotted #ccc;
        span{
            font-size: 30px;
            font-weight: bold;
            color: ${PRIMARYCOLOR};
            margin-right: 10px;
        }
        h2 {
            color: #000 !important;
            margin-bottom: 0;
        }
    }
    /* .ant-alert{
        margin-top: 50px;
        text-align: center;
    }
    .ant-alert-content{
        width: 20px;
    } */
`
export const ResultWrapper = styled.div `
    display: ${(props) =>{return props.showResult ? 'block':'none'} };
    font-size: 12px;
    padding: 10px;
    color: ${(props) => {return props.bgColor}};
    border: 1px solid ${(props) => {return props.bgColor === 'green'?'#E2E2E2':'#F7C2C2'}} ;
    background-color: ${(props) => {return props.bgColor === 'green'?'#F8F8F8':'#FFF3F3'}} ;    
    .tips {
        font-size: 15px;
    }
    .answer{
        margin-left: 5px;
        margin-right: 5px;
        font-size: 20px;
    }
`
export const RadioWrapper = styled.div `
    .ant-radio-wrapper {
        margin: 5px 0;
        ::before {
            content: '${(props) =>{return props.optionName+'.'}}';
            font-size: 15px;
            margin-right: 10px;
        }
    }
`
export const CheckBoxWrapper = styled.div `
    .ant-checkbox-wrapper {
        ::before {
            content: '${(props) =>{return props.optionName+'.'}}';
            font-size: 15px;
            margin-right: 10px;
        }
    }
`