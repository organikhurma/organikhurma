import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client
// Note: process.env.API_KEY is injected by the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a creative product description using Gemini.
 * @param productName Name of the product
 * @param features Key features or keywords
 */
export const generateProductDescription = async (productName: string, features: string): Promise<string> => {
  try {
    const prompt = `
      Sen lüks ve organik bir hurma (date fruit) satış sitesi için içerik yazarısin.
      
      Aşağıdaki ürün için Türkçe, iştah açıcı, satış odaklı ve samimi bir ürün açıklaması yaz.
      Maksimum 2 cümle olsun. Vurgu doğallık ve lezzet üzerine olsun.
      
      Ürün Adı: ${productName}
      Özellikler: ${features}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
        topK: 40,
        maxOutputTokens: 100,
      }
    });

    return response.text?.trim() || "Açıklama oluşturulamadı.";
  } catch (error) {
    console.error("Gemini AI Error:", error);
    return "Yapay zeka servisi şu an kullanılamıyor. Lütfen manuel giriş yapınız.";
  }
};