import React from 'react';
import Header from '../../components/header';
import { 
    InputStyle, ButtonConfirm , PageContainer, FormContainer
} from './styled';


const SignUpPage = () => {
    return (
        <div>
        <Header />
            <PageContainer>
                <FormContainer>
                    <InputStyle 
                        nanme='name'
                        value=''
                        onChange=''
                        type='name'
                        placeholder='Nome'
                    />
                    <InputStyle 
                        nanme='email'
                        value=''
                        onChange=''
                        type='email'
                        placeholder='Email'
                        />
                    <InputStyle 
                        nanme='nickname'
                        value=''
                        onChange=''
                        type='text'
                        placeholder='Apelido'
                        />
                    <InputStyle 
                        nanme='password'
                        value=''
                        onChange=''
                        type='password'
                        placeholder='Senha'
                    />
                    <InputStyle 
                        nanme='password'
                        value=''
                        onChange=''
                        type='password'
                        placeholder='Confirme sua senha'
                    />        
                    <ButtonConfirm 
                        onClick=''>
                        Confirmar dados
                    </ButtonConfirm>
                </FormContainer>
            </PageContainer>
        </div>
    )
};

export default SignUpPage;