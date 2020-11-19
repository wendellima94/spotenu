import styled from 'styled-components';

export const PageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const FormContainer = styled.form`
    display: grid;
    justify-content: center;
    padding: 40px;
`

export const InputStyle = styled.input`
    margin: 20px;
    display: sticky;
    width: 328px;
    height: 42px;
    border: black 1px solid;
    border-radius: 6px;
    background-color: #ffffffff;
    text-transform: uppercase;
    font-family: Roboto;
    font-size: 16px;
    text-align: center;
    color: #7CFC00;
`

export const ButtonConfirm = styled.button`
    display: sticky;
    margin: 18px;
    width: 334px;
    height: 42px;
    border: none;
    border-radius: 6px;
    background-color: #7CFC00;
    text-transform: uppercase;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000000;
    &:active{
        font-size: small;
        box-shadow: 0 0 0 0.1rem rgba(0,123,255,.5)
    };
    &:focus{
        outline: none;
    }
`