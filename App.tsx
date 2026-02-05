import React, { useState } from 'react';
import { ViewState } from './types';
import { StoreHeader, StoreFooter, AdminSidebar } from './components/Layouts';
import { Home, ProductDetail, Catalog, Cart, Contact } from './pages/StorePages';
import { Dashboard, ProductList, AddProduct } from './pages/AdminPages';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const isStoreView = ['home', 'product-detail', 'catalog', 'cart', 'contact'].includes(currentView);

  if (isStoreView) {
    return (
      <div class="flex flex-col min-h-screen bg-bg-light text-text-main font-display">
        <StoreHeader onNavigate={setCurrentView} />
        <main class="flex-grow">
          {currentView === 'home' && <Home onNavigate={setCurrentView} />}
          {currentView === 'product-detail' && <ProductDetail />}
          {currentView === 'catalog' && <Catalog />}
          {currentView === 'cart' && <Cart />}
          {currentView === 'contact' && <Contact />}
        </main>
        <StoreFooter onNavigate={setCurrentView} />
      </div>
    );
  }

  // Admin Layout
  return (
    <div class="flex h-screen bg-bg-light font-display">
      <AdminSidebar currentView={currentView} onNavigate={setCurrentView} />
      <div class="flex-1 flex flex-col h-full overflow-hidden">
        {/* Admin Header */}
        <header class="flex h-16 items-center justify-between border-b border-border-color bg-white/80 backdrop-blur-md px-8 sticky top-0 z-10">
           <h2 class="text-xl font-bold text-text-main tracking-tight">
             {currentView === 'admin-dashboard' ? 'Panel Özeti' : 
              currentView === 'admin-products' ? 'Ürün Yönetimi' : 'Ürün Ekle'}
           </h2>
           <div class="flex items-center gap-4">
              <button class="relative rounded-lg p-2 text-gray-500 hover:bg-gray-100"><span class="material-symbols-outlined">notifications</span><span class="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span></button>
              <div class="h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">A</div>
           </div>
        </header>

        <main class="flex-1 overflow-y-auto bg-bg-light">
          {currentView === 'admin-dashboard' && <Dashboard onNavigate={setCurrentView} />}
          {currentView === 'admin-products' && <ProductList onNavigate={setCurrentView} />}
          {currentView === 'admin-add-product' && <AddProduct onNavigate={setCurrentView} />}
        </main>
      </div>
    </div>
  );
}