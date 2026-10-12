/* ================= COTIZADOR ================= */
window.enviarCotizacion = function () {
  const nombre = document.getElementById('nombre')?.value.trim() || '';
  const negocio = document.getElementById('negocio')?.value.trim() || '';
  const servicio = document.getElementById('servicio')?.value || '';
  const tipo = document.getElementById('tipo')?.value.trim() || '';
  const necesidad = document.getElementById('necesidad')?.value.trim() || '';

  if (!nombre || !servicio) {
    alert('Por favor completa al menos tu nombre y el servicio.');
    return;
  }

  const mensaje = `Hola JOSMOR 👋, quiero una cotización:%0A%0A` +
    `👤 Nombre: ${encodeURIComponent(nombre)}%0A` +
    `🏢 Negocio: ${encodeURIComponent(negocio || 'No especificado')}%0A` +
    `🛠 Servicio: ${encodeURIComponent(servicio)}%0A` +
    `📂 Tipo: ${encodeURIComponent(tipo || 'No especificado')}%0A` +
    `📝 Necesidad: ${encodeURIComponent(necesidad || 'No especificada')}`;

  window.open('https://wa.me/573223275115?text=' + mensaje, '_blank');
};

/* ================= TABS ================= */
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  if (tabBtns.length === 0) return;

  tabContents.forEach((c, i) => {
    c.style.display = i === 0 ? 'block' : 'none';
    if (i === 0) c.classList.add('active');
    else c.classList.remove('active');
  });

  tabBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-tab');
      const target = document.getElementById(targetId);
      if (!target) return;

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => {
        c.classList.remove('active');
        c.style.display = 'none';
      });

      this.classList.add('active');
      target.classList.add('active');
      target.style.display = 'block';
    });
  });
}

/* ================= MENÚ MÓVIL ================= */
function initMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
    navMenu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => navMenu.classList.remove('open'))
    );
  }
}

/* ================= LIGHTBOX ================= */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  if (!lightbox) return;

  document.querySelectorAll('[data-lightbox]').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
    });
  });
  if (lightboxClose) lightboxClose.addEventListener('click', () => lightbox.classList.remove('active'));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('active');
  });
}

/* ================= NAVBAR SCROLL ================= */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.style.background = window.scrollY > 50 ? 'rgba(10,10,18,0.95)' : 'rgba(10,10,18,0.75)';
  });
}

/* ================= INICIALIZAR ================= */
window.addEventListener('DOMContentLoaded', function () {
  initTabs();
  initMenu();
  initLightbox();
  initNavbar();
});