import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Login from './page/Login';
import Register from './page/Register';

function App() {
    return (
        <div>
            {/* <header className="bg-black flex">
                <h>Hello</h>
                <Link to="/register">
                <button>Register</button>
            </Link>
            </header> */}
        
        <header class="bg-gray-800 text-white">
            <div class="container mx-auto flex items-center justify-between py-4 px-8">
                {/* <!-- Logo --> */}
                <div class="flex-shrink-0">
                <a href="#" class="text-xl font-bold">Logo</a>
                </div>

                {/* <!-- Navigation links --> */}
                <nav class="hidden md:flex space-x-4">
                <a href="#" class="text-sm font-medium hover:text-gray-300">Home</a>
                <a href="#" class="text-sm font-medium hover:text-gray-300">About</a>
                <a href="#" class="text-sm font-medium hover:text-gray-300">Services</a>
                <a href="#" class="text-sm font-medium hover:text-gray-300">Contact</a>
                </nav>

                {/* <!-- Mobile menu button --> */}
                <div class="md:hidden">
                <button class="text-white focus:outline-none">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                </div>
            </div>
            </header>
            
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='register' element={<Register />} />
            </Routes>
            
        </div>
    );
}

export default App;
