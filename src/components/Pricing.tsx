import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Grátis',
      price: 'R$ 0',
      period: '/mês',
      description: 'Perfeito para começar',
      features: [
        '1 link personalizado',
        'Mensagem automática',
        'Página básica',
        'Suporte por email'
      ],
      limitations: [
        'Sem avatar personalizado',
        'Sem integração com Pixel',
        'Cor padrão apenas',
        'Sem domínio próprio'
      ],
      buttonText: 'Começar Grátis',
      buttonClass: 'bg-gray-600 hover:bg-gray-700 text-white',
      popular: false
    },
    {
      name: 'PRO',
      price: 'R$ 19',
      period: '/mês',
      description: 'Ideal para profissionais',
      features: [
        'Links ilimitados',
        'Cores customizadas',
        'Avatar personalizado',
        'Parâmetros UTM completos',
        'Integração com Pixel',
        'Links adicionais (Pix, Instagram, Site)',
        'Estatísticas básicas',
        'Suporte prioritário'
      ],
      limitations: [],
      buttonText: 'Escolher PRO',
      buttonClass: 'bg-green-500 hover:bg-green-600 text-white',
      popular: true
    },
    {
      name: 'Premium',
      price: 'R$ 39',
      period: '/mês',
      description: 'Para empresas e agências',
      features: [
        'Tudo do plano PRO',
        'Domínio próprio',
        'Estatísticas avançadas',
        'Relatórios de conversão',
        'API de integração',
        'White-label',
        'Suporte dedicado',
        'Treinamento personalizado'
      ],
      limitations: [],
      buttonText: 'Escolher Premium',
      buttonClass: 'bg-purple-600 hover:bg-purple-700 text-white',
      popular: false
    }
  ];

  return (
    <section id="precos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Planos que <span className="text-green-500">Cabem no Seu Bolso</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para o seu negócio. Comece grátis e evolua conforme suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border-2 p-8 ${
                plan.popular
                  ? 'border-green-500 bg-green-50 scale-105'
                  : 'border-gray-200 bg-white'
              } transition-all duration-300 hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Mais Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
                {plan.limitations.map((limitation, limitationIndex) => (
                  <li key={limitationIndex} className="flex items-start space-x-3 opacity-60">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0 flex items-center justify-center">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                    <span className="text-gray-500 line-through">{limitation}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-lg font-semibold transition-colors ${plan.buttonClass}`}>
                {plan.buttonText}
              </button>

              {plan.name === 'PRO' && (
                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center space-x-1 text-sm text-green-600">
                    <Zap className="w-4 h-4" />
                    <span>7 dias grátis para testar</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Não Tem Certeza Qual Plano Escolher?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Fale com nosso time de especialistas e descubra qual plano é ideal para o seu negócio. 
              Consultoria gratuita e sem compromisso.
            </p>
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
              Falar com Consultor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}