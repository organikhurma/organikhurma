import React from 'react';
import { SiteSettings } from '../types';

interface HeroProps {
  settings: SiteSettings;
}

export const Hero: React.FC<HeroProps> = ({ settings }) => {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-primary-900 overflow-hidden">
        {/* Background Image Overlay - Darker and richer */}
        <div className="absolute inset-0 z-0">
             <img 
                src={settings.heroImageUrl}
                alt="Hero Background"
                className="w-full h-full object-cover opacity-40 scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/90 to-primary-900/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                
                {/* Text Content */}
                <div className="text-left animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 bg-accent-500/10 border border-accent-500/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-accent-500 animate-pulse"></span>
                        <span className="text-accent-400 text-xs font-bold tracking-widest uppercase">Yeni Mahsul 2025</span>
                    </div>
                    
                    <h1 className="text-5xl lg:text-7xl font-serif font-medium text-white leading-[1.1] mb-8 whitespace-pre-line">
                        {settings.heroTitle}
                    </h1>
                    
                    <p className="text-lg text-primary-100 mb-10 max-w-lg font-light leading-relaxed border-l-2 border-accent-500 pl-6">
                        {settings.heroSubtitle}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-5">
                        <a href="#products" className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wide uppercase rounded-full text-primary-900 bg-white hover:bg-primary-50 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-1">
                            Alışverişe Başla
                        </a>
                    </div>
                </div>

                {/* Floating Product Image */}
                <div className="hidden md:block relative animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                    <div className="relative z-10">
                        {/* Abstract background shape */}
                        <div className="absolute inset-0 bg-primary-500/20 blur-3xl rounded-full transform scale-110"></div>
                        
                         <img 
                            src="https://images.unsplash.com/photo-1588612763264-77e408d249e0?q=80&w=1000&auto=format&fit=crop" 
                            alt="Premium Dates" 
                            className="relative w-full h-auto rounded-[2rem] shadow-2xl border-4 border-white/5 object-cover aspect-square"
                        />
                        
                        <div className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 max-w-xs">
                             <div className="flex items-center gap-4 mb-3">
                                <div className="bg-primary-100 p-3 rounded-full text-primary-700">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                   </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Premium</p>
                                    <p className="text-base font-serif font-bold text-primary-900">Doğallık Garantisi</p>
                                </div>
                             </div>
                             <p className="text-xs text-gray-500 leading-relaxed">
                                Tüm ürünlerimiz özenle seçilmiş, hiçbir katkı maddesi içermeyen doğal mahsuldür.
                             </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};