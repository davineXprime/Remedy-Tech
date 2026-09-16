
document.addEventListener('DOMContentLoaded', () => {
  const moreModal = document.getElementById('more-articles-modal');
  const openMoreBtn = document.getElementById('open-more-articles');
  const extraGrid = document.getElementById('extra-video-grid');

  function closeModal(modal){
    if(!modal) return;
    modal.querySelectorAll('video').forEach(v=>v.pause());
    modal.classList.remove('active');
    document.body.style.overflow='';
  }

  document.querySelectorAll('.modal-close-btn').forEach(btn=>{
    btn.addEventListener('click',()=>closeModal(btn.closest('.modal-overlay')));
  });
  document.querySelectorAll('.modal-overlay').forEach(overlay=>{
    overlay.addEventListener('click',e=>{if(e.target===overlay) closeModal(overlay)});
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){const active=document.querySelector('.modal-overlay.active'); if(active) closeModal(active);}
  });

  if(openMoreBtn && moreModal){
    openMoreBtn.addEventListener('click',()=>{
      moreModal.classList.add('active'); document.body.style.overflow='hidden';
    });
  }

  // Pause other videos when one plays
  document.querySelectorAll('.video-wrap video').forEach(v=>{
    v.addEventListener('play',()=>{
      document.querySelectorAll('.video-wrap video').forEach(other=>{if(other!==v) other.pause()});
    });
  });

  // Nav active
  const sections = document.querySelectorAll('section[id], .footer-block[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const id = entry.target.id.replace('-footer','');
        navLinks.forEach(link=>link.classList.toggle('active', link.getAttribute('href')===`#${id}`));
      }
    });
  },{rootMargin:'-40% 0px -60% 0px'});
  sections.forEach(s=>obs.observe(s));
});
