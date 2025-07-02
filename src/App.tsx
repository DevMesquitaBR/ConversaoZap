import React, { useState, useEffect } from 'react';
import { useAuth } from './hooks/useAuth';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import LinkGenerator from './components/LinkGenerator';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

type AppState = 'home' | 'login' | 'register' | 'dashboard';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('home');
  const { user, loading } = useAuth();

  const handleLoginClick = () => setCurrentState('login');
  const handleRegisterClick = () => setCurrentState('register');
  const handleBackToHome = () => setCurrentState('home');
  const handleLoginSuccess = () => setCurrentState('dashboard');
  const handleRegisterSuccess = () => setCurrentState('dashboard');
  const handleLogout = () => setCurrentState('home');

  useEffect(() => {
    if (!loading && user) {
      setCurrentState('dashboard');
    }
  }, [user, loading]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-700">Carregando...</p>
      </div>
    );
  }

  switch (currentState) {
    case 'login':
      return (
        <Login
          onBack={handleBackToHome}
          onRegisterClick={handleRegisterClick}
          onLoginSuccess={handleLoginSuccess}
        />
      );
    case 'register':
      return (
        <Register
          onBack={handleBackToHome}
          onLoginClick={handleLoginClick}
          onRegisterSuccess={handleRegisterSuccess}
        />
      );
    case 'dashboard':
      return <Dashboard onLogout={handleLogout} />;
    default:
      return (
        <div className="min-h-screen bg-white">
          <Header
            onLoginClick={handleLoginClick}
            onRegisterClick={handleRegisterClick}
          />
          <HeroSection onGetStarted={handleRegisterClick} />
          <Features />
          <LinkGenerator />
          <Pricing />
          <FAQ />
          <Footer />
        </div>
      );
  }
}

export default App;
