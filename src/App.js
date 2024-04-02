import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Login from './page/Login';

function App() {
    return (
        <div>
            <Routes>
                <Route path='login' element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
