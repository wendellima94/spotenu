import React from 'react';
import { 
    HomeContainer, ImgFundo    
} from './styled';

import Header from '../../components/header'
import Footer from '../../components/footer'
import imgFundo from '../../assets/fundo-pessoas-bike.png'

const HomePage = () => {
    return (
        <div>
        <Header />
        <HomeContainer>
            <ImgFundo src={imgFundo} />
        </HomeContainer>
        <Footer />
       </div>
    )
};

export default HomePage;