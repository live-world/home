// Tabs, lightbox, theme toggle
const tabs = document.querySelectorAll('.tab');
const galleries = document.querySelectorAll('.gallery');
tabs.forEach(tab => tab.addEventListener('click', () => {
  tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
  tab.setAttribute('aria-selected', 'true');
  const target = tab.dataset.target;
  galleries.forEach(g => g.classList.toggle('hidden', g.dataset.gallery !== target));
}));

const lb = document.getElementById('lightbox');
const lbImg = document.querySelector('.lb-img');
const lbClose = document.querySelector('.lb-close');
document.querySelectorAll('.gallery img').forEach(img => img.addEventListener('click', () => {
  lbImg.src = img.src; lbImg.alt = img.alt; lb.showModal();
}));
lbClose.addEventListener('click', () => lb.close());
lb.addEventListener('click', (e) => {
  const rect = lbImg.getBoundingClientRect();
  const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
  if (!inside) lb.close();
});

const themeToggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved === 'light') { document.body.classList.add('light'); themeToggle.setAttribute('aria-pressed','true'); }
themeToggle.addEventListener('click', () => {
  const light = document.body.classList.toggle('light');
  themeToggle.setAttribute('aria-pressed', light ? 'true' : 'false');
  localStorage.setItem('theme', light ? 'light' : 'dark');
});

document.getElementById('y').textContent = new Date().getFullYear();
