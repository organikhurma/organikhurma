import React, { useState } from 'react';
import { ViewState, CartItem } from '../types';

// --- HOME PAGE ---
export const Home: React.FC<{ onNavigate: (view: ViewState) => void }> = ({ onNavigate }) => {
  return (
    <div class="flex flex-col items-center">
      {/* Hero Section */}
      <section class="w-full max-w-[1440px] px-4 md:px-10 lg:px-20 py-6 md:py-10">
        <div class="relative overflow-hidden rounded-2xl min-h-[500px] flex flex-col justify-center items-center text-center p-8 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDVuu9-IXcEjvXmdf58DTaExykvkWL7zeyj7MjKUEoWt49UBc3LOxjw7B2mX6iYB3_lYTZyzJqcg-354c-gkUS6f43H66a72ejhMiu7Gp21297KjTiPb-caVCza3aaHCiHFg1oMJq8Q1IiZF_p_Au4N5uXUTa9wx7wsm90vkphavb2uUBbi9aTXHHLi7B9e2m-D5Kp4GBM7W-Ws8KuLb9N0PmcPlbU2TVTu8WEUtAX28xpgQLpurBHTgUZz3SDwgnM8UwaUuOxMgr0")' }}>
          <div class="max-w-3xl flex flex-col items-center gap-6">
            <h1 class="text-white text-5xl md:text-6xl font-black leading-tight drop-shadow-md">Doğanın En Tatlı Hediyesi</h1>
            <h2 class="text-gray-100 text-lg md:text-xl font-normal max-w-xl drop-shadow-md">Dalından sofranıza, özenle seçilmiş birinci sınıf organik hurmalar.</h2>
            <button onClick={() => onNavigate('catalog')} class="mt-4 rounded-lg h-12 px-8 bg-primary hover:bg-primary-dark transition-colors text-white text-base font-bold shadow-lg">
              Alışverişe Başla
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section class="w-full max-w-[1280px] px-4 md:px-10 lg:px-20 -mt-8 mb-8 relative z-10">
        <div class="bg-white rounded-xl shadow-lg border border-border-color p-6 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-border-color">
          {[
            { icon: 'verified', title: 'Sertifikalı Organik', sub: 'Doğal ve katkısız üretim' },
            { icon: 'local_shipping', title: 'Hızlı Teslimat', sub: 'Aynı gün kargo imkanı' },
            { icon: 'lock', title: 'Güvenli Ödeme', sub: '256-bit SSL koruması' }
          ].map((feature, idx) => (
            <div key={idx} class="flex items-center justify-center gap-4 px-4 pt-4 md:pt-0">
              <span class="material-symbols-outlined text-primary text-4xl">{feature.icon}</span>
              <div class="flex flex-col">
                <span class="text-text-main font-bold text-lg">{feature.title}</span>
                <span class="text-text-sub text-sm">{feature.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Teaser */}
      <section class="w-full max-w-[1280px] px-4 md:px-10 lg:px-20 py-8">
         <div class="flex justify-between items-end mb-6 border-b border-border-color pb-4">
            <h2 class="text-3xl font-bold">Öne Çıkan Ürünler</h2>
            <button onClick={() => onNavigate('catalog')} class="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
               Tümünü gör <span class="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
         </div>
         <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuCX8HNL77fA46RHAbKsKV9x5W3cT3ziT7sr9sHETb8PIfBzLNtgXgImtxkQh9GnjPRrx9Ezth991i4PR0lAFf2shm3_8tp3wtKP78DCRWV1ZsZmdKifUN9_900XZyZ0mmLMMVVgENyrfvrCf1eqKjSATFcBSDyuiA9fwEmiLgDbRSyvsM3LJd9qIy_sp7IqTasfIIdDuOBEQEptv8BBi0QWqVP7VO3NiZmWmcmtycuvb9I18WqkA_xO-fChlL_9eEsRm9BNaYjlpZ0"
              title="Medjool Hurması"
              price="380 ₺"
              desc="İri taneli, yumuşak ve tatlı."
              tag="Çok Satan"
              onClick={() => onNavigate('product-detail')}
            />
            <ProductCard 
               image="https://lh3.googleusercontent.com/aida-public/AB6AXuAs7ekecWKy3HjtgaWWW9FNQfiAfmB8xFM1Z-WKOwVW3nbCCu730ePVsS0k3YWjXfUaBEEzb1E0Go9zRNS1kCTZ39hpJz77pzQu7EKTrVq32WHdTg2yxGre0ef5iB594G9Lwip1xTV4bbIBlHpTVFNtIfBXIOBATyspNzKOiZcpBABsbJaTv6U2o1ncgMHzCza0kgckDnb16USUGD76BVg0UWdOLYM65Hb6EbsfV8RgvIBTTU6tUM3veCwol3q4QAhyT9W7QkQH138"
               title="Khudri Hurması"
               price="320 ₺"
               desc="Karamelize notalar ve çiğnenebilir doku."
               onClick={() => onNavigate('product-detail')}
            />
             <ProductCard 
               image="https://lh3.googleusercontent.com/aida-public/AB6AXuDt3kZtDdW2FmaLwvGKzuy0EQM84XodHDPCQ1oo97Nb1ED2VZWwHPVcKaBzpQBYM2uH6UOMNAbzbpYVwou0nBspA0ZhumumMqOqQHk_ml7xq6QlOkPkyqB7_0N_NnZeZVBhvQvAPDTJTLq_--bZ4o_3rRtZu94qvAti-d93mXrEaWhtfwQsSTMMnkV-sjMV_9x70jFxrg2EM029DoG0cNs5dwlVkBoOQhCVrRO1gUSEKtg9zpSg5q1UEysa4lYItBi2xZekMfaLdA8"
               title="Acve Hurması"
               price="550 ₺"
               desc="Zengin, yumuşak ve manevi değeri yüksek."
               onClick={() => onNavigate('product-detail')}
            />
             <ProductCard 
               image="https://lh3.googleusercontent.com/aida-public/AB6AXuBL_pI850K-7QKQPDSi0sDQZiaE2L0misw6qnXmEHBMgWdPDHl9lMgJZgLcUegUxD90t_5SIRsMiJgVlMpwbRpz7eILj80Ur7L3gVDgP2hxYOGQgux1ir-4unK_2KTGDeJ2U4uBApsOwGzR7zQ2k9_4bCcXRGutkL0__1WO1rCsjxdkduczRYgKUkfpH3NEztWaJNEnzllLceEkiVOhSRMuKDDZ66g8cW7TAt_1g-BcO-_yjyszPeMHOp8qbYVdNofXTL7qj0xIOqI"
               title="Sukkari Hurması"
               price="290 ₺"
               desc="Ağızda eriyen, son derece tatlı lezzet."
               onClick={() => onNavigate('product-detail')}
            />
         </div>
      </section>
    </div>
  );
};

// --- PRODUCT CARD COMPONENT ---
const ProductCard: React.FC<{ image: string, title: string, price: string, desc: string, tag?: string, onClick: () => void }> = ({ image, title, price, desc, tag, onClick }) => (
  <div class="group flex flex-col gap-4 cursor-pointer" onClick={onClick}>
    <div class="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-gray-100">
      <div class="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url('${image}')` }}></div>
      {tag && <div class="absolute top-3 left-3 bg-white/90 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider text-text-main">{tag}</div>}
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex justify-between items-start">
        <h3 class="text-text-main text-lg font-bold leading-tight group-hover:text-primary transition-colors">{title}</h3>
        <p class="text-text-main text-lg font-medium leading-tight">{price}</p>
      </div>
      <p class="text-text-sub text-sm line-clamp-2">{desc}</p>
      <button class="mt-2 w-full rounded-lg bg-surface-light border border-border-color hover:bg-primary hover:text-white font-bold h-10 text-sm transition-colors flex items-center justify-center gap-2">
        <span class="material-symbols-outlined text-[18px]">shopping_bag</span> Sepete Ekle
      </button>
    </div>
  </div>
);

// --- PRODUCT DETAIL PAGE ---
export const ProductDetail: React.FC = () => {
  const [qty, setQty] = useState(1);

  return (
    <div class="max-w-[1280px] mx-auto px-4 md:px-8 py-8 md:py-12">
      <nav class="flex items-center gap-2 text-sm mb-8 text-gray-500">
        <a href="#" class="hover:text-primary">Anasayfa</a>
        <span class="material-symbols-outlined text-sm">chevron_right</span>
        <a href="#" class="hover:text-primary">Mağaza</a>
        <span class="material-symbols-outlined text-sm">chevron_right</span>
        <span class="text-text-main font-medium">Organik Medjool Hurma</span>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Gallery */}
        <div class="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4 h-fit sticky top-24">
           <div class="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible no-scrollbar">
             {[
               "https://lh3.googleusercontent.com/aida-public/AB6AXuCchyP9rwIdFceJ8Dl4ugy2AzZzbNnV_99ww04L3yGuUcPn3BvUasMBiMgW3YfF6pz8p8ksd4GZouoC_lvdRkjx0CUIVOa2g9NvTthJ5rVrxnztiTPbddfWYEfSKM71ntYc0KQrlCkZHhCtWODAvnLYKgYvsYu2hy3fi-vGC4vXwl1n7hFX-TQDeXxW4ncfHgmyBUeq5EiqbeeS_4DwN-IC-RIO7YcKfVxLygJzme5_vQquUpx2tNE86oEF69mBAPxVaZWDoHZ1d8A",
               "https://lh3.googleusercontent.com/aida-public/AB6AXuBjmB7L48lWgMXBgXjFNuzwMSHEDJCJaZvjptuLI7M_NEsfZnt_y7ftMTWEZVDxMrKKAESnXrFTWlPVdYA9wJS7kpo9eBNtpjxRDMB3LEfL1j9JunZtuxPR-_K61zMS6UKaELk4NsJdkFGoIOj8nNGZBuYUq0y8htDajAoAuYVmIQuaTkFb_ewREfyOuVbEeV7462sepNgQwH4QCp2t-jXFQibxAGW-hv0K0n6HdNQYinQHzLYh5vPmqKo_pLTzrsbYNvb3MT87y3E",
               "https://lh3.googleusercontent.com/aida-public/AB6AXuCXIQdbwjiXrvMeZbMRfkC46ZVqsLOO4MWbmOyF6wgHf3nmwegc6BJJ1ZhUBFpXlwKAxe9Ad5vHtEtphQjELmXbpo9oLpc72nNCx3Ty3tWn4F7BdUbW4AEyum7ZZyEzdtP2GgfKcVVrucjLaRwgYnCzUNzwF-eFdp0ZzvOYwpvBUp5VodGFhFVwa71AZGzzeaJjDYJNCNZbjXR4LZVrs48rmZBpxbrJ9BMhrwRtYcHrsMjMgHAE4sCBmPHoktNf8bDN8K6G6eCdYI4",
               "https://lh3.googleusercontent.com/aida-public/AB6AXuCdU2krOTJg0YIMH2TbDmC4VpaNwiqtoK3uqJ0a4P3NQwSPKLd-il01mbKa0l3X8iAFaEulz6q57_BJFRUiiIJe1liUwYwFcKvZ6sNXWBY7hIkAuE_L5ALH6CDWrH5Yh9WTPDWw-6TVlzb7A7l7Ef-Y8UmKNCDYarU3Zi3u9VDKJsmIFTNVR_K-cpd4rcSU-OECE-if2V6_0j4MOAtsjoBbPlcw1agIXF_0ttlS3RXrg0zH0ESG5J2tc5WRteRmxSasskIiiKPVAnE"
             ].map((img, idx) => (
                <button key={idx} class={`relative size-20 md:size-24 rounded-lg overflow-hidden border ${idx===0 ? 'border-primary ring-2 ring-primary/20' : 'border-transparent opacity-70 hover:opacity-100'} flex-shrink-0 transition-all`}>
                   <div class="w-full h-full bg-cover bg-center" style={{backgroundImage: `url('${img}')`}}></div>
                </button>
             ))}
           </div>
           <div class="flex-1 aspect-square md:aspect-[4/5] lg:aspect-square bg-white rounded-2xl overflow-hidden shadow-sm relative group cursor-zoom-in">
              <div class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC75bHB1HzwrgnykzzsrBQdNAZ1onAMv2sKq2BlZIAZPmSA79rgASQnBMFye-8XCG70p2aFLZDchsb0CJ6qlwwtIgubhjSSn21qwDusED8ISHqcHAxaNV2okM1mYKt3w1Xv0pDGGfzW2qhLyrHCCm_7NaE5lhirGttulPu6vbF6nLfbJcqzgsBMu5nj1oE-CQd7fMotVm3xId-IAdS6sJkv94OXTeS6iL0V9Ek_2Xp5DVFaEuiWBx7Gwr_0yTJsW-jzFRCtdSrRFH4')"}}></div>
              <div class="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Organik</div>
              <div class="absolute top-4 left-24 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Yeni Mahsul</div>
           </div>
        </div>

        {/* Product Info */}
        <div class="lg:col-span-5 flex flex-col gap-8">
           <div class="border-b border-gray-200 pb-6">
              <div class="flex items-center gap-2 mb-2">
                 <div class="flex text-primary text-sm">
                    {[1,2,3,4,5].map(i => <span key={i} class="material-symbols-outlined text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
                 </div>
                 <span class="text-sm text-gray-500 underline cursor-pointer">128 Yorum</span>
              </div>
              <h1 class="text-3xl md:text-4xl font-bold mb-4 leading-tight">Organik Medjool Hurma - Premium Seçim</h1>
              <div class="flex items-end gap-3 mb-4">
                 <span class="text-3xl font-bold text-primary">₺299.90</span>
                 <span class="text-lg text-gray-400 line-through mb-1">₺349.90</span>
                 <span class="text-sm text-gray-500 mb-1.5 ml-1">/ 1kg kutu</span>
              </div>
              <p class="text-gray-600 leading-relaxed">Ürdün Vadisi'nin palmiyelerinden elle toplanmıştır. 'Hurmaların Kralı' olarak bilinen bu hurmalar büyük, yumuşak ve karamel tadındadır.</p>
           </div>

           <div class="bg-white p-6 rounded-xl border border-border-color shadow-sm">
              <div class="flex flex-col gap-6">
                 <div class="flex flex-col gap-3">
                    <label class="text-sm font-semibold">Paket Boyutu</label>
                    <div class="flex flex-wrap gap-3">
                       <button class="px-4 py-2 rounded-lg border-2 border-primary bg-primary/5 text-primary font-medium text-sm">1 kg Kutu</button>
                       <button class="px-4 py-2 rounded-lg border border-gray-200 hover:border-primary/50 text-gray-600 font-medium text-sm transition-colors">2 kg Kutu</button>
                       <button class="px-4 py-2 rounded-lg border border-gray-200 hover:border-primary/50 text-gray-600 font-medium text-sm transition-colors">5 kg Kutu</button>
                    </div>
                 </div>

                 <div class="flex flex-col gap-4 pt-2">
                    <div class="flex flex-col sm:flex-row gap-4">
                       <div class="flex items-center rounded-lg border border-gray-200 h-12 w-32">
                          <button onClick={() => setQty(Math.max(1, qty-1))} class="w-10 h-full flex items-center justify-center text-gray-500 hover:text-primary"><span class="material-symbols-outlined text-sm">remove</span></button>
                          <input readOnly value={qty} class="w-full h-full text-center border-none bg-transparent focus:ring-0 p-0 text-sm font-medium"/>
                          <button onClick={() => setQty(qty+1)} class="w-10 h-full flex items-center justify-center text-gray-500 hover:text-primary"><span class="material-symbols-outlined text-sm">add</span></button>
                       </div>
                       <button class="flex-1 h-12 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg shadow-md shadow-primary/20 flex items-center justify-center gap-2 transition-all">
                          <span class="material-symbols-outlined">shopping_bag</span> Sepete Ekle
                       </button>
                    </div>
                 </div>
                 
                 <div class="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-gray-500">
                    <div class="flex items-center gap-1.5"><span class="material-symbols-outlined text-green-600 text-lg">eco</span> %100 Organik</div>
                    <div class="flex items-center gap-1.5"><span class="material-symbols-outlined text-primary text-lg">local_shipping</span> Kargo Bedava</div>
                    <div class="flex items-center gap-1.5"><span class="material-symbols-outlined text-blue-500 text-lg">verified_user</span> Güvenli Alışveriş</div>
                 </div>
              </div>
           </div>

           {/* Accordion mockup */}
           <div class="flex flex-col divide-y divide-gray-100">
              <div class="py-4">
                 <button class="flex items-center justify-between w-full font-semibold text-text-main">Ürün Açıklaması & Kökeni <span class="material-symbols-outlined text-gray-400">expand_more</span></button>
                 <p class="text-sm text-gray-600 pt-3 leading-relaxed">Medjool hurmalarımız, kuru iklim ve zengin toprağın hurma ağaçları için mükemmel koşulları oluşturduğu tarihi Ürdün Vadisi'nde yetiştirilmektedir.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- CATALOG PAGE ---
export const Catalog: React.FC = () => {
   return (
      <div class="max-w-[1440px] mx-auto px-4 md:px-10 py-6">
         <div class="flex flex-wrap justify-between items-end gap-6 mb-10 pb-6 border-b border-border-color">
            <div class="flex flex-col gap-2 max-w-2xl">
               <h1 class="text-3xl md:text-4xl font-black leading-tight tracking-tight">Hurma Çeşitleri Kataloğu</h1>
               <p class="text-text-sub text-base md:text-lg">Ortadoğu ve Kuzey Afrika'nın en iyi palmiyelerinden özenle seçilmiş organik lezzetler.</p>
            </div>
            <div class="flex items-center gap-3">
               <span class="text-sm font-medium text-text-sub">Sırala:</span>
               <select class="bg-white border-border-color rounded-lg text-sm py-2 pl-3 pr-8 focus:border-primary focus:ring-0">
                  <option>Öne Çıkanlar</option>
                  <option>Fiyat: Düşükten Yükseğe</option>
                  <option>Fiyat: Yüksekten Düşüğe</option>
               </select>
            </div>
         </div>

         <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Sidebar */}
            <aside class="w-full lg:w-64 flex-shrink-0">
               <div class="sticky top-24 space-y-6">
                  {/* Mock Filters */}
                  <div class="space-y-4">
                     <h3 class="font-bold text-base">Menşei</h3>
                     <div class="space-y-3 pb-2">
                        {["Suudi Arabistan (12)", "Tunus (8)", "Filistin (5)"].map(opt => (
                           <label key={opt} class="flex items-center gap-3 cursor-pointer group/item">
                              <input type="checkbox" class="h-5 w-5 rounded border-border-color text-primary focus:ring-primary/20 cursor-pointer" />
                              <span class="text-sm group-hover/item:text-primary transition-colors">{opt}</span>
                           </label>
                        ))}
                     </div>
                     <hr class="border-border-color" />
                     <h3 class="font-bold text-base">Fiyat Aralığı</h3>
                     <div class="flex items-center gap-2">
                        <input type="number" placeholder="Min" class="w-full pl-3 py-1.5 text-sm rounded border border-border-color focus:border-primary focus:ring-0"/>
                        <span class="text-text-sub">-</span>
                        <input type="number" placeholder="Max" class="w-full pl-3 py-1.5 text-sm rounded border border-border-color focus:border-primary focus:ring-0"/>
                     </div>
                  </div>
                  <button class="w-full py-2.5 mt-6 border border-border-color text-text-sub text-sm font-semibold rounded-lg hover:bg-white hover:text-primary hover:border-primary transition-all">Filtreleri Temizle</button>
               </div>
            </aside>

            {/* Grid */}
            <div class="flex-1">
               <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                  <ProductCard 
                     image="https://lh3.googleusercontent.com/aida-public/AB6AXuBo5Y5DYb6su8I4zKiI4C-Z5f-Kjt3UZ_RCajgnXXPs_1Yuubks8dJ1Vc9Z-a9Kg3KAAB4gJYYbLXCQ-xi9A9OhlUGGv6M-Gkh5iNcLL1NKnvjEQQTEpNyjhbEdJkYfJwwhzWodP9fi4p3iPD9W09AyWiojCGHCGfK96anobOdtlLFnvlZgrRpXkg-Hv27utU51OpO4jMkunsTYTZ2rJsyV8q5OfsEGhaBaJa9bbBjOUwCxCQ1mhZ5K-qPRZOSsQn25Bx3I5qRiins"
                     title="Kral Medjool"
                     price="350.00 ₺"
                     desc="'Hurmaların Kralı' olarak bilinir. Büyük, tatlı ve karamel tadında etli bir yapısı vardır."
                     tag="%100 Doğal"
                     onClick={() => {}}
                  />
                  <ProductCard 
                     image="https://lh3.googleusercontent.com/aida-public/AB6AXuDwV4puCk9KMcY8lsNLcei5REtfmMqFm2S0QJpmCFiatnATCLoVtYzsm-LZ78wtVSdO0xtc14ANVz51lIkS4IliMGME0zuc9tsHzekhpEDRp0Tj-muqCHDqFrPDIhZ3VlpWP1RdudvMq2m5cebM9cM8ei1w67IvuutqTDUgT9zGukhiGfprfUtqhwS47RO4AOZjIXkkLuCSkZc9qihS_3M5IQLdDX5UBOLML3Pouzq39O9xM4R0paOpZ8nZcVNEPdS7iLZOuf_ouhQ"
                     title="Organik Deglet Noor"
                     price="240.50 ₺"
                     desc="Sert dokulu, yarı kuru ve fındıksı bir tada sahip. Hamur işleri için idealdir."
                     tag="Çok Satan"
                     onClick={() => {}}
                  />
                   <ProductCard 
                     image="https://lh3.googleusercontent.com/aida-public/AB6AXuB1lhDUIipkg6ZrZfSAb0O2YGGTDbUTe1j1NJg__EDKzqcP6b61Fxh_VzzRDfqM6G7H77TzAYiOiYCdR3udp3SAqGn7EJ3M6kU-aYyeiGMILcQafhPA7-XbGd3iYgcOicFCXxNuXTDQGrdUxWaV2ZoyRs9kBsLAN1eYKQaLniSVupZnVhm9AS2tZrIlcEnDr7vIXcYa5ZW-mR0w7yzM5oYOptq2JxSBuwBdl8lep6wDAyPdvkppRXoLbhEHdfbxuKIo5KBzL7V0JCc"
                     title="Premium Acve Hurması"
                     price="450.00 ₺"
                     desc="Sağlık faydaları, yumuşak dokusu ve hafif tatlılığı ile çok değerlidir. Köken: Medine."
                     tag="Yeni Mahsul"
                     onClick={() => {}}
                  />
                  <ProductCard 
                     image="https://lh3.googleusercontent.com/aida-public/AB6AXuCynG-zcqyoVdfi3C4arwJZbIMWC4WxyDqa0OoxUKb8f3sNzV5_eC8OE6jilPXR-1gCXqF_Aj-pGURz8YeWIf6cFnTibyC3bNWuiLkng1pGOCjguhwr-u-D6xs66Yt-0vdrYHctSAb0wFE3CfgM8pNn4DNvcAKtjLPGrYLv1E2qJZ0XN6osgEnWHoOA3N-x9GUb73-JWUjeYyGVEw9e2s9oqXs6rKYF6lDae2cbWtzHxOFgRwuJnmxUa_GMjdK4rDJRbkCeF5BYfYw"
                     title="Yaş Sukkari Hurması"
                     price="290.00 ₺"
                     desc="Altın sarısı, koni şeklinde, ağızda eriyen yoğun tatlılık. Tatlı niyetine tüketilebilir."
                     onClick={() => {}}
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

// --- CART PAGE ---
export const Cart: React.FC = () => {
   return (
      <div class="max-w-[1280px] mx-auto px-4 md:px-8 py-8">
         <div class="mb-10 max-w-3xl mx-auto">
            <div class="flex items-center justify-between relative">
               <div class="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-border-color -z-10 rounded-full"></div>
               <div class="absolute left-0 top-1/2 -translate-y-1/2 w-1/4 h-1 bg-primary -z-10 rounded-full"></div>
               <div class="flex flex-col items-center gap-2">
                  <div class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-sm ring-4 ring-bg-light">1</div>
                  <span class="text-sm font-bold text-primary">Sepet</span>
               </div>
               <div class="flex flex-col items-center gap-2">
                  <div class="w-8 h-8 rounded-full bg-border-color text-text-sub flex items-center justify-center text-sm font-bold ring-4 ring-bg-light">2</div>
                  <span class="text-sm font-medium text-text-sub">Teslimat</span>
               </div>
               <div class="flex flex-col items-center gap-2">
                  <div class="w-8 h-8 rounded-full bg-border-color text-text-sub flex items-center justify-center text-sm font-bold ring-4 ring-bg-light">3</div>
                  <span class="text-sm font-medium text-text-sub">Ödeme</span>
               </div>
            </div>
         </div>

         <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Cart Items */}
            <div class="lg:col-span-8 flex flex-col gap-6">
               <div class="flex items-center justify-between pb-2 border-b border-border-color"><h2 class="text-2xl font-bold">Alışveriş Sepetim (2 Ürün)</h2></div>
               <div class="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3 items-start">
                  <span class="material-symbols-outlined text-blue-600 mt-0.5">local_shipping</span>
                  <div>
                     <p class="text-sm text-text-main font-medium">Kargo bedava fırsatını kaçırma!</p>
                     <p class="text-sm text-text-sub mt-1">Sepetinize <span class="font-bold text-primary">70,00 TL</span> daha ekleyin, kargo bedava olsun.</p>
                     <div class="mt-2 h-1.5 w-full bg-blue-200 rounded-full overflow-hidden"><div class="h-full bg-blue-600 w-[85%] rounded-full"></div></div>
                  </div>
               </div>

               {/* Cart Item 1 */}
               <div class="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-border-color flex flex-col sm:flex-row gap-6">
                  <div class="w-full sm:w-32 aspect-square rounded-lg bg-gray-100 flex-shrink-0 overflow-hidden relative">
                     <div class="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJ-ntA6oQxE7Cf5EQs8xoMxF5ENx1WjxKzXBzu-RW-mNnfDxGDX91WGrG6sp13DZcLSBMP0_QS96Pkibisuw6-Z2ZDtCBifqlDwE6fjkCrlp8hYXsmrAKKGRDsF0qbbyZLjUGa_ZcevwlvwyRi9vs97oira0L6zQ0_LS_yiHqD66J_9CE3cvZC_7oh3p35IV8UVC-wa8lKhbm32pjOr8Lg8quIfpUedTNRDw5QuHhV-AKTmfu3eDDOnWWJjn5_PhRi5-jgGCUexdI')"}}></div>
                  </div>
                  <div class="flex-1 flex flex-col justify-between">
                     <div class="flex justify-between items-start gap-4">
                        <div>
                           <h3 class="text-lg font-bold leading-tight">Organik Kudüs Hurması (Jumbo) - 1kg</h3>
                           <p class="text-sm text-text-sub mt-1">Stok Kodu: KDS-001</p>
                           <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-green-50 text-green-700 text-xs font-medium mt-2"><span class="material-symbols-outlined text-[14px]">verified</span> %100 Organik</span>
                        </div>
                        <button class="text-text-sub hover:text-red-500 transition-colors p-1"><span class="material-symbols-outlined">delete</span></button>
                     </div>
                     <div class="flex flex-wrap items-end justify-between gap-4 mt-4 sm:mt-0">
                        <div class="flex items-center gap-3">
                           <span class="text-sm font-medium hidden sm:block">Adet:</span>
                           <div class="flex items-center rounded-lg border border-border-color bg-bg-light p-1">
                              <button class="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200"><span class="material-symbols-outlined text-sm">remove</span></button>
                              <input class="w-10 text-center bg-transparent border-none font-medium focus:ring-0 p-0 text-sm" value="1" readOnly />
                              <button class="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-200"><span class="material-symbols-outlined text-sm">add</span></button>
                           </div>
                        </div>
                        <div class="text-right">
                           <p class="text-xs text-text-sub mb-0.5 line-through">400,00 TL</p>
                           <p class="text-xl font-bold text-primary">350,00 TL</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Summary */}
            <div class="lg:col-span-4">
               <div class="sticky top-24 flex flex-col gap-4">
                  <div class="bg-white rounded-xl shadow-sm border border-border-color p-6">
                     <h2 class="text-xl font-bold mb-6">Sipariş Özeti</h2>
                     <div class="space-y-4 mb-6">
                        <div class="flex justify-between items-center text-sm"><span class="text-text-sub">Ara Toplam</span><span class="font-medium">530,00 TL</span></div>
                        <div class="flex justify-between items-center text-sm"><span class="text-text-sub">Kargo</span><div class="text-right"><span class="line-through text-xs text-text-sub mr-2">50,00 TL</span><span class="font-medium text-primary">20,00 TL</span></div></div>
                        <div class="h-px bg-border-color"></div>
                        <div class="flex justify-between items-center"><span class="text-lg font-bold">Genel Toplam</span><span class="text-2xl font-bold text-primary">550,00 TL</span></div>
                     </div>
                     <button class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 group">
                        <span>Alışverişi Tamamla</span> <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

// --- CONTACT PAGE ---
export const Contact: React.FC = () => {
   return (
      <div class="max-w-7xl mx-auto px-6 py-8 md:py-12">
         <div class="flex flex-col gap-4 mb-12">
            <h1 class="text-4xl md:text-5xl font-black tracking-tight">İletişim</h1>
            <p class="text-text-sub text-lg md:text-xl max-w-2xl">Organik hurma siparişleriniz veya sorularınız için aşağıdaki formu doldurabilirsiniz. Size en kısa sürede dönüş yapacağız.</p>
         </div>
         <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div class="lg:col-span-7 flex flex-col gap-6">
               <form class="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <label class="flex flex-col gap-2"><span class="text-sm font-semibold">Ad Soyad</span><input class="h-12 w-full rounded-lg border-border-color bg-white px-4" placeholder="Adınız ve Soyadınız" type="text"/></label>
                     <label class="flex flex-col gap-2"><span class="text-sm font-semibold">E-posta</span><input class="h-12 w-full rounded-lg border-border-color bg-white px-4" placeholder="ornek@eposta.com" type="email"/></label>
                  </div>
                  <label class="flex flex-col gap-2"><span class="text-sm font-semibold">Konu</span><select class="h-12 w-full rounded-lg border-border-color bg-white px-4"><option>Sipariş Durumu</option><option>Ürün Bilgisi</option></select></label>
                  <label class="flex flex-col gap-2"><span class="text-sm font-semibold">Mesajınız</span><textarea class="w-full rounded-lg border-border-color bg-white p-4 resize-none" placeholder="Lütfen mesajınızı buraya yazın..." rows={5}></textarea></label>
                  <button class="h-12 px-8 rounded-lg bg-primary hover:bg-primary-dark text-white font-bold transition-all w-full md:w-auto">Gönder</button>
               </form>
            </div>
            <div class="lg:col-span-5 flex flex-col gap-8">
               <div class="bg-white rounded-xl p-8 border border-border-color shadow-sm">
                  <h3 class="text-xl font-bold mb-6">İletişim Bilgileri</h3>
                  <div class="flex flex-col gap-6">
                     <div class="flex items-start gap-4"><div class="flex-shrink-0 size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><span class="material-symbols-outlined">location_on</span></div><div><p class="text-sm font-semibold text-text-sub mb-1">Adres</p><p>Merkez Ofis: Yeşilvadi Mah.<br/>Hurma Cad. No: 12, Kat: 3<br/>34000 İstanbul, Türkiye</p></div></div>
                     <div class="flex items-start gap-4"><div class="flex-shrink-0 size-10 rounded-full bg-green-100 flex items-center justify-center text-green-600"><span class="material-symbols-outlined">chat</span></div><div><p class="text-sm font-semibold text-text-sub mb-1">WhatsApp</p><p class="font-medium text-lg">+90 212 555 00 00</p></div></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}