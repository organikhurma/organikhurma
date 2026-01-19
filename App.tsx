import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductCard } from './components/ProductCard';
import { CartSidebar } from './components/CartSidebar';
import { AdminPanel } from './components/AdminPanel';
import { CheckoutModal } from './components/CheckoutModal';
import { Product, CartItem, ViewState, Discount, SiteSettings } from './types';
import { INITIAL_PRODUCTS, CATEGORIES, INITIAL_SETTINGS } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('shop');
  const [products, setProducts] = useState<Product[]>([]);
  const [discounts, setDiscounts] = useState<Discount[]>([]);
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(INITIAL_SETTINGS);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Load data
  useEffect(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(INITIAL_PRODUCTS);
      localStorage.setItem('products', JSON.stringify(INITIAL_PRODUCTS));
    }

    const savedDiscounts = localStorage.getItem('discounts');
    if (savedDiscounts) {
        setDiscounts(JSON.parse(savedDiscounts));
    }

    const savedSettings = localStorage.getItem('siteSettings');
    if (savedSettings) {
        setSiteSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Save changes
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
      localStorage.setItem('discounts', JSON.stringify(discounts));
  }, [discounts]);

  useEffect(() => {
      localStorage.setItem('siteSettings', JSON.stringify(siteSettings));
  }, [siteSettings]);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateCartQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const handleAddProduct = (newProduct: Product) => {
    setProducts(prev => [...prev, newProduct]);
  };

  const handleDeleteProduct = (id: string) => {
    if(window.confirm('Bu ürünü silmek istediğinize emin misiniz?')) {
        setProducts(prev => prev.filter(p => p.id !== id));
    }
  };

  const handleAddDiscount = (newDiscount: Discount) => {
      setDiscounts(prev => [...prev, newDiscount]);
  };

  const handleDeleteDiscount = (id: string) => {
      if(window.confirm('Bu kuponu silmek istediğinize emin misiniz?')) {
          setDiscounts(prev => prev.filter(d => d.id !== id));
      }
  };

  const handleUpdateSettings = (newSettings: SiteSettings) => {
      setSiteSettings(newSettings);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handlePaymentSuccess = () => {
    setCartItems([]);
    setIsCheckoutOpen(false);
    alert('Siparişiniz başarıyla alındı! Teşekkür ederiz.');
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-50">
      <Navbar 
        currentView={view} 
        onViewChange={setView} 
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {view === 'shop' ? (
        <main className="flex-grow">
          <Hero settings={siteSettings} />
          <Features />
          
          <div id="products" className="py-24 bg-gradient-to-b from-white to-brand-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-accent-600 font-bold tracking-widest uppercase text-xs bg-accent-50 px-3 py-1 rounded-full">Doğal Lezzetler</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mt-4 mb-6">
                        Özel Hasat Koleksiyonu
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Mevsimin en taze hurmaları, özenle seçilip paketlendi. 
                    </p>
                </div>
                
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                                selectedCategory === cat.id
                                    ? 'bg-primary-800 text-white shadow-lg transform -translate-y-0.5'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-primary-500 hover:text-primary-600'
                            }`}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                {filteredProducts.map(product => (
                    <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={addToCart} 
                    />
                ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 text-gray-400">
                        <p className="text-xl font-serif italic">Bu kategoride henüz ürün bulunmamaktadır.</p>
                    </div>
                )}
            </div>
          </div>
        </main>
      ) : (
        <div className="pt-20">
            <AdminPanel 
                products={products}
                discounts={discounts}
                settings={siteSettings}
                onAddProduct={handleAddProduct}
                onDeleteProduct={handleDeleteProduct}
                onAddDiscount={handleAddDiscount}
                onDeleteDiscount={handleDeleteDiscount}
                onUpdateSettings={handleUpdateSettings}
            />
        </div>
      )}

      {/* Footer */}
      <footer className="bg-brand-900 text-white py-16 border-t border-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-1">
                    <span className="text-2xl font-serif font-bold tracking-tight text-white">
                        Organik<span className="text-accent-500">Hurma</span>
                    </span>
                    <p className="mt-6 text-sm leading-relaxed text-brand-200 opacity-80">
                        Doğallıktan ödün vermeden, yüzyıllık lezzet geleneğini modern sofralara taşıyoruz. %100 Müşteri memnuniyeti garantisi.
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-bold text-white mb-6">Alışveriş</h4>
                    <ul className="space-y-3 text-sm text-brand-200 opacity-80">
                        <li><a href="#" className="hover:text-accent-400 transition-colors">Çok Satanlar</a></li>
                        <li><a href="#" className="hover:text-accent-400 transition-colors">İndirimdekiler</a></li>
                        <li><a href="#" className="hover:text-accent-400 transition-colors">Tüm Ürünler</a></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="text-lg font-bold text-white mb-6">Kurumsal</h4>
                    <ul className="space-y-3 text-sm text-brand-200 opacity-80">
                        <li><a href="#" className="hover:text-accent-400 transition-colors">Sertifikalarımız</a></li>
                        <li><a href="#" className="hover:text-accent-400 transition-colors">Kargo ve İade</a></li>
                        <li><a href="#" className="hover:text-accent-400 transition-colors">İletişim</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold text-white mb-6">Bize Ulaşın</h4>
                    <div className="space-y-3">
                         <div className="flex items-center gap-3 text-sm text-brand-200 opacity-80">
                            <svg className="w-5 h-5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            info@organikhurma.com
                         </div>
                         <div className="flex items-center gap-3 text-sm text-brand-200 opacity-80">
                             <svg className="w-5 h-5 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            +90 212 555 00 00
                         </div>
                         <button 
                            onClick={() => setView('admin')}
                            className="flex items-center gap-3 text-sm text-brand-200 opacity-60 hover:opacity-100 hover:text-accent-400 transition-colors mt-6"
                         >
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                             </svg>
                             Yönetici Girişi
                         </button>
                    </div>
                </div>
            </div>
            <div className="mt-16 border-t border-brand-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-400">
                <p>&copy; 2025 OrganikHurma.com. Tüm hakları saklıdır.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <span>Visa</span>
                    <span>Mastercard</span>
                    <span>Troy</span>
                </div>
            </div>
        </div>
      </footer>

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateCartQuantity}
        onCheckout={handleCheckout}
      />
      
      <CheckoutModal 
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        totalAmount={cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </div>
  );
};

export default App;