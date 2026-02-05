import React, { useState } from 'react';
import { ViewState } from '../types';

interface LayoutProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  children: React.ReactNode;
}

export const StoreHeader: React.FC<{ onNavigate: (view: ViewState) => void, cartCount?: number }> = ({ onNavigate, cartCount = 2 }) => {
  return (
    <header class="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border-color">
      <div class="max-w-[1440px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between gap-8">
        <div class="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
          <div class="size-8 text-primary">
            <span class="material-symbols-outlined text-[32px]">spa</span>
          </div>
          <h2 class="text-xl font-bold tracking-tight">organikhurma.com</h2>
        </div>
        
        <nav class="hidden md:flex items-center gap-8">
          <button onClick={() => onNavigate('catalog')} class="text-sm font-medium hover:text-primary transition-colors">Mağaza</button>
          <button class="text-sm font-medium hover:text-primary transition-colors">Hakkımızda</button>
          <button class="text-sm font-medium hover:text-primary transition-colors">Faydaları</button>
          <button onClick={() => onNavigate('contact')} class="text-sm font-medium hover:text-primary transition-colors">İletişim</button>
        </nav>

        <div class="flex items-center gap-4">
          <div class="hidden lg:flex relative items-center">
            <span class="material-symbols-outlined absolute left-3 text-gray-400 text-[20px]">search</span>
            <input 
              class="pl-10 pr-4 py-2 bg-bg-light border border-border-color rounded-full text-sm w-48 focus:w-64 focus:outline-none focus:border-primary transition-all placeholder:text-text-sub" 
              placeholder="Ara..." 
              type="text"
            />
          </div>
          <button 
            onClick={() => onNavigate('cart')}
            class="relative p-2 hover:bg-primary/10 rounded-full transition-colors group"
          >
            <span class="material-symbols-outlined text-2xl group-hover:text-primary">shopping_cart</span>
            {cartCount > 0 && (
              <span class="absolute top-0 right-0 size-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <button class="p-2 hover:bg-primary/10 rounded-full transition-colors group">
            <span class="material-symbols-outlined text-2xl group-hover:text-primary">account_circle</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export const StoreFooter: React.FC<{ onNavigate: (view: ViewState) => void }> = ({ onNavigate }) => {
  return (
    <footer class="bg-surface-light border-t border-border-color py-12 mt-auto">
      <div class="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-2xl">spa</span>
            <span class="font-bold text-lg">organikhurma.com</span>
          </div>
          <p class="text-sm text-text-sub max-w-xs">
            Doğanın en iyi tatlarını doğrudan kapınıza getiriyoruz. Sertifikalı organik ve etik kaynaklı.
          </p>
        </div>
        
        <div class="flex gap-8">
           <div class="flex flex-col gap-2">
              <h4 class="font-bold">Kurumsal</h4>
              <button onClick={() => onNavigate('admin-dashboard')} class="text-sm text-text-sub hover:text-primary text-left">Yönetici Paneli</button>
              <button class="text-sm text-text-sub hover:text-primary text-left">Hakkımızda</button>
           </div>
           <div class="flex flex-col gap-2">
              <h4 class="font-bold">Yardım</h4>
              <button onClick={() => onNavigate('contact')} class="text-sm text-text-sub hover:text-primary text-left">İletişim</button>
              <button class="text-sm text-text-sub hover:text-primary text-left">Kargo Takip</button>
           </div>
        </div>

        <div class="flex gap-4">
          <button class="text-gray-400 hover:text-primary transition-colors"><span class="material-symbols-outlined">thumb_up</span></button>
          <button class="text-gray-400 hover:text-primary transition-colors"><span class="material-symbols-outlined">share</span></button>
          <button class="text-gray-400 hover:text-primary transition-colors"><span class="material-symbols-outlined">mail</span></button>
        </div>
      </div>
      <div class="text-center text-xs text-text-sub mt-8 border-t border-border-color pt-4">
        © 2024 Organik Hurma. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export const AdminSidebar: React.FC<{ currentView: ViewState, onNavigate: (view: ViewState) => void }> = ({ currentView, onNavigate }) => {
  return (
    <aside class="w-64 bg-surface-light border-r border-border-color flex flex-col justify-between h-screen shrink-0 sticky top-0">
      <div class="flex flex-col">
        <div class="p-6 flex items-center gap-3">
          <div class="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span class="material-symbols-outlined">admin_panel_settings</span>
          </div>
          <div class="flex flex-col">
            <h1 class="text-lg font-bold leading-tight tracking-tight">Organik Hurma</h1>
            <p class="text-primary text-xs font-medium uppercase tracking-wide">Yönetici Paneli</p>
          </div>
        </div>
        
        <nav class="flex flex-col gap-1 px-3">
          <button 
            onClick={() => onNavigate('admin-dashboard')}
            class={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group ${currentView === 'admin-dashboard' ? 'bg-bg-light text-primary font-medium' : 'text-text-sub hover:bg-bg-light'}`}
          >
            <span class="material-symbols-outlined text-2xl">dashboard</span>
            <span class="text-sm">Panel Özeti</span>
          </button>
          <button 
            onClick={() => onNavigate('admin-products')}
            class={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group ${currentView === 'admin-products' || currentView === 'admin-add-product' ? 'bg-primary text-white shadow-md shadow-primary/20 font-bold' : 'text-text-sub hover:bg-bg-light'}`}
          >
            <span class="material-symbols-outlined text-2xl">inventory_2</span>
            <span class="text-sm">Ürün Yönetimi</span>
          </button>
          <button class="flex items-center gap-3 px-3 py-3 rounded-lg text-text-sub hover:bg-bg-light transition-colors group">
            <span class="material-symbols-outlined text-2xl">shopping_cart</span>
            <span class="text-sm font-medium">Siparişler</span>
            <span class="ml-auto bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-bold">4</span>
          </button>
          <button class="flex items-center gap-3 px-3 py-3 rounded-lg text-text-sub hover:bg-bg-light transition-colors group">
            <span class="material-symbols-outlined text-2xl">group</span>
            <span class="text-sm font-medium">Müşteriler</span>
          </button>
          <button class="flex items-center gap-3 px-3 py-3 rounded-lg text-text-sub hover:bg-bg-light transition-colors group">
            <span class="material-symbols-outlined text-2xl">settings</span>
            <span class="text-sm font-medium">Ayarlar</span>
          </button>
        </nav>
      </div>

      <div class="p-3 border-t border-border-color">
        <button onClick={() => onNavigate('home')} class="flex w-full items-center gap-3 px-3 py-3 rounded-lg text-text-sub hover:bg-red-50 hover:text-red-600 transition-colors">
          <span class="material-symbols-outlined text-2xl">logout</span>
          <span class="text-sm font-medium">Çıkış Yap (Mağaza)</span>
        </button>
      </div>
    </aside>
  );
};
