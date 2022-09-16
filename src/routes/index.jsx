import React from 'react';
import { Route, Switch, Routes } from 'react-router-dom';
import All from '../components/Tout';
import Main from '../pages/Layout';

const Home = () => {
    return (
        <Routes>
            <Route key={'main'} element={<Main />} >
                <Route index element={<All />} />
            </Route>
        </Routes>
    );
};

export default Home;