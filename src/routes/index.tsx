import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/repository/:repository" element={<Repository />}/>
        </Routes>
    )
}

export default AppRoutes;
