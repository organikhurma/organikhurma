import React from 'react';
import { ViewState } from '../types';

// --- DASHBOARD ---
export const Dashboard: React.FC<{ onNavigate: (view: ViewState) => void }> = ({ onNavigate }) => {
  return (
    <div class="mx-auto max-w-6xl flex flex-col gap-8 pb-10">
      <div class="flex items-end justify-between">
        <div>
          <h3 class="text-2xl font-bold">Hoşgeldin, Admin 👋</h3>
          <p class="text-sm text-gray-500 mt-1">İşte bugünün mağaza özeti.</p>
        </div>
        <button onClick={() => onNavigate('admin-add-product')} class="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm shadow-primary/30">
          <span class="material-symbols-outlined text-lg">add</span> Yeni Ürün Ekle
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Bugünün Siparişleri", val: "24", change: "+12%", icon: "shopping_bag", color: "text-primary" },
          { title: "Toplam Gelir", val: "₺12,450", change: "+5%", icon: "payments", color: "text-primary" },
          { title: "Stok Uyarıları", val: "3", change: "Kritik", icon: "warning", color: "text-orange-500" },
          { title: "Bekleyen Kargo", val: "8", change: "Sipariş", icon: "local_shipping", color: "text-blue-500" }
        ].map((stat, idx) => (
          <div key={idx} class="flex flex-col gap-2 rounded-xl bg-white p-5 shadow-sm border border-slate-100 relative overflow-hidden group">
            <div class="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span class={`material-symbols-outlined text-6xl ${stat.color}`}>{stat.icon}</span>
            </div>
            <p class="text-slate-500 text-sm font-medium">{stat.title}</p>
            <div class="flex items-baseline gap-2 mt-1">
              <p class="text-3xl font-bold text-slate-900">{stat.val}</p>
              <span class="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 rounded-xl bg-white p-6 shadow-sm border border-slate-100">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-bold">Satış Özeti</h3>
            <select class="text-xs border-none bg-slate-100 rounded-lg py-1.5 px-3 font-medium text-slate-600 cursor-pointer"><option>Son 30 Gün</option></select>
          </div>
          <div class="relative h-64 w-full bg-slate-50 rounded-lg flex items-center justify-center text-slate-400">
             [Chart Visualization Placeholder]
          </div>
        </div>
        <div class="rounded-xl bg-white p-6 shadow-sm border border-slate-100 flex flex-col">
          <h3 class="text-lg font-bold mb-4">Çok Satanlar</h3>
          <div class="flex flex-col gap-4 flex-1">
             <div class="flex items-center gap-3"><div class="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center"><span class="material-symbols-outlined text-slate-500">nutrition</span></div><div class="flex-1 min-w-0"><p class="text-sm font-semibold truncate">Medine Hurması (500g)</p><p class="text-xs text-slate-500">124 Satış</p></div><p class="text-sm font-bold text-primary">₺18,200</p></div>
             <div class="flex items-center gap-3"><div class="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center"><span class="material-symbols-outlined text-slate-500">eco</span></div><div class="flex-1 min-w-0"><p class="text-sm font-semibold truncate">Organik Hurma Özü</p><p class="text-xs text-slate-500">89 Satış</p></div><p class="text-sm font-bold text-primary">₺9,450</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- PRODUCT LIST ---
export const ProductList: React.FC<{ onNavigate: (view: ViewState) => void }> = ({ onNavigate }) => {
   return (
      <div class="flex-1 overflow-y-auto bg-bg-light p-8">
         <div class="max-w-[1400px] mx-auto flex flex-col gap-6">
            <div class="flex flex-col lg:flex-row gap-4 justify-between items-end lg:items-center bg-white p-4 rounded-xl shadow-sm border border-border-color">
               <div class="relative w-full lg:w-96 group">
                  <span class="material-symbols-outlined absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-sub">search</span>
                  <input class="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border-color bg-bg-light text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Ürün adı, SKU veya kategori ara..." type="text"/>
               </div>
               <div class="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                  <div class="hidden md:flex gap-1 bg-border-color p-1 rounded-lg">
                     <button class="px-3 py-1.5 rounded-md bg-white shadow-sm text-xs font-bold text-primary">Tümü</button>
                     <button class="px-3 py-1.5 rounded-md text-text-sub hover:bg-white/50 text-xs font-medium">Aktif Satış</button>
                  </div>
                  <button onClick={() => onNavigate('admin-add-product')} class="flex items-center justify-center gap-2 h-10 px-5 rounded-lg bg-primary hover:bg-primary-dark text-white shadow-lg shadow-orange-500/20 text-sm font-bold">
                     <span class="material-symbols-outlined text-[20px]">add</span> Ürün Ekle
                  </button>
               </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-border-color overflow-hidden">
               <table class="w-full text-left border-collapse">
                  <thead>
                     <tr class="bg-bg-light border-b border-border-color">
                        <th class="py-4 px-6 w-12"><input class="rounded border-border-color text-primary focus:ring-primary/20" type="checkbox"/></th>
                        <th class="py-4 px-4 text-xs font-bold text-text-sub uppercase">Görsel</th>
                        <th class="py-4 px-4 text-xs font-bold text-text-sub uppercase">Ürün Adı</th>
                        <th class="py-4 px-4 text-xs font-bold text-text-sub uppercase">Kategori</th>
                        <th class="py-4 px-4 text-xs font-bold text-text-sub uppercase">Fiyat</th>
                        <th class="py-4 px-4 text-xs font-bold text-text-sub uppercase">Stok</th>
                        <th class="py-4 px-4 text-xs font-bold text-text-sub uppercase">Durum</th>
                        <th class="py-4 px-4 text-xs font-bold text-text-sub uppercase text-right pr-6">İşlemler</th>
                     </tr>
                  </thead>
                  <tbody class="divide-y divide-border-color">
                     {[
                        {name: "Medjool Hurma (Lüx)", sku: "MDJ-001", cat: "Kuru Meyve", price: "450.00 TL", stock: 120, status: "Aktif", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQmmscJy858xsLh_v78ehyzeQEx4ktC3xoSnxxVpgM2C06Fb1M0UHffZ5LOj0UH7TK4khKPQj1stVgqWZ3m8fimdc-JPMki5t09oGC347MsoWCkMJZG2EbADL1ghs0tzLh7OnZBTCk683oNvchPUJ_HuD7TV2mF2L7a1tv2H6pDErQ-HSlqg21JZgy7z8GSAg_c1TC_9YuxvVTbpoKvL7ThIHos9q6gSU7zlT-igsFkun9w7UeBNztBf7rqWvs8KEyFlqIBVnzKSM"},
                        {name: "Acve Hurma", sku: "ACV-005", cat: "Hediyelik", price: "850.00 TL", stock: 45, status: "Kritik Stok", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBGmQrm1_LIHJwle7Ak3hV-4piH7xVeud2ZsOPk4M5bx-eyP1gV24uqyNwuRnj9-rH2XR5sEfGUAM-sGLJy9RMSlisGrTHA1VrHlVXw3dmJB9Sg1ssmZigQskD_vzU_2n-Rx5d9YiJp7YTDcbYJiBWGuIflbSiSjwF4P7CThrgPQme7bcXTis4xGs1KfMVzyCSjwvVMnvZ7EZJlkLx3CY0DVrWjZ0_5WGfZtxG6rspKYI1pOEZ2m9pOsOtoTfe_nPPSYeRA7pbh4s"}
                     ].map((prod, i) => (
                        <tr key={i} class="group hover:bg-bg-light transition-colors">
                           <td class="py-4 px-6"><input class="rounded border-border-color text-primary focus:ring-primary/20" type="checkbox"/></td>
                           <td class="py-4 px-4"><div class="size-12 rounded-lg bg-cover bg-center border border-border-color" style={{backgroundImage: `url('${prod.img}')`}}></div></td>
                           <td class="py-4 px-4"><div class="flex flex-col"><span class="font-medium text-text-main">{prod.name}</span><span class="text-xs text-text-sub">SKU: {prod.sku}</span></div></td>
                           <td class="py-4 px-4"><span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-[#f3ede7] text-[#634e3b]">{prod.cat}</span></td>
                           <td class="py-4 px-4 font-semibold text-text-main">{prod.price}</td>
                           <td class="py-4 px-4"><div class="flex flex-col gap-1"><span class="text-sm font-medium text-green-600">{prod.stock} Adet</span><div class="w-20 h-1.5 bg-border-color rounded-full overflow-hidden"><div class="h-full bg-green-500" style={{width: prod.stock > 100 ? '80%' : '30%'}}></div></div></div></td>
                           <td class="py-4 px-4"><span class={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${prod.status==='Aktif' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-orange-50 text-orange-700 border-orange-100'}`}><span class={`size-1.5 rounded-full ${prod.status==='Aktif' ? 'bg-green-500' : 'bg-orange-500'}`}></span>{prod.status}</span></td>
                           <td class="py-4 px-4 text-right pr-6">
                              <div class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                 <button class="p-2 rounded-lg text-text-sub hover:bg-white hover:text-primary hover:shadow-sm"><span class="material-symbols-outlined text-[20px]">edit</span></button>
                              </div>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   )
}

// --- ADD PRODUCT ---
export const AddProduct: React.FC<{ onNavigate: (view: ViewState) => void }> = ({ onNavigate }) => {
   return (
      <div class="max-w-[1200px] mx-auto p-8">
         <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
               <h1 class="text-3xl font-black text-text-main tracking-tight">Yeni Ürün Ekle</h1>
               <p class="text-text-sub mt-1">Mağazanıza yeni bir hurma veya yan ürün ekleyin.</p>
            </div>
            <div class="flex gap-3">
               <button onClick={() => onNavigate('admin-products')} class="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">İptal</button>
               <button class="px-6 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-bold shadow-sm shadow-primary/30">Ürünü Kaydet</button>
            </div>
         </div>

         <form class="grid grid-cols-1 lg:grid-cols-12 gap-8" onSubmit={(e) => e.preventDefault()}>
            <div class="lg:col-span-8 space-y-8">
               <div class="bg-white rounded-xl shadow-sm border border-border-color p-6">
                  <h3 class="text-lg font-bold mb-5 flex items-center gap-2"><span class="material-symbols-outlined text-primary">info</span> Temel Bilgiler</h3>
                  <div class="space-y-4">
                     <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Ürün Adı</label>
                        <input class="w-full rounded-lg border-gray-300 bg-white text-gray-900 focus:border-primary focus:ring-primary sm:text-sm shadow-sm" placeholder="Örn. Medine Hurması 500g" type="text"/>
                     </div>
                     <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div><label class="block text-sm font-medium text-gray-700 mb-1">Kategori</label><select class="w-full rounded-lg border-gray-300 bg-white"><option>Hurma Çeşitleri</option></select></div>
                        <div><label class="block text-sm font-medium text-gray-700 mb-1">SKU</label><input class="w-full rounded-lg border-gray-300 bg-white" placeholder="HUR-001" type="text"/></div>
                     </div>
                  </div>
               </div>

               <div class="bg-white rounded-xl shadow-sm border border-border-color p-6">
                  <h3 class="text-lg font-bold mb-5 flex items-center gap-2"><span class="material-symbols-outlined text-primary">payments</span> Fiyatlandırma</h3>
                  <div class="space-y-4">
                     <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Satış Fiyatı (TL)</label>
                        <div class="relative rounded-lg shadow-sm"><div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"><span class="text-gray-500 sm:text-sm">₺</span></div><input class="w-full pl-7 rounded-lg border-gray-300 bg-white" placeholder="0.00" type="number"/></div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="lg:col-span-4 space-y-8">
               <div class="bg-white rounded-xl shadow-sm border border-border-color p-6 sticky top-6">
                  <h3 class="text-lg font-bold mb-5 flex items-center justify-between">Yayınla <span class="bg-primary/20 text-primary text-xs px-2 py-1 rounded font-bold uppercase">Taslak</span></h3>
                  <div class="space-y-6">
                     <div>
                        <div class="flex items-center justify-between mb-2"><span class="text-sm font-medium text-gray-700">Görünürlük</span><a class="text-xs text-primary font-medium hover:underline" href="#">Düzenle</a></div>
                        <div class="flex items-center gap-2 text-sm text-gray-500"><span class="material-symbols-outlined text-base">visibility</span> Herkese Açık</div>
                     </div>
                     <button class="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary-dark">Kaydet ve Yayınla</button>
                  </div>
               </div>
            </div>
         </form>
      </div>
   )
}