document.addEventListener('DOMContentLoaded', () => {
  const moreModal = document.getElementById('more-articles-modal');
  const openMoreBtn = document.getElementById('open-more-articles');
  const extraGrid = document.getElementById('extra-video-grid');

  const extraVideos = [
    {id:'ex1', cat:'smart-rings', badge:'SMART RINGS', date:'Aug 02, 2026', title:'Oura vs Ultrahuman Sleep Test', excerpt:'30 nights, two rings, one winner.', src:'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'},
    {id:'ex2', cat:'meta-smart-glasses', badge:'META GLASSES', date:'Jul 28, 2026', title:'14 Days Living in Ray-Ban Meta', excerpt:'What strangers think when you record.', src:'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'},
    {id:'ex3', cat:'smartwatches', badge:'SMARTWATCHES', date:'Jul 14, 2026', title:'Best Running Watches 2026', excerpt:'GPS lock and HR accuracy ranked.', src:'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'},
    {id:'ex4', cat:'smart-rings', badge:'SMART RINGS', date:'Jul 01, 2026', title:'RingConn Gen 2 No Subscription', excerpt:'Bigger sizes, but does it last?', src:'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'},
    {id:'ex5', cat:'meta-smart-glasses', badge:'META GLASSES', date:'Jun 22, 2026', title:'Translation: 5 Languages Live', excerpt:'Where it nails and where it fails.', src:'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'},
    {id:'ex6', cat:'smartwatches', badge:'SMARTWATCHES', date:'Jun 10, 2026', title:'Health App UI is Broken', excerpt:'What good design should look like.', src:'https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4'}
  ];

  function renderExtra(filter='all'){
    if(!extraGrid) return;
    extraGrid.innerHTML='';
    const list = filter==='all' ? extraVideos : extraVideos.filter(v=>v.cat===filter);
    list.forEach(v=>{
      const card = document.createElement('article');
      card.className='video-card';
      card.dataset.category=v.cat;
      card.innerHTML=`<div class="video-wrap portrait"><video controls preload="metadata" playsinline><source src="${v.src}" type="video/mp4"></video><span class="badge">${v.badge}</span></div><div class="video-info"><span class="date">${v.date}</span><h3>${v.title}</h3><p>${v.excerpt}</p></div>`;
      extraGrid.appendChild(card);
    });
  }

  function closeModal(modal){
    if(!modal) return;
    modal.querySelectorAll('video').forEach(v=>{v.pause()});
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
      renderExtra('all');
    });
  }

  const filterBtns = document.querySelectorAll('[data-filter]');
  filterBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('#main-video-grid .video-card').forEach(card=>{
        card.style.display = (f==='all' || card.dataset.category===f) ? '' : 'none';
      });
    });
  });
  const extraFilterBtns = document.querySelectorAll('[data-filter-extra]');
  extraFilterBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
      extraFilterBtns.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      renderExtra(btn.dataset.filterExtra);
    });
  });

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

  document.querySelectorAll('.video-wrap video').forEach(v=>{
    v.addEventListener('play',()=>{
      document.querySelectorAll('.video-wrap video').forEach(other=>{if(other!==v) other.pause()});
    });
  });
});
