import React from 'react';
import { useHistory } from 'react-router-dom';
import { 
    HeaderContainer, ButtonHome, ButtonMenu, ButtonContainer, 
} from './styled';


const Header = () => {

    const history = useHistory();

    const goToHomePage = () => {
        history.push('/');
    }
    const goToLoginPage = () => {
        history.push('/login')
    }
    const goToSignUpPage = () => {
        history.push('/signup')
    }
    const goToBandRegistrationPage = () => {
        history.push('/band-registration')
    }

    return (
        <HeaderContainer>
            <ButtonContainer>
            <ButtonHome onClick={goToHomePage}>
                Inicio
            </ButtonHome>
            <ButtonMenu onClick={goToLoginPage}>
                Login
            </ButtonMenu>
            <ButtonMenu onClick={goToSignUpPage}>
                Cadastrar
            </ButtonMenu>
            <ButtonMenu onClick={goToBandRegistrationPage}>
                Para artistas
            </ButtonMenu>
            </ButtonContainer>
        </HeaderContainer>
    )
};

export default Header;