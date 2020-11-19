import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../Pages/homePage';
import AdmRegisterPage from '../Pages/admRegisterPage';
import ApproveBandsPage from '../Pages/approveBandsPage';
import LoginPage from '../Pages/loginPage';
import SignUpPage from '../Pages/signUpPage';
import BandRegistrationPage from '../Pages/bandRegistrationPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route exact path='/adm-page'>
                    <AdmRegisterPage />
                </Route>
                <Route exact path='/aprove-band'>
                    <ApproveBandsPage />
                </Route>
                <Route exact path='/login'>
                    <LoginPage />
                </Route>
                <Route exact path='/signup'>
                    <SignUpPage />
                </Route>
                <Route exact path='/band-registration'>
                    <BandRegistrationPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router

