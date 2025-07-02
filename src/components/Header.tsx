import React, { useState } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { useState } from "react";
import AuthModal from "./AuthModal";

const [showAuth, setShowAuth] = useState(false);


interface HeaderProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

export default function Header({ onLoginClick, onRegisterClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ConversãoZap</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('funcionalidades')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Funcionalidades
            </button>
            <button
              onClick={() => scrollToSection('precos')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Preços
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setShowAuth(true)}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Entrar
            </button>
            <button
              onClick={onRegisterClick}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Criar Conta Grátis
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('funcionalidades')}
                className="text-gray-600 hover:text-gray-900 text-left"
              >
                Funcionalidades
              </button>
              <button
                onClick={() => scrollToSection('precos')}
                className="text-gray-600 hover:text-gray-900 text-left"
              >
                Preços
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gray-600 hover:text-gray-900 text-left"
              >
                FAQ
              </button>
              <hr className="border-gray-200" />
              <button
                onClick={onLoginClick}
                className="text-gray-600 hover:text-gray-900 text-left"
              >
                Entrar
              </button>
              <button
                onClick={onRegisterClick}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-left"
              >
                Criar Conta Grátis
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
