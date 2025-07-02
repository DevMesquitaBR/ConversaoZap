import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'Como o link é criado?',
      answer: 'Nosso sistema gera automaticamente um link único e personalizado baseado nas informações que você fornece. O processo é instantâneo e o link fica disponível imediatamente após a criação. Você pode personalizar a aparência, mensagem automática, cores e adicionar links extras como Pix, Instagram e site.'
    },
    {
      question: 'Posso integrar com Pixel do Facebook?',
      answer: 'Sim! No plano PRO e Premium, você pode integrar com Facebook Pixel, Google Analytics, Google Tag Manager e outras ferramentas de tracking. Isso permite monitorar conversões, otimizar campanhas e entender melhor o comportamento dos seus clientes.'
    },
    {
      question: 'Posso mudar meu plano depois?',
      answer: 'Claro! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas imediatamente e você só paga a diferença proporcional. Não há taxa de cancelamento e você pode pausar sua assinatura quando quiser.'
    },
    {
      question: 'Os links têm prazo de validade?',
      answer: 'Não! Todos os links criados no ConversãoZap são permanentes e não têm prazo de validade. Mesmo se você cancelar sua assinatura, os links continuarão funcionando. No plano grátis, você mantém 1 link ativo, e nos planos pagos, todos os links permanecem ativos.'
    },
    {
      question: 'Como funciona o rastreamento UTM?',
      answer: 'Os parâmetros UTM são automaticamente adicionados aos seus links, permitindo rastrear a origem do tráfego no Google Analytics. Você pode personalizar utm_source, utm_medium, utm_campaign e outros parâmetros. Isso ajuda a identificar quais campanhas geram mais conversões.'
    },
    {
      question: 'Posso usar meu próprio domínio?',
      answer: 'Sim, no plano Premium você pode usar seu próprio domínio personalizado (ex: link.suaempresa.com). Fornecemos todas as instruções para configuração e nosso suporte técnico te ajuda em todo o processo. Isso aumenta a confiança e fortalece sua marca.'
    },
    {
      question: 'Que tipos de estatísticas posso acessar?',
      answer: 'No plano PRO você tem acesso a estatísticas básicas como número de cliques, origem do tráfego e conversões. No Premium, você tem relatórios avançados com gráficos detalhados, comparação de performance, dados demográficos e exportação de dados.'
    },
    {
      question: 'Como funciona o suporte?',
      answer: 'Oferecemos suporte por email para todos os planos. No PRO você tem suporte prioritário com resposta em até 4 horas. No Premium, você tem suporte dedicado via WhatsApp, email e videochamada, além de treinamento personalizado para sua equipe.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Perguntas <span className="text-green-500">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre o ConversãoZap
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-green-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Não encontrou a resposta que procurava?
          </p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
            Entrar em Contato
          </button>
        </div>
      </div>
    </section>
  );
}