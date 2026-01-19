import React, { useState } from 'react';
import { Product, AdminTab, Discount, SiteSettings } from '../types';
import { generateProductDescription } from '../services/geminiService';

interface AdminPanelProps {
  products: Product[];
  discounts: Discount[];
  settings: SiteSettings;
  onAddProduct: (product: Product) => void;
  onDeleteProduct: (id: string) => void;
  onAddDiscount: (discount: Discount) => void;
  onDeleteDiscount: (id: string) => void;
  onUpdateSettings: (settings: SiteSettings) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ 
  products, 
  discounts,
  settings,
  onAddProduct, 
  onDeleteProduct,
  onAddDiscount,
  onDeleteDiscount,
  onUpdateSettings
}) => {
  const [activeTab, setActiveTab] = useState<AdminTab>(AdminTab.LIST);
  const [isGenerating, setIsGenerating] = useState(false);

  // Product Form State
  const [newProduct, setNewProduct] = useState<Omit<Product, 'id'>>({
    name: '',
    price: 0,
    description: '',
    imageUrl: 'https://picsum.photos/400/400',
    category: 'medine',
    weight: '1kg'
  });
  const [features, setFeatures] = useState('');

  // Discount Form State
  const [newDiscount, setNewDiscount] = useState<{code: string, percentage: number}>({
    code: '',
    percentage: 10
  });

  // Settings Form State
  const [tempSettings, setTempSettings] = useState<SiteSettings>(settings);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || 0 : value
    }));
  };

  const handleGenerateDescription = async () => {
    if (!newProduct.name) {
      alert("Lütfen önce ürün adını giriniz.");
      return;
    }
    setIsGenerating(true);
    const desc = await generateProductDescription(newProduct.name, features || 'Doğal, taze, lezzetli');
    setNewProduct(prev => ({ ...prev, description: desc }));
    setIsGenerating(false);
  };

  const handleSubmitProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const product: Product = {
      ...newProduct,
      id: Date.now().toString()
    };
    onAddProduct(product);
    setNewProduct({
      name: '',
      price: 0,
      description: '',
      imageUrl: 'https://picsum.photos/400/400',
      category: 'medine',
      weight: '1kg'
    });
    setFeatures('');
    setActiveTab(AdminTab.LIST);
  };

  const handleSubmitDiscount = (e: React.FormEvent) => {
    e.preventDefault();
    if(!newDiscount.code) return;
    
    const discount: Discount = {
        id: Date.now().toString(),
        code: newDiscount.code.toUpperCase(),
        percentage: newDiscount.percentage,
        isActive: true
    };
    onAddDiscount(discount);
    setNewDiscount({ code: '', percentage: 10 });
  };

  const handleSettingsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setTempSettings(prev => ({
          ...prev,
          [name]: value
      }));
  };

  const handleSaveSettings = (e: React.FormEvent) => {
      e.preventDefault();
      onUpdateSettings(tempSettings);
      alert('Site ayarları güncellendi!');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Admin Header */}
      <div className="bg-brand-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold">Yönetici Paneli</h1>
          <p className="text-brand-300 mt-2">Mağaza içeriğini, görselleri ve kampanyaları yönetin.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden min-h-[500px]">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 overflow-x-auto">
            <button
              className={`flex-1 py-4 text-center font-medium text-sm whitespace-nowrap px-4 transition-colors ${
                activeTab === AdminTab.LIST 
                  ? 'border-b-2 border-brand-600 text-brand-700 bg-brand-50' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(AdminTab.LIST)}
            >
              Ürün Listesi
            </button>
            <button
              className={`flex-1 py-4 text-center font-medium text-sm whitespace-nowrap px-4 transition-colors ${
                activeTab === AdminTab.ADD 
                  ? 'border-b-2 border-brand-600 text-brand-700 bg-brand-50' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(AdminTab.ADD)}
            >
              Yeni Ürün Ekle
            </button>
            <button
              className={`flex-1 py-4 text-center font-medium text-sm whitespace-nowrap px-4 transition-colors ${
                activeTab === AdminTab.COUPONS 
                  ? 'border-b-2 border-brand-600 text-brand-700 bg-brand-50' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(AdminTab.COUPONS)}
            >
              Kuponlar
            </button>
            <button
              className={`flex-1 py-4 text-center font-medium text-sm whitespace-nowrap px-4 transition-colors ${
                activeTab === AdminTab.SETTINGS 
                  ? 'border-b-2 border-brand-600 text-brand-700 bg-brand-50' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(AdminTab.SETTINGS)}
            >
              Site Ayarları
            </button>
          </div>

          <div className="p-6">
            {activeTab === AdminTab.LIST && (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ürün</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fiyat</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">İşlem</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img className="h-10 w-10 rounded-full object-cover" src={product.imageUrl} alt="" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{product.name}</div>
                              <div className="text-sm text-gray-500">{product.weight}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {product.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {product.price} ₺
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button onClick={() => onDeleteProduct(product.id)} className="text-red-600 hover:text-red-900">Sil</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === AdminTab.ADD && (
              <div className="max-w-2xl mx-auto">
                <form onSubmit={handleSubmitProduct} className="space-y-6">
                  {/* ... Existing Product Form Code ... */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Ürün Adı</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={newProduct.name}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                        placeholder="Örn: Medine Mebrum"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Fiyat (₺)</label>
                      <input
                        type="number"
                        name="price"
                        required
                        min="0"
                        value={newProduct.price}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Ağırlık/Miktar</label>
                      <input
                        type="text"
                        name="weight"
                        value={newProduct.weight}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                        placeholder="1kg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Kategori</label>
                      <select
                        name="category"
                        value={newProduct.category}
                        onChange={handleInputChange}
                        className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                      >
                        <option value="medine">Medine</option>
                        <option value="kudus">Kudüs</option>
                        <option value="iran">İran</option>
                        <option value="ozel">Özel Seri</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Görsel URL</label>
                    <input
                      type="text"
                      name="imageUrl"
                      value={newProduct.imageUrl}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                    />
                    <p className="mt-1 text-xs text-gray-500">Picsum varsayılan olarak ayarlıdır. Değiştirebilirsiniz.</p>
                  </div>

                  <div className="bg-brand-50 p-4 rounded-lg border border-brand-100">
                    <div className="flex justify-between items-center mb-2">
                       <label className="block text-sm font-medium text-brand-900">Yapay Zeka Destekli Açıklama</label>
                       <span className="text-xs text-brand-500 bg-white px-2 py-1 rounded border border-brand-200">Gemini Powered</span>
                    </div>
                    
                    <div className="mb-3">
                        <label className="block text-xs text-gray-500 mb-1">Ürün Anahtar Kelimeleri (AI için ipucu)</label>
                        <input
                            type="text"
                            value={features}
                            onChange={(e) => setFeatures(e.target.value)}
                            placeholder="Örn: yumuşak, çok tatlı, ince kabuklu..."
                            className="block w-full border border-gray-300 rounded-md shadow-sm py-1 px-2 text-sm"
                        />
                    </div>

                    <textarea
                      name="description"
                      rows={3}
                      value={newProduct.description}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-brand-500 focus:border-brand-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2"
                      placeholder="Ürün açıklaması buraya gelecek..."
                    />
                    
                    <button
                      type="button"
                      onClick={handleGenerateDescription}
                      disabled={isGenerating || !newProduct.name}
                      className={`mt-2 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-organic-600 hover:bg-organic-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-organic-500 ${isGenerating ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                      {isGenerating ? 'Oluşturuluyor...' : 'AI ile Açıklama Yaz'}
                    </button>
                  </div>

                  <div className="flex justify-end pt-4 border-t border-gray-200">
                    <button
                      type="submit"
                      className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand-800 hover:bg-brand-900"
                    >
                      Ürünü Kaydet
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === AdminTab.COUPONS && (
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Add Coupon Form */}
                        <div className="md:col-span-1 bg-brand-50 p-6 rounded-xl border border-brand-100 h-fit">
                            <h3 className="text-lg font-bold text-brand-900 mb-4">Yeni Kupon Ekle</h3>
                            <form onSubmit={handleSubmitDiscount} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Kupon Kodu</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={newDiscount.code}
                                        onChange={(e) => setNewDiscount(prev => ({...prev, code: e.target.value}))}
                                        placeholder="Örn: BAHAR20"
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 uppercase"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">İndirim Oranı (%)</label>
                                    <input 
                                        type="number" 
                                        required
                                        min="1"
                                        max="100"
                                        value={newDiscount.percentage}
                                        onChange={(e) => setNewDiscount(prev => ({...prev, percentage: parseInt(e.target.value)}))}
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500"
                                    />
                                </div>
                                <button type="submit" className="w-full bg-accent-600 text-white py-2 rounded-md font-bold hover:bg-accent-700 transition-colors">
                                    Kupon Oluştur
                                </button>
                            </form>
                        </div>

                        {/* Coupon List */}
                        <div className="md:col-span-2">
                             <h3 className="text-lg font-bold text-brand-900 mb-4">Aktif Kuponlar</h3>
                             {discounts.length === 0 ? (
                                 <p className="text-gray-500 italic text-sm border-2 border-dashed border-gray-200 rounded-xl p-8 text-center">Henüz aktif bir indirim kuponu bulunmuyor.</p>
                             ) : (
                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                     {discounts.map(discount => (
                                         <div key={discount.id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center group hover:border-accent-500 transition-colors">
                                             <div>
                                                 <div className="text-xl font-bold text-brand-800 tracking-wider">{discount.code}</div>
                                                 <div className="text-sm text-green-600 font-medium">%{discount.percentage} İndirim</div>
                                             </div>
                                             <button 
                                                onClick={() => onDeleteDiscount(discount.id)}
                                                className="p-2 text-gray-400 hover:text-red-600 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors"
                                                title="Kuponu Sil"
                                             >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                             </button>
                                         </div>
                                     ))}
                                 </div>
                             )}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === AdminTab.SETTINGS && (
                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSaveSettings} className="space-y-8">
                        
                        <div className="bg-brand-50 p-6 rounded-xl border border-brand-100">
                            <h3 className="text-lg font-bold text-brand-900 mb-6">Ana Sayfa Vitrin Ayarları</h3>
                            
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Ana Görsel (Hero Image) URL</label>
                                    <input 
                                        type="text" 
                                        name="heroImageUrl"
                                        value={tempSettings.heroImageUrl}
                                        onChange={handleSettingsChange}
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500"
                                        placeholder="https://..."
                                    />
                                    {/* Image Preview */}
                                    <div className="mt-4 relative aspect-[21/9] w-full rounded-lg overflow-hidden border-2 border-dashed border-gray-300 bg-gray-100">
                                        {tempSettings.heroImageUrl ? (
                                            <img 
                                                src={tempSettings.heroImageUrl} 
                                                alt="Preview" 
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x400?text=Görsel+Yüklenemedi';
                                                }}
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                                                Görsel önizlemesi
                                            </div>
                                        )}
                                        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                                            Önizleme
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Ana Başlık (Büyük Yazı)</label>
                                    <textarea 
                                        name="heroTitle"
                                        rows={2}
                                        value={tempSettings.heroTitle}
                                        onChange={handleSettingsChange}
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500"
                                        placeholder="Örn: Doğanın En Saf Hali"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Alt Açıklama</label>
                                    <textarea 
                                        name="heroSubtitle"
                                        rows={3}
                                        value={tempSettings.heroSubtitle}
                                        onChange={handleSettingsChange}
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500"
                                        placeholder="Kısa ve etkileyici bir açıklama..."
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                             <button
                                type="submit"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-800 hover:bg-brand-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
                              >
                                Ayarları Kaydet
                              </button>
                        </div>
                    </form>
                </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};