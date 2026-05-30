import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import DiseaseDetection from './pages/DiseaseDetection'
import PredictionResult from './pages/PredictionResult'
import DiseaseInfo from './pages/DiseaseInfo'
import DiseaseDetail from './pages/DiseaseDetail'
import ChatbotAI from './pages/ChatbotAI'
import HistoryDetection from './pages/HistoryDetection'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

function App() {
    const isAuthenticated = !!localStorage.getItem('token')

    return (
        <Router>
            <Toaster position="top-right" />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
                <Route path="/detection" element={isAuthenticated ? <DiseaseDetection /> : <Navigate to="/login" />} />
                <Route path="/prediction/:id" element={isAuthenticated ? <PredictionResult /> : <Navigate to="/login" />} />
                <Route path="/diseases" element={<DiseaseInfo />} />
                <Route path="/diseases/:id" element={<DiseaseDetail />} />
                <Route path="/chatbot" element={isAuthenticated ? <ChatbotAI /> : <Navigate to="/login" />} />
                <Route path="/history" element={isAuthenticated ? <HistoryDetection /> : <Navigate to="/login" />} />
                <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
                <Route path="/settings" element={isAuthenticated ? <Settings /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    )
}

export default App