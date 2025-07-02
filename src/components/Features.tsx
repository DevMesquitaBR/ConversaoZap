import React from 'react';
import { Link, BarChart3, Palette, Users, Globe, Target } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Link,
      title: 'Link Profissional',
      description: 'Crie links únicos e profissionais que transmitem confiança e aumentam a credibilidade da sua marca.',
      color: 'bg-blue-500'
    },
    {
      icon: BarChart3,
      title: 'Rastreio por UTM',
      description: 'Monitore de onde vêm seus clientes com parâmetros UTM automáticos e relatórios detalhados.',
      color: 'bg-green-500'
    },
    {
      icon: Target,
      title: 'Integração com Pixel',
      description: 'Conecte com Facebook Pixel e Google Analytics para otimizar suas campanhas de marketing.',
      color: 'bg-purple-500'
    },
    {
      icon: Palette,
      title: 'Avatar e Botões',
      description: 'Personalize completamente com sua foto, cores da marca e botões adicionais customizados.',
      color: 'bg-orange-500'
    },
    {
      icon: Globe,
      title: 'Página Otimizada',
      description: 'Cada link gera uma landing page otimizada para conversão com carregamento ultra-rápido.',
      color: 'bg-teal-500'
    },
    {
      icon: Users,
      title: 'Múltiplos Contatos',
      description: 'Gerencie diversos links para diferentes colaboradores, produtos ou campanhas.',
      color: 'bg-red-500'
    }
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Funcionalidades que <span className="text-green-500">Fazem a Diferença</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todas as ferramentas necessárias para transformar seus contatos do WhatsApp 
            em uma máquina de vendas profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 bg-white hover:bg-green-50/50"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para Aumentar Suas Conversões?
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Junte-se a mais de 10.000 profissionais que já aumentaram suas vendas com o ConversãoZap.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Começar Agora Gratuitamente
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}