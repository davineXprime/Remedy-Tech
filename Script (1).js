// Remedy Tech Zone - main.js - GitHub Ready - No modifications after generation
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for navbar
  document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-scroll');
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Modal blur pop-out
  const modal = document.getElementById('modal');
  const openBtn = document.getElementById('openModal');
  const closeBtn = document.getElementById('closeModal');
  const backdrop = document.querySelector('.modal-backdrop');

  function openModal(){
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(){
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if(openBtn) openBtn.addEventListener('click', openModal);
  if(closeBtn) closeBtn.addEventListener('click', closeModal);
  if(backdrop) backdrop.addEventListener('click', closeModal);
});
