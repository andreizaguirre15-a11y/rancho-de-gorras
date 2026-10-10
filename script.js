// Rancho de Gorras — catálogo inicial con las tres fotos originales enviadas.
// Las fotos se muestran completas, conservando su fondo original y sin recortarlas.
const INSTAGRAM_URL = "https://www.instagram.com/"; // Reemplaza por el enlace real de Rancho de Gorras.
const WHATSAPP_NUMBER = ""; // Opcional: número con código de país, solo números. Ejemplo Honduras: 504XXXXXXXX.

const products = [
  { name: "ARIAT Logo Negro y Beige", category: "ESTILO WESTERN", price: "Consultar precio", tag: "ARIAT", color: "#e9e6dd", description: "Gorra negra con malla beige y logo ARIAT bordado.", image: "images/ariat-negra-beige.png" },
  { name: "ARIAT Escudo Negro", category: "ESTILO WESTERN", price: "Consultar precio", tag: "ARIAT", color: "#e9e6dd", description: "Gorra negra con escudo metálico al frente y malla negra.", image: "images/ariat-negra-escudo.png" },
  { name: "ARIAT Bandera Camuflaje", category: "ESTILO WESTERN", price: "Consultar precio", tag: "ARIAT", color: "#e9e6dd", description: "Gorra camuflaje en tonos tierra con malla beige.", image: "images/ariat-camuflaje-bandera.png" }
];

function contactHref(productName) {
  const message = `Hola, quiero información sobre la gorra ${productName} de Rancho de Gorras.`;
  if (WHATSAPP_NUMBER.trim()) return `https://wa.me/${WHATSAPP_NUMBER.trim()}?text=${encodeURIComponent(message)}`;
  return INSTAGRAM_URL;
}
function renderProducts() {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = products.map((p) => `
    <article class="product-card">
      <div class="product-visual" style="background:${p.color}">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
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
