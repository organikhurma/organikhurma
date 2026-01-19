import { Product, SiteSettings } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Organik Medine Mebrum',
    price: 450,
    description: 'İnce kabuklu, yumuşak ve tatlı. Medine topraklarından geleneksel lezzet.',
    imageUrl: 'https://images.unsplash.com/photo-1563484263301-38e45bae334b?q=80&w=800&auto=format&fit=crop', // Real dates
    category: 'medine',
    weight: '1kg'
  },
  {
    id: '2',
    name: 'Jumbo Kudüs Hurması',
    price: 600,
    description: 'İri taneli, etli ve doyurucu. Özel hasat Kudüs hurmaları.',
    imageUrl: 'https://images.unsplash.com/photo-1628100388901-26792348505e?q=80&w=800&auto=format&fit=crop', // Dates in bowl
    category: 'kudus',
    weight: '1kg'
  },
  {
    id: '3',
    name: 'Acve Peygamber Hurması',
    price: 950,
    description: 'Siyah renkli, şifalı ve manevi değeri yüksek özel seri.',
    imageUrl: 'https://images.unsplash.com/photo-1596708636043-429df2f67643?q=80&w=800&auto=format&fit=crop', // Dark dates
    category: 'ozel',
    weight: '500g'
  },
  {
    id: '4',
    name: 'Yaş Hurma (Berhi)',
    price: 350,
    description: 'Mevsiminde toplanmış, dondurulmuş taze yaş hurma.',
    imageUrl: 'https://images.unsplash.com/photo-1598444983944-77d0a29d6652?q=80&w=800&auto=format&fit=crop', // Fresh dates on tree
    category: 'ozel',
    weight: '1kg'
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'Tümü' },
  { id: 'medine', name: 'Medine' },
  { id: 'kudus', name: 'Kudüs' },
  { id: 'ozel', name: 'Özel Seri' },
];

export const INITIAL_SETTINGS: SiteSettings = {
  heroImageUrl: 'https://images.unsplash.com/photo-1623855244697-5d8fbe9c77e8?q=80&w=2070&auto=format&fit=crop',
  heroTitle: 'Doğanın En Saf Hali',
  heroSubtitle: "Medine ve Kudüs'ün bereketli topraklarından, katkısız ve taptaze. Sofranıza sağlık ve lezzet katın."
};