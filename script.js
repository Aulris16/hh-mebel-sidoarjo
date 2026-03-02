// ── NAV SCROLL EFFECT ──
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

// ── HAMBURGER MENU ──
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ── FAQ ACCORDION ──
function toggleFaq(btn) {
  const item = btn.parentElement;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

// ── SCROLL FADE-UP ANIMATION ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── WHATSAPP FORM SEND ──
function kirimWA() {
  const nama   = document.getElementById('f-nama').value.trim();
  const wa     = document.getElementById('f-wa').value.trim();
  const produk = document.getElementById('f-produk').value;
  const pesan  = document.getElementById('f-pesan').value.trim();

  if (!nama || !wa) {
    alert('Mohon isi nama dan nomor WhatsApp Anda.');
    return;
  }

  const msg = `Halo H&H Mebel Sidoarjo,\n\nNama: ${nama}\nNo. WA: ${wa}\nProduk: ${produk || '-'}\nPesan: ${pesan || '-'}\n\nSaya ingin konsultasi lebih lanjut. Terima kasih!`;
  window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`, '_blank');
}
