import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Repo } from '../pages/Repo';
import { NotFound } from '../pages/NotFound';

export const Rotas: React.FC = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path='/repositories/:repository/*' element={<Repo />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </>
    )
}
