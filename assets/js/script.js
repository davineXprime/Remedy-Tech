document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section[id], .footer-block[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const id = entry.target.id.replace('-footer','');
        navLinks.forEach(link=>{
          if(link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  },{rootMargin:'-40% 0px -60% 0px'});
  
  sections.forEach(s=>obs.observe(s));
});
