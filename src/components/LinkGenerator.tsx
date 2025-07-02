import React, { useState } from 'react';
import { Copy, Download, Eye, Settings, Upload } from 'lucide-react';

export default function LinkGenerator() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    utmSource: '',
    utmMedium: '',
    utmCampaign: '',
    buttonColor: '#25D366',
    avatar: null as File | null,
    pixLink: '',
    instagramLink: '',
    websiteLink: ''
  });

  const [generatedLink, setGeneratedLink] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, avatar: file }));
    }
  };

  const generateLink = async () => {
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      const linkId = Math.random().toString(36).substring(2, 15);
      const baseUrl = 'https://conversaozap.com';
      const params = new URLSearchParams();
      
      if (formData.utmSource) params.append('utm_source', formData.utmSource);
      if (formData.utmMedium) params.append('utm_medium', formData.utmMedium);
      if (formData.utmCampaign) params.append('utm_campaign', formData.utmCampaign);
      
      const paramString = params.toString();
      const link = `${baseUrl}/l/${linkId}${paramString ? '?' + paramString : ''}`;
      
      setGeneratedLink(link);
      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink);
    // Add toast notification here
  };

  return (
    <section id="gerador" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Gerador de Link <span className="text-green-500">Interativo</span>
          </h2>
          <p className="text-xl text-gray-600">
            Configure seu link personalizado em poucos minutos
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome/Empresa
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ex: João Silva"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Número do WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Ex: 5511999999999"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem Automática
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Ex: Olá! Vi que você tem interesse em nossos produtos..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    UTM Source
                  </label>
                  <input
                    type="text"
                    name="utmSource"
                    value={formData.utmSource}
                    onChange={handleInputChange}
                    placeholder="facebook"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    UTM Medium
                  </label>
                  <input
                    type="text"
                    name="utmMedium"
                    value={formData.utmMedium}
                    onChange={handleInputChange}
                    placeholder="social"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    UTM Campaign
                  </label>
                  <input
                    type="text"
                    name="utmCampaign"
                    value={formData.utmCampaign}
                    onChange={handleInputChange}
                    placeholder="promo2024"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cor do Botão
                  </label>
                  <div className="flex items-center space-x-3">
                    <input
                      type="color"
                      name="buttonColor"
                      value={formData.buttonColor}
                      onChange={handleInputChange}
                      className="w-12 h-10 border border-gray-300 rounded-lg cursor-pointer"
                    />
                    <input
                      type="text"
                      value={formData.buttonColor}
                      onChange={(e) => setFormData(prev => ({ ...prev, buttonColor: e.target.value }))}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Avatar
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      id="avatar-upload"
                    />
                    <label
                      htmlFor="avatar-upload"
                      className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      {formData.avatar ? formData.avatar.name : 'Upload Imagem'}
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Links Adicionais</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Link do Pix
                  </label>
                  <input
                    type="url"
                    name="pixLink"
                    value={formData.pixLink}
                    onChange={handleInputChange}
                    placeholder="https://..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Instagram
                  </label>
                  <input
                    type="url"
                    name="instagramLink"
                    value={formData.instagramLink}
                    onChange={handleInputChange}
                    placeholder="https://instagram.com/..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Site
                  </label>
                  <input
                    type="url"
                    name="websiteLink"
                    value={formData.websiteLink}
                    onChange={handleInputChange}
                    placeholder="https://seusite.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Preview Section */}
            <div className="space-y-6">
              <div className="bg-gray-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview da Página</h3>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                      {formData.avatar ? (
                        <img
                          src={URL.createObjectURL(formData.avatar)}
                          alt="Avatar"
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-500 text-xs">Foto</span>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {formData.name || 'Seu Nome'}
                      </h4>
                      <p className="text-sm text-gray-600">Consultor</p>
                    </div>
                  </div>
                  
                  {formData.message && (
                    <div className="bg-gray-100 rounded-lg p-3 mb-4">
                      <p className="text-sm text-gray-700">
                        {formData.message}
                      </p>
                    </div>
                  )}
                  
                  <button
                    className="w-full py-3 rounded-lg font-semibold text-white transition-colors"
                    style={{ backgroundColor: formData.buttonColor }}
                  >
                    💬 Conversar no WhatsApp
                  </button>
                  
                  {(formData.pixLink || formData.instagramLink || formData.websiteLink) && (
                    <div className="flex justify-center space-x-4 mt-4 pt-4 border-t">
                      {formData.pixLink && (
                        <button className="text-blue-600 hover:text-blue-800 text-sm">
                          💳 Pix
                        </button>
                      )}
                      {formData.instagramLink && (
                        <button className="text-pink-600 hover:text-pink-800 text-sm">
                          📷 Instagram
                        </button>
                      )}
                      {formData.websiteLink && (
                        <button className="text-gray-600 hover:text-gray-800 text-sm">
                          🌐 Site
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={generateLink}
                disabled={!formData.name || !formData.phone || isGenerating}
                className="w-full bg-green-500 text-white py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Gerando Link...</span>
                  </>
                ) : (
                  <>
                    <Settings className="w-5 h-5" />
                    <span>Gerar Link</span>
                  </>
                )}
              </button>

              {generatedLink && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">Link Gerado!</h4>
                  <div className="flex items-center space-x-2 mb-3">
                    <input
                      type="text"
                      value={generatedLink}
                      readOnly
                      className="flex-1 px-3 py-2 bg-white border border-green-300 rounded text-sm"
                    />
                    <button
                      onClick={copyToClipboard}
                      className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-white text-green-600 border border-green-300 py-2 rounded font-medium hover:bg-green-50 transition-colors flex items-center justify-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>Visualizar</span>
                    </button>
                    <button className="flex-1 bg-white text-green-600 border border-green-300 py-2 rounded font-medium hover:bg-green-50 transition-colors flex items-center justify-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>QR Code</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}