import styled from 'styled-components'

export const ChartWrapper = styled.div `
    width:50%;
    height: 100%;
    /* background-color: #ff0; */
    #main {
        width: 450px;
        height:600px;
    }
    @media screen and (max-width:1150px) {
        width: 100%;
        #main {
            margin:0 auto;
        }
    }
`