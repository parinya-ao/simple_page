import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Login from './page/Login';
import Register from './page/Register';
import Admin from './page/Admin';

function App() {
    return (
        <div>
            <Routes>
                <Route path='login' element={<Login />} />
                <Route path='admin' element={<Admin/>} />
            </Routes>
        </div>
    );
}

export default App;
