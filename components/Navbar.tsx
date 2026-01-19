import React, { useState, useEffect } from 'react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange, cartCount, onOpenCart }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-nav py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => onViewChange('shop')}>
            <span className={`text-2xl md:text-3xl font-serif font-bold tracking-tight transition-colors ${
              scrolled || currentView === 'admin' ? 'text-primary-900' : 'text-white drop-shadow-lg'
            }`}>
              Organik<span className="text-accent-500">Hurma</span>
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-6">
            {currentView === 'shop' && (
              <button
                onClick={onOpenCart}
                className={`relative p-2 transition-transform hover:scale-105 ${
                  scrolled ? 'text-primary-900' : 'text-white'
                }`}
              >
                <div className={`p-2 rounded-full ${scrolled ? 'bg-primary-50' : 'bg-white/20 backdrop-blur-md'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                </div>
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-accent-600 rounded-full shadow-lg border-2 border-white">
                    {cartCount}
                  </span>
                )}
              </button>
            )}
            
            {currentView === 'admin' && (
                <button
                    onClick={() => onViewChange('shop')}
                    className="text-sm font-semibold text-primary-800 hover:text-primary-600 bg-white/50 px-4 py-2 rounded-lg"
                >
                    Mağazaya Dön
                </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};