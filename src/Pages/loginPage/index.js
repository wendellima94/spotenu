import React from 'react';
import Header from '../../components/header';
import {
     InputStyle, PageContainer, FormContainer, ButtonConfirm
} from './styled';

const LoginPage = () => {
    return (
        <div>
        <Header />
            <PageContainer>
                <FormContainer>
                    <InputStyle 
                        nanme='name'
                        value=''
                        onChange=''
                        type='text'
                        placeholder='Nome ou email'
                    />
                    <InputStyle 
                        nanme='senha'
                        value=''
                        onChange=''
                        type='password'
                        placeholder='Senha'
                    />
                    <ButtonConfirm>
                        Acessar sua conta
                    </ButtonConfirm>
                </FormContainer>
            </PageContainer>
        </div> 

    )
};

export default LoginPage;