import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export default function HeroSection({ onGetStarted }: HeroSectionProps) {
  const scrollToGenerator = () => {
    const element = document.getElementById('gerador');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-green-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Seu Link do WhatsApp{' '}
                <span className="text-green-500">Pode Vender</span>{' '}
                Muito Mais!
              </h1>
              
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Transforme contatos em vendas com links personalizados do WhatsApp. 
                Rastreie resultados, customize a experiência e aumente suas conversões em até 300%.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={scrollToGenerator}
                  className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span>Crie Seu Link Agora – É Grátis</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Ver Demonstração</span>
                </button>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Sem cartão de crédito</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Configuração em 2 minutos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Resultados imediatos</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-green-500 rounded-xl p-4 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <span className="text-green-500 font-bold">📱</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">João Silva</h3>
                      <p className="text-green-100 text-sm">Consultor de Vendas</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-3 mb-4">
                    <p className="text-sm">
                      "Olá! Vi que você tem interesse em nossos produtos. 
                      Que tal agendar uma conversa rápida?"
                    </p>
                  </div>
                  
                  <button className="w-full bg-white text-green-500 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    💬 Conversar no WhatsApp
                  </button>
                  
                  <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-white/20">
                    <button className="text-white/80 hover:text-white">📷 Instagram</button>
                    <button className="text-white/80 hover:text-white">💳 Pix</button>
                    <button className="text-white/80 hover:text-white">🌐 Site</button>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-3 rounded-lg shadow-lg">
                <div className="text-xs font-semibold">Conversões</div>
                <div className="text-2xl font-bold">+185%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}