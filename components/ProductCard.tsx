import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  // Random "Sale" logic for visual appeal demo
  const isSale = Math.random() > 0.7;
  const oldPrice = isSale ? Math.round(product.price * 1.2) : null;

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-200 flex flex-col h-full overflow-hidden">
      
      {/* Image Area - Changed to Aspect Square (1:1) for standard e-commerce size */}
      <div className="relative aspect-square overflow-hidden bg-brand-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-white/95 backdrop-blur text-primary-900 shadow-sm border border-brand-100">
                {product.category}
            </span>
            {isSale && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase bg-red-600 text-white shadow-sm">
                    Fırsat
                </span>
            )}
        </div>

        {/* Quick Action overlay (Desktop) */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block bg-gradient-to-t from-black/50 to-transparent">
             <button
                onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(product);
                }}
                className="w-full bg-white text-primary-900 font-bold py-3 rounded-xl shadow-lg hover:bg-primary-50 transition-colors flex items-center justify-center gap-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
                Sepete Ekle
            </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-2">
             <h3 className="text-lg font-serif font-bold text-brand-900 leading-tight group-hover:text-primary-700 transition-colors">
                {product.name}
            </h3>
             <p className="text-xs text-primary-600 mt-1 font-semibold uppercase tracking-wide">{product.weight}</p>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>

        {/* Footer: Price */}
        <div className="flex items-end justify-between mt-auto pt-3 border-t border-brand-100">
            <div className="flex flex-col">
                {isSale && (
                    <span className="text-xs text-gray-400 line-through decoration-red-400">
                        {oldPrice} ₺
                    </span>
                )}
                <div className="text-xl font-bold text-brand-900">
                    {product.price} <span className="text-sm font-normal text-gray-500">₺</span>
                </div>
            </div>
            
            {/* Mobile Button (Icon only) */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(product);
                }}
                className="md:hidden rounded-full bg-primary-800 p-2.5 text-white shadow-md active:scale-95"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
      </div>
    </div>
  );
};