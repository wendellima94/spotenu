import React, { useState } from 'react';
import { 
    ButtonConfirm, PageContainer, FormContainer, InputStyle
} from './styled'; 

import Header from '../../components/header';


const BandRegistrationPage = () => {

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
                    nanme='band-name'
                    value=''
                    onChange=''
                    type='text'
                    placeholder='Nome da sua banda'
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

export default BandRegistrationPage;