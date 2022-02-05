import styled from 'styled-components';

export const LoAndReWrapper = styled.div`
    .title {
        font-size: 38px;
        font-weight: bold;
    }
    .tips{
        color:#666;
        margin: 20px 0;
        button {
            background: none;
            border: none;
            color: skyblue;
            
            :hover {
                border-bottom:1px solid skyblue ;
                cursor: pointer !important;
            }
        }
    }
    .login-form {
        margin-top: 50px;
        .ant-input-affix-wrapper{
            border-radius: 10px;
            height: 60px;
            font-size: 28px;
        }
         .ant-input-affix-wrapper-focused{
            border-width: 3px !important;
            border-right-width: 3px !important;
        }
        .ant-form-item-has-error :not(.ant-input-disabled):not(.ant-input-borderless).ant-input:focus,   .ant-form-item-has-error :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper-focused{
            border-right-width: 3px !important;
            border-width: 3px !important;
        }
        .ant-btn {
            width: 100%;
            height: 50px;
            border-radius: 10px;
            font-size: 20px;
            font-weight: bold;
            
        }

    }
`
