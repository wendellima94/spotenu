import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    color: black;
    background-color: #000000 ;
    @media screen and (min-width: 560px)
    {
    height: 14px;
    }
    padding-bottom: 50px;
    
`
export const ButtonContainer = styled.div`
    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 7fr 2fr 1fr 1fr;
    text-align: center;
    padding: 20px 20px 20px 20px;

`

export const ButtonHome = styled.button`
    width:  58px;
    height: 38px;
    border: none;
    background: none;
    color: #7CFC00;
    font-size: 16px;
    padding-bottom: 16px;
        
`
export const ButtonMenu = styled.button`
    width:  110px;
    height: 38px;
    border-radius: 2px;
    border: none;
    background: none;
    color: #7CFC00;
    font-size: 16px;
    padding-bottom: 16px;
    
`
