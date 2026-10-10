
const INSTAGRAM_URL = "https://www.instagram.com/";
const WHATSAPP_NUMBER = "";

const products = [
  {
    name: "ARIAT Logo Negro y Beige",
    category: "ESTILO WESTERN",
    price: "Consultar precio",
    tag: "ARIAT",
    description: "Gorra negra con malla beige y logo ARIAT bordado.",
    image: "ariat-negra-beige.png"
  },
  {
    name: "ARIAT Escudo Negro",
    category: "ESTILO WESTERN",
    price: "Consultar precio",
    tag: "ARIAT",
    description: "Gorra negra con escudo metálico al frente y malla negra.",
    image: "ariat-negra-escudo.png"
  },
  {
    name: "ARIAT Bandera Camuflaje",
    category: "ESTILO WESTERN",
    price: "Consultar precio",
    tag: "ARIAT",
    description: "Gorra camuflaje en tonos tierra con malla beige.",
    image: "ariat-camuflaje-bandera.png"
  }
];

function contactHref(productName) {
  const message = encodeURIComponent(
    `Hola, quiero información sobre la gorra ${productName} de Rancho de Gorras.`
  );

  if (WHATSAPP_NUMBER.trim()) {
    return `https://wa.me/${WHATSAPP_NUMBER.trim()}?text=${message}`;
  }

  return INSTAGRAM_URL;
}

function renderProducts() {
  const grid = document.getElementById("product-grid");

  grid.innerHTML = products.map((p) => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img class="product-image"
             src="${p.image}"
             alt="${p.name}"
             loading="lazy">
      </div>
      <div class="product-info">
        <span class="product-tag">${p.tag}</span>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="product-bottom">
          <span class="product-price">${p.price}</span>
          <a class="product-link"
             href="${contactHref(p.name)}"
             target="_blank"
             rel="noopener">Consultar ↗</a>
        </div>
      </div>
    </article>
  `).join("");
}

document.getElementById("contact-link").href = INSTAGRAM_URL;
document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
