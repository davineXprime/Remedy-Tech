document.addEventListener('DOMContentLoaded', () => {
  const back = document.querySelector('.back-link');
  if (back) {
    back.addEventListener('mouseenter', () => {
      back.style.color = '#a3e635';
    });
    back.addEventListener('mouseleave', () => {
      back.style.color = '#cbd5e1';
    });
  }
});
