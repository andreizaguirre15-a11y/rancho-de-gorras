// Rancho de Gorras — catálogo de muestra.
// Reemplaza las imágenes de ejemplo por tus fotos reales y actualiza precios antes de publicar.
const INSTAGRAM_URL = "https://www.instagram.com/"; // Pega aquí el enlace de Instagram de Rancho de Gorras.
const WHATSAPP_NUMBER = ""; // Opcional: número con código de país, solo números. Ejemplo Honduras: 504XXXXXXXX.

const products = [
  { name: "Ariat Western", category: "ESTILO WESTERN", price: "Consultar precio", tag: "DESTACADA", color: "#d6c5a5", description: "Diseño western para llevar todos los días.", image: "" },
  { name: "Classic Ranch", category: "CLÁSICA", price: "Consultar precio", tag: "CLÁSICA", color: "#c6c9b8", description: "Un estilo versátil con carácter de rancho.", image: "" },
  { name: "Rodeo Original", category: "RANCHO", price: "Consultar precio", tag: "NUEVA", color: "#d9bca0", description: "Para completar tu look con personalidad.", image: "" }
];

function capIllustration(color, idx) {
  const stitch = idx === 1 ? "#25372b" : "#f2eee4";
  return `<svg viewBox="0 0 320 260" role="img" aria-label="Ilustración temporal de gorra">
    <ellipse cx="160" cy="212" rx="104" ry="15" fill="#263126" opacity=".12"/>
    <path d="M91 145 Q88 83 124 59 Q160 36 196 59 Q232 83 229 145 Z" fill="${color}" stroke="#5e513e" stroke-width="3"/>
    <path d="M91 145 Q160 162 229 145" fill="none" stroke="#5e513e" stroke-width="3"/>
    <path d="M91 145 Q41 157 35 188 Q31 203 67 203 Q139 207 224 178 Q246 169 229 145 Q161 171 91 145Z" fill="${color}" stroke="#5e513e" stroke-width="3"/>
    <path d="M123 65 Q160 83 197 65" fill="none" stroke="${stitch}" stroke-width="2" opacity=".8"/>
    <path d="M160 47 L160 147" fill="none" stroke="#5e513e" stroke-width="2" opacity=".6"/>
    <rect x="126" y="103" width="68" height="31" rx="3" fill="#25372b"/>
    <text x="160" y="123" text-anchor="middle" font-family="Arial,sans-serif" font-size="12" font-weight="bold" fill="#d6bd8e">RANCHO</text>
    <path d="M42 189 Q131 205 225 177" fill="none" stroke="#f2eee4" stroke-width="1.5" opacity=".7"/>
  </svg>`;
}
function contactHref(productName) {
  const message = `Hola, quiero información sobre la gorra ${productName} de Rancho de Gorras.`;
  if (WHATSAPP_NUMBER.trim()) return `https://wa.me/${WHATSAPP_NUMBER.trim()}?text=${encodeURIComponent(message)}`;
  return INSTAGRAM_URL;
}
function renderProducts() {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = products.map((p, i) => `
    <article class="product-card">
      <div class="product-visual" style="background:${p.color}">
        ${p.image ? `<img src="${p.image}" alt="${p.name}">` : `<div class="product-art">${capIllustration(p.color, i)}</div>`}
        <span class="product-tag">${p.tag}</span>
      </div>
      <div class="product-info">
        <span class="product-category">${p.category}</span>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="product-bottom"><span class="product-price">${p.price}</span><a class="product-ask" href="${contactHref(p.name)}" target="_blank" rel="noopener">Consultar ↗</a></div>
      </div>
    </article>`).join("");
}
document.getElementById("contact-link").href = INSTAGRAM_URL;
document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
