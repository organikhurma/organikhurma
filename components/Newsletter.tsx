import React from 'react';

export const Newsletter: React.FC = () => {
    return (
        <div className="relative bg-primary-900 py-20 px-4 overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-primary-800 opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent-600 opacity-20 blur-3xl"></div>
            
            <div className="relative max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                    Lezzetli Fırsatları Kaçırmayın
                </h2>
                <p className="text-primary-200 mb-8 max-w-2xl mx-auto">
                    İlk siparişinize özel <span className="text-accent-400 font-bold">%10 indirim</span> kodu ve yeni hasat haberleri için bültenimize abone olun.
                </p>
                
                <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input 
                        type="email" 
                        placeholder="E-posta adresiniz" 
                        className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-accent-500 backdrop-blur-sm"
                    />
                    <button 
                        type="submit"
                        className="px-8 py-4 rounded-xl bg-accent-500 text-white font-bold hover:bg-accent-600 transition-colors shadow-lg"
                    >
                        Abone Ol
                    </button>
                </form>
                <p className="mt-4 text-xs text-primary-400">Spam yok, sadece lezzet var.</p>
            </div>
        </div>
    );
};