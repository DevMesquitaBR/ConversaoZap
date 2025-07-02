import React, { useState } from 'react';
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
import { useAuth } from './hooks/useAuth'; // ✅ Correto

type AppState = 'home' | 'login' | 'register' | 'dashboard';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('home');
  const { user } = useAuth();

  // Controle de navegação
  const handleLoginClick = () => setCurrentState('login');
  const handleRegisterClick = () => setCurrentState('register');
  const handleBackToHome = () => setCurrentState('home');

  const handleLoginSuccess = () => {
    setCurrentState('dashboard');
  };

  const handleRegisterSuccess = () => {
    setCurrentState('dashboard');
  };

  const handleLogout = () => {
    setCurrentState('home');
  };

  // Redireciona automaticamente se já estiver logado
  React.useEffect(() => {
    if (user) {
      setCurrentState('dashboard');
    }
  }, [user]);

  // Roteamento por estado
  if (currentState === 'login') {
    return (
      <Login
        onBack={handleBackToHome}
        onRegisterClick={handleRegisterClick}
        onLoginSuccess={handleLoginSuccess}
      />
    );
  }

  if (currentState === 'register') {
    return (
      <Register
        onBack={handleBackToHome}
        onLoginClick={handleLoginClick}
        onRegisterSuccess={handleRegisterSuccess}
      />
    );
  }

  if (currentState === 'dashboard') {
    return <Dashboard onLogout={handleLogout} />;
  }

  // Página inicial padrão
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

export default App;
